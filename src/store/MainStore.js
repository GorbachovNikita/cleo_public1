import { get, makeAutoObservable } from "mobx"
import { $authHost, $host } from "../http"

export default class MainStore {

    constructor() {
        this._latestError = ""
        this._currencies = []
        this._categories = []
        this._countries = []
        this._bins = []
        this._in_stock = 0
        makeAutoObservable(this)
        this.getAllCurrencies()
        this.getCategories()
        this.getCountries()
        this.getBins()
        this.getPositionsInStock()
    }

    /**
     * кеш валют
     */
    get currencies() {
        return this._currencies
    }

    /**
     * кеш категорий
     */
    get categories() {
        return this._categories
    }

    /**
     * кеш стран
     */
    get countries() {
        return this._countries
    }

    /**
     * кеш bin'ов
     */
    get bins() {
        return this._bins
    }

    /**
     * получает все доступные валюты
     * 
     * кешируется
     * 
     * @returns [
     *     {
     *         "external_name": "USDT (CryptoBot)",
     *         "comission": 0,
     *         "min_amount": 15
     *     },
     *     {
     *         "external_name": "BTC (CryptoBot)",
     *         "comission": 0,
     *         "min_amount": 15
     *     }
     * ]
     */
    async getAllCurrencies() {
        try {
            let r = (await $authHost.get("/currency/get_all")).data
            if (!r.ok) {
                this._latestError = r.message
                return this._currencies
            }

            this._currencies = r.content
            this._latestError = r.message
            return r.content

        } catch (error) {
            this._latestError = error.message
            return this._currencies
        }
    }

    /**
     * получает все категории
     * 
     * кешируется
     * 
     * @returns [
     *   {	
     *     "slug": "category1",
     *     "name": "category1",
     *     "description": "description1",
     *     "price": 15.0,
     *     "checker_enabled": true
     *   },
     *   {
     *     "slug": "category2",
     *     "name": "category2",
     *     "description": "description2",
     *     "price": 10.0,
     *     "checker_enabled": false
     *   }
     * ]
     */
    async getCategories() {
        try {
            let r = (await $authHost.get("/category/get_all_visible")).data

            if (!r.ok) {
                this._latestError = r.message
                return this._categories
            }

            this._latestError = r.message
            this._categories = r.content
            return this._categories
        } catch (error) {
            this._latestError = error.message
            return this._categories
        }
    }

    /**
     * 
     * получает все категории по slug имени
     * 
     * @param slug - string - slug категории
     * @returns {
     *    "slug": "name",
     *    "name": "name",
     *    "description": "description",
     *    "price": 15.0,
     *    "is_enabled": true,
     *    "checker_enabled": true,
     *    "client_visible": true
     * }
     */
    async getCategoryBySlug(slug) {
        try {
            let r = (await $authHost.get(`/category/get/${slug}`)).data

            if (!r.ok) {
                this._latestError = r.message
                return {}
            }

            this._latestError = r.message
            return r.content
        } catch (error) {
            this._latestError = error.message
            return {}
        }
    }

    /**
     * получает все доступные страны
     * 
     * кешируется
     * 
     * @returns [
     *   {"slug": "ireland", "name": "🇮🇪 IRELAND"},
     *   {"slug", "indonesia", "name": "🇮🇩 INDONESIA"}
     * ]
     */
    async getCountries() {
        try {
            let r = (await $authHost.get("/country/get_in_stock")).data

            if (!r.ok) {
                this._latestError = r.message
                return this._countries
            }

            this._latestError = r.message
            this._countries = r.content
            return this._countries
        } catch (error) {
            this._latestError = error.message
            return this._countries
        }
    }
    /**
     * получает все доступные bin'ы
     * 
     * кешируется после запроса
     * 
     * @returns [
     *   {"bin": 553732}, 
     *   {"bin": 379313}
     * ]
     */
    async getBins() {
        try {
            let r = (await $authHost.get("/bin/list")).data

            if (!r.ok) {
                this._latestError = r.message
                return this._bins
            }

            this._latestError = r.message
            this._bins = r.content
            return this._bins
        } catch (error) {
            this._latestError = error.message
            return this._bins
        }
    }
    /**
     * получает bin'ы с учетом фильтров
     * 
     * @param slugs = {
     *   countrySlug: string - slug названия страны;
     *   categorySlug: string - slug названия категории;
     * }
     * @returns [
     *   {"bin": 553732}, 
     *   {"bin": 379313}
     * ]
     */
    async getBinsByFilter(slugs) {
        const { countrySlug, categorySlug } = slugs

        if (countrySlug && !categorySlug) {
            try {
                let r = (await $authHost.get(`/bin/country_list/${countrySlug}`)).data

                if (!r.ok) {
                    this._latestError = r.message
                    return []
                }

                this._latestError = r.message
                return r.content
            } catch (error) {
                this._latestError = error.message
                return []
            }
        } else if (!countrySlug && categorySlug) {
            try {
                let r = (await $authHost.get(`/bin/category_list/${categorySlug}`)).data

                if (!r.ok) {
                    this._latestError = r.message
                    return []
                }

                this._latestError = r.message
                return r.content
            } catch (error) {
                this._latestError = error.message
                return []
            }
        } else if (categorySlug && countrySlug) {
            try {
                let r = (await $authHost.get(`/bin/get_by_category_and_country?category=${categorySlug}&country=${countrySlug}`)).data

                if (!r.ok) {
                    this._latestError = r.message
                    return []
                }

                this._latestError = r.message
                return r.content
            } catch (error) {
                this._latestError = error.message
                return []
            }
        } else {
            this._latestError = "not countrySlug and/or categorySlug"
            return []
        }
    }
    // 
    /**
     * получает общее количество карт на продаже
     * 
     * кешируется
     * 
     * @returns number
     */
    async getPositionsInStock() {
        try {
            let r = (await $authHost.get("/position/get_amount_in_stock")).data

            if (!r.ok) {
                this._latestError = r.message
                return this._in_stock
            }

            this._latestError = r.message
            this._in_stock = r.content.count
            return this._in_stock
        } catch (error) {
            this._latestError = error.message
            return this._in_stock
        }
    }
}