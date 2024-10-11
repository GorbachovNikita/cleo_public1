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
            this._latestError = r.message
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
     * fetches a list of all countries in stock
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
    /**
     * получает общее количество карт на продаже
     * 
     * fetches count of all positions in stock
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
    /**
     * получает общее количество карт на продаже
     * 
     * fetches amount of positions in category
     * 
     * кешируется
     * 
     * @param category - string - slug имя категории
     * @param is_purchased - bool - я хз что мб типо, куплено
     * 
     * @returns number
     */
    async getPositionsInStockByCategory(category, is_purchased) {
        try {
            let r = (await $authHost.get(`/position/get_amount_by_category?category=${category}&is_purchased=${is_purchased}`)).data

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
    /**
     * 
     * Получает позиции закупок по uuid юзера
     * 
     * @returns [
     *     {
     *         "uuid": "123fd21d-7216-4e50-b91d-fb625d95d0c7",
     *         "category": "high-valid-cc-no-refund-3",
     *         "country": "united-states",
     *         "data": "CC_STRING",
     *         "seller": "90hf0ce0-48f9-4019-97dc-1edb530dad33",
     *         "upload": "654dcb3c-5996-406d-801e-fb6ae6f347ea",
     *         "bin": 524452,
     *         "is_loaded": true,
     *         "purchase": "9hg2e55f-c2c8-4dd2-aed1-8f58cb5a7608",
     *         "is_refunded": false,
     *         "is_purchased": true,
     *         "buyer": "0f456e68-6566-4796-a4b6-9182b5abadb1"
     *     },
     *     {
     *         "uuid": "321b084c-c296-48c5-a990-9c1dd8a67a3b",
     *         "category": "high-valid-cc-no-refund-3",
     *         "country": "japan",
     *         "data": "CC_STRING",
     *         "seller": "90hf0ce0-48f9-4019-97dc-1edb530dad33",
     *         "upload": "654dcb3c-5996-406d-801e-fb6ae6f347ea",
     *         "bin": 461676,
     *         "is_loaded": true,
     *         "purchase": "768b9c88-3e2b-450e-b598-95b78ebb4523",
     *         "is_refunded": false,
     *         "is_purchased": true,
     *         "buyer": "of456e68-6566-4796-a4b6-9182b5abadb1"
     *     }
     * ]
     */
    async getPositionByBuyer() {
        try {
            let r = (await $authHost.get(`/position/get_by_buyer_uuid/${this._user.uuid}`)).data
            if (!r.ok) {
                this._latestError = r.message
                return {}
            }

            this._latestError = r.message
            return r.content
        } catch (error) {
            this._latestError = e.message
            return {}
        }
    }
    /**
     * получает позиции из заказа, да только позиции без деталей самого заказа
     * 
     * fetches a list of positions by purchase UUID
     * 
     * @param uuid - строка - uuid заказа
     * @returns [
     *     {
     *         "uuid": "123fd21d-7216-4e50-b91d-fb625d95d0c7",
     *         "category": "high-valid-cc-no-refund-3",
     *         "country": "united-states",
     *         "data": "CC_STRING",
     *         "seller": "90hf0ce0-48f9-4019-97dc-1edb530dad33",
     *         "upload": "654dcb3c-5996-406d-801e-fb6ae6f347ea",
     *         "bin": 524452,
     *         "is_loaded": true,
     *         "purchase": "9hg2e55f-c2c8-4dd2-aed1-8f58cb5a7608",
     *         "is_refunded": false,
     *         "is_purchased": true,
     *         "buyer": "0f456e68-6566-4796-a4b6-9182b5abadb1"
     *     },
     *     {
     *         "uuid": "321b084c-c296-48c5-a990-9c1dd8a67a3b",
     *         "category": "high-valid-cc-no-refund-3",
     *         "country": "japan",
     *         "data": "CC_STRING",
     *         "seller": "90hf0ce0-48f9-4019-97dc-1edb530dad33",
     *         "upload": "654dcb3c-5996-406d-801e-fb6ae6f347ea",
     *         "bin": 461676,
     *         "is_loaded": true,
     *         "purchase": "768b9c88-3e2b-450e-b598-95b78ebb4523",
     *         "is_refunded": false,
     *         "is_purchased": true,
     *         "buyer": "of456e68-6566-4796-a4b6-9182b5abadb1"
     *     }
     * ]
     */
    async getPositionByPurchare(uuid) {
        try {
            let r = (await $authHost.get(`/position/get_by_purchase_uuid/${uuid}`)).data
            if (!r.ok) {
                this._latestError = r.message
                return []
            }

            this._latestError = r.message
            return r.content.positions
        } catch (error) {
            this._latestError = e.message
            return []
        }
    }

    /**
     * 
     * проверяет существование заказа, если я правильно понял, ну и получает по нему инфу
     * 
     * @param uuid - строка - uuid заказа
     * @returns {
     *     'was_missing': False,
     *     'positions': [
     *         {
     *             "uuid": "123fd21d-7216-4e50-b91d-fb625d95d0c7",
     *             "category": "high-valid-cc-no-refund-3",
     *             "country": "united-states",
     *             "data": "CC_STRING",
     *             "seller": "90hf0ce0-48f9-4019-97dc-1edb530dad33",
     *             "upload": "654dcb3c-5996-406d-801e-fb6ae6f347ea",
     *             "bin": 524452,
     *             "is_loaded": true,
     *             "purchase": "9hg2e55f-c2c8-4dd2-aed1-8f58cb5a7608",
     *             "is_refunded": false,
     *             "is_purchased": true,
     *             "buyer": "0f456e68-6566-4796-a4b6-9182b5abadb1"
     *         },
     *         {
     *             "uuid": "321b084c-c296-48c5-a990-9c1dd8a67a3b",
     *             "category": "high-valid-cc-no-refund-3",
     *             "country": "japan",
     *             "data": "CC_STRING",
     *             "seller": "90hf0ce0-48f9-4019-97dc-1edb530dad33",
     *             "upload": "654dcb3c-5996-406d-801e-fb6ae6f347ea",
     *             "bin": 461676,
     *             "is_loaded": true,
     *             "purchase": "768b9c88-3e2b-450e-b598-95b78ebb4523",
     *             "is_refunded": false,
     *             "is_purchased": true,
     *             "buyer": "of456e68-6566-4796-a4b6-9182b5abadb1"
     *         }
     *     ],
     *     'purchase': {
     *         "uuid": '8a53a159-f9d5-4052-af75-0e7d565febfc',
     *         "user": '2a53a159-f9d5-4012-af75-0e7d555febzz',
     *         "purchase_time": "2024-05-03T03:11:13.838720",
     *         "paid_amount": 0.0,
     *         "quantity": 1,
     *         "refunded_quantity": 1,
     *         "category": 'category',
     *         "country": 'country',
     *         "bin": 541123
     *     }
     * }
     */
    async verifyPositionInPurchareByPurchare(uuid) {
        try {
            let r = (await $authHost.get(`/position/verify/{uuid}`)).data
            if (!r.ok) {
                this._latestError = r.message
                return {}
            }

            this._latestError = r.message
            return r.content
        } catch (error) {
            this._latestError = e.message
            return {}
        }
    }
    /**
     * 
     * Если коротко совершаем покупку, если на балансе хватает
     * 
     * purchases positions if client has enough balance, there is enough of positions corresponding to criteria in stock
     * 
     * @param category - строка - slug категории
     * @param bin - чиселка - сам bin
     * @param amount - чиселка - количество товара
     * @param checker_enabled - булеан - что-то про автовозврат (цитата из api reference: buy with autorefund or without (true is available only for categories where checker_enabled field is true))
     * 
     * А вот тут прикол
     * В паблик доке было так:
     *      @returns uuid заказа
     * 
     * А в закрытой так:
     *      Response if there is not enough quantity:
     * 
     *      @returns {
     *          'available_quantity': len(positions)
     *      }
     * 
     *      и сообщение об ошибке: "not enough positions in stock"
     * 
     *      Successful response example:
     * 
     *      @returns {
     *          "purchase_uuid": "13390a42-l52b-142c-22vc-e799c8eec3r9",
     *          "positions": [
     *              {
     *                  "uuid": "9z391a65-hbf9-7189-9oe4-29b4bad6d304",
     *                  "category": "best-category",
     *                  "country": "best-country",
     *                  "data": "1234567812345678|12|34|123",
     *                  "seller": None,
     *                  "upload": "77661be8-1b73-4456-aa69-d3e0e5e34cf6",
     *                  "bin": 123456,
     *                  "is_loaded": True,
     *                  "purchase": None,
     *                  "is_refunded": False,
     *                  "is_purchased": False,
     *                  "buyer": None
     *              }
     *          ],
     *          'refunded_quantity': 0,
     *          'refund_amount': 0
     *      }
     * 
     * Проверить не могу, так как на тестовом акке денег нет(
     */
    async purchasePositionByCategoryAndBin(category, bin, amount, checker_enabled) {
        try {
            let r = (await $authHost.post(`/position/purchase`, {
                data: {
                    category,
                    bin,
                    amount,
                    checker_enabled,
                    callback_url: ""
                }
            })).data
            if (!r.ok) {
                this._latestError = r.message
                return ""
            }

            this._latestError = r.message
            return r.content.uuid
        } catch (error) {
            this._latestError = e.message
            return ""
        }
    }
    /**
     * 
     * @param categorySlug - string - slug название категории
     * @returns [
     *     { "slug": "ireland", "name": "🇮🇪 IRELAND" },
     *     { "slug": "indonesia", "name": "🇮🇩 INDONESIA" }
     * ]
     */
    async getCountriesInStockByCategory(categorySlug) {
        try {
            let r = (await $authHost.get(`/country/get_category_countries/${categorySlug}`)).data
            if (!r.ok) {
                this._latestError = r.message
                return []
            }

            this._latestError = r.message
            return r.content
        } catch (error) {
            this._latestError = e.message
            return []
        }
    }
}


let t = 1
