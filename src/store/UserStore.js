import {makeAutoObservable} from "mobx"
import {$authHost} from "../http"

export default class UserStore {

    constructor() {
        this._isAuth = false
        this._user = {
            balance: 0,
            uuid: ""
        }
        this._latestError = ""
        makeAutoObservable(this)
        let token = localStorage.getItem('token')
        if (token) {
            getClientData()
        } else {
            localStorage.removeItem("token")
        }
    }

    // TODO !!
    auth(options) {

    }
    /**
     * Возвращает кешированного юзера без служебных данных, чтобы случайно не вывели
     */
    get user() {
        return {
            uuid: this._user.uuid,
            join_date: this._user.join_date,
            is_banned: this._user.is_banned,
            referral_percentage: this._user.referral_percentage,
            sales_percentage: this._user.sales_percentage,
            balance: this._user.balance,
        }
    }
    // отдает последнюю ошибку полученую при сетевом запросе
    get latestError() {
        return this._latestError
    }
    /**
     * получает баланс пользователя, если произошла ошибка,
     * выводит последный полученый баланс, а ошибку прописывает в _latestError
     * 
     * кешируется
     * 
     * @returns циферку баланса
     */
    async getBalance() {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return 0
        }
        try {
            let r = (await $authHost.get("/client/balance/get")).data

            if (!r.ok) {
                this._latestError = r.message
                return this._user.balance
            }

            this._user.balance = r.content
            this._latestError = r.message
            return this._user.balance
        } catch (e) {
            this._latestError = e.message
            return this._user.balance
        }
    }
    /**
     * получает покупку (или как оно правильно переводится)
     * при ошибке выводит ее в _latestError и выдает пустой объект
     * 
     * fetches purchase data by it`s UUID
     * 
     * @param {*} puuid - string - uuid покупки
     * @returns {
     *     "uuid": '8a53a159-f9d5-4052-af75-0e7d565febfc',
     *     "user": '2a53a159-f9d5-4012-af75-0e7d555febzz',
     *     "purchase_time": "2024-05-03T03:11:13.838720",
     *     "paid_amount": 0.0,
     *     "quantity": 1,
     *     "refunded_quantity": 1,
     *     "category": 'category',
     *     "country": 'country',
     *     "bin": 541123
     * }
     */
    async getPurchase(puuid) {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return 0
        }
        try {
            let r = (await $authHost.get(`/purchase/get/${puuid}`)).data

            if (!r.ok) {
                this._latestError = r.message
                return {}
            }

            this._latestError = r.message
            return r.content
        } catch (e) {
            this._latestError = e.message
            return {}
        }
    }
    /**
     * получает все покупки (или как оно правильно переводится)
     * при ошибке выводит ее в _latestError и выдает пустой массив
     * 
     * fetches a list of client`s purchases by his UUID
     * 
     * @returns [
     *     {
     *         "uuid": '8a53a159-f9d5-4052-af75-0e7d565febfc',
     *         "user": '2a53a159-f9d5-4012-af75-0e7d555febzz',
     *         "purchase_time": "2024-05-03T03:11:13.838720",
     *         "paid_amount": 0.0,
     *         "quantity": 1,
     *         "refunded_quantity": 1,
     *         "category": 'category',
     *         "country": 'country',
     *         "bin": 541123
     *     },
     *     {
     *         "uuid": '3a53a129-f9d5-5052-a8i5-0e7d565oekfe',
     *         "user": '2a53a159-f9d5-4012-af75-0e7d555febzz',
     *         "purchase_time": "2024-05-03T03:11:13.838720",
     *         "paid_amount": 0.0,
     *         "quantity": 2,
     *         "refunded_quantity": 0,
     *         "category": 'category',
     *         "country": 'country',
     *         "bin": 541124
     *     }
     * ]
     */
    async getPurchasesList() {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return 0
        }
        try {
            let r = (await $authHost.get(`/purchase/get_user_history/${this._user.uuid}`)).data

            if (!r.ok) {
                this._latestError = r.message
                return []
            }
            this._latestError = r.message
            return r.content
        } catch (e) {
            this._latestError = e.message
            return []
        }
    }
    /**
     * получает платеж
     * при ошибке выводит ее в _latestError и выдает пустой объект
     * 
     * @param  puuid - string - uuid платежа
     * @returns {
     *      "uuid": "ju85faec-b661-4d79-b560-cd197401a7b1",
     *      "user": "9e326e68-6566-4796-a4b6-9182b5obadb1",
     *      "amount": 0.4218,
     *      "currency": "LTC",
     *      "created_date": "2024-07-28T08:58:38.565878",
     *      "status": true,
     *      "usdt_amount": 25,
     *      "invoice_id": "1722757117770806269",
     *      "address": "MQeeyxDxGdfDQnfWHqW2pW9LYF5vbpovL8",
     *      "pay_url": null,
     *      "callback_url": "https://your-domain.com",
     *      "method": "CryptAPI ltc"
     * }
     */
    async getPayment(puuid) {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return 0
        }
        try {
            let r = (await $authHost.get(`/payment/get/${puuid}`)).data

            if (!r.ok) {
                this._latestError = r.message
                return {}
            }
            this._latestError = r.message
            return r.content
        } catch (e) {
            this._latestError = e.message
            return {}
        }
    }
    /**
     * получает историю платежей
     * при ошибке выводит ее в _latestError и выдает пустой массив
     * 
     * Есть еще один подобный метод, но я хз какой правильный
     * 
     * А вот этого метода в проиватной доке нет
     * 
     * @returns [
     *     {
     *         "uuid": "ju85faec-b661-4d79-b560-cd197401a7b1",
     *         "user": "9e326e68-6566-4796-a4b6-9182b5obadb1",
     *         "amount": 0.4218,
     *         "currency": "LTC",
     *         "created_date": "2024-07-28T08:58:38.565878",
     *         "status": true,
     *         "usdt_amount": 25,
     *         "invoice_id": "1722757117770806269",
     *         "address": "MQeeyxDxGdfDQnfWHqW2pW9LYF5vbpovL8",
     *         "pay_url": null,
     *         "callback_url": "https://your-domain.com"
     *     }
     * ]
     */
    async getPaymentsHistory() {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return 0
        }
        try {
            let r = (await $authHost.get(`/payment/get_user_history/${this._user.uuid}`)).data

            if (!r.ok) {
                this._latestError = r.message
                return []
            }
            this._latestError = r.message
            return r.content
        } catch (e) {
            this._latestError = e.message
            return []
        }
    }
    /**
     * создает платеж
     * при ошибке выводит ее в _latestError и выдает пустой объект
     * 
     * creates a new payment
     * 
     * @param {*} currency - string - название валюты
     * @param {*} usdt_amount - number(int/float) - сумма в usdt
     * @returns {
     *     "uuid": "9i330ea8-2cf8-4aed-a525-6f8bc002212b",
     *     "currency": "LTC",
     *     "usdt_amount": 100,
     *     "amount": 1.447965,
     *     "address": "MHsHGrukCoqKDkd55ejKEo7zfXp95CaWWx",
     *     "pay_url": null
     * }
     */
    async createPayment(currency, usdt_amount) {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return 0
        }
        try {
            let r = (await $authHost.post("/payment/create", { data: { currency, usdt_amount, callback_url: "" } })).data
            if (!r.ok) {
                this._latestError = r.message
                return {}
            }

            this._latestError = r.message
            return r.content
        } catch (e) {
            this._latestError = e.message
            return {}
        }
    }
    /**
     * 
     * Ну я реализовал, но пока хз что это и что возвращает
     * Да в закрытых доках его нет
     * 
     * @param {*} categorySlug 
     * @param {*} countrySlug 
     * @returns 
     */
    async getDiscountedPrice(categorySlug, countrySlug) {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return {}
        }
        try {
            let r = (await $authHost.get(`/discount/get_discounted_price?uuid=${this._user.uuid}&category_slug=${categorySlug}&country_slug=${countrySlug}`)).data
            if (!r.ok) {
                this._latestError = r.message
                return {}
            }

            this._latestError = r.message
            return r.content
        } catch (e) {
            this._latestError = e.message
            return {}
        }
    }
    /**
     * fetches count of client`s purchases by his UUID
     * 
     * @returns int
     */
    async getPurchasesAmountByClient() {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return {}
        }
        try {
            let r = (await $authHost.get(`/purchase/get_user_amount/${this._user.uuid}`)).data
            if (!r.ok) {
                this._latestError = r.message
                return 0
            }

            this._latestError = r.message
            return r.content.count
        } catch (error) {
            this._latestError = e.message
            return 0
        }
    }
    /**
     * fetches link data by it`s client owner UUID
     * 
     * @returns {
     *     "uuid": "90ed51b1-9980-4c21-83c0-858a6ca1322l",
     *     "code": "sFWs12S-siL",
     *     "is_commercial": False,
     *     "user": "0p43dc26-2339-4f64-a6b3-2376c48c9ae7"
     * }
     */
    async getReferralLink() {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return {}
        }
        try {
            let r = (await $authHost.get(`/link/get_by_user_uuid/${this._user.uuid}`)).data
            if (!r.ok) {
                this._latestError = r.message
                return 0
            }

            this._latestError = r.message
            return r.content
        } catch (e) {
            this._latestError = e.message
            return 0
        }
    }

    /**
     * fetches client data by client`s token
     * 
     * В случае успеха кешируется
     * 
     * @returns {
     *     "uuid": "21e073eb-b693-47da-9279-d09cf3zoc55c",
     *     "token": "%12Gb&%_zZz?[|,sdfwej3:*sd#JAR@7yji0",
     *     "referral_uuid": None,
     *     "join_date": "2024-05-01T17:31:31.710252",
     *     "is_banned": False,
     *     "referral_percentage": 5,
     *     "sales_percentage": 0,
     *     "permission": 3,
     *     "balance": 0
     * }
     */
    async getClientData() {
        if (!this._isAuth) {
            this._latestError = "authentication error"
            return {}
        }
        try {
            let r = (await $authHost.get(`/client/get_by_token`)).data
            if (!r.ok) {
                this._latestError = r.message
                return {}
            }

            this._latestError = r.message
            this._user = r.content.user
            this._isAuth = true
            return r.content.user
        } catch (error) {
            this._latestError = e.message
            return {}
        }
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}
