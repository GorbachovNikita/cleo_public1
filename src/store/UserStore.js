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
    }

    // TODO !!
    auth(options) {

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
            this._latestError = "Unauthorized"
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
            this._latestError = "Unauthorized"
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
            this._latestError = "Unauthorized"
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
            this._latestError = "Unauthorized"
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
            this._latestError = "Unauthorized"
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
            this._latestError = "Unauthorized"
            return 0
        }
        try {
            let r = (await $authHost.post("/payment/create", {data: {currency, usdt_amount}})).data
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
        if (!this._isAuth) {
            this._latestError = "Unauthorized"
            return 0
        }
        try {
            let r = (await $authHost.get(`/position/get_by_buyer_uuid/${this._user.uuid}`)).data
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
     * получает позиции из заказа, да только позиции без деталей самого заказа
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
        if (!this._isAuth) {
            this._latestError = "Unauthorized"
            return 0
        }
        try {
            let r = (await $authHost.get(`/position/get_by_purchase_uuid/${uuid}`)).data
            if (!r.ok) {
                this._latestError = r.message
                return []
            }

            this._latestError = r.message
            return r.content.positions
        } catch (e) {
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
        if (!this._isAuth) {
            this._latestError = "Unauthorized"
            return 0
        }
        try {
            let r = (await $authHost.get(`/position/verify/{uuid}`)).data
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
     * @param category - строка - slug категории
     * @param bin - чиселка - сам bin
     * @param amount - чиселка - количество товара
     * @param checker_enabled - булеан - что-то про автовозврат (цитата из api reference: buy with autorefund or without (true is available only for
    categories where checker_enabled field is true))

     * @returns uuid заказа
     */
    async purchasePositionByCategoryAndBin(category, bin, amount, checker_enabled) {
        if (!this._isAuth) {
            this._latestError = "Unauthorized"
            return ""
        }
        try {
            let r = (await $authHost.post(`/position/purchase`, {
                data: {
                    category,
                    bin,
                    amount,
                    checker_enabled,
                }
            })).data
            if (!r.ok) {
                this._latestError = r.message
                return ""
            }

            this._latestError = r.message
            return r.content.uuid
        } catch (e) {
            this._latestError = e.message
            return ""
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

let t = 1