import { get, makeAutoObservable } from "mobx"
import { $host, $authHost } from "../http"

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


    // получает баланс пользователя, если произошла ошибка,
    // выводит последный полученый баланс, а ошибку прописывает в _latestError
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

    // получает покупку (или как оно правильно переводится)
    // при ошибке выводит ее в _latestError и выдает объект с пустыми полями
    // параметры:
    //      puuid - string - uuid покупки
    async getPurchase(puuid) {
        if (!this._isAuth) {
            this._latestError = "Unauthorized"
            return 0
        }
        try {
            let r = (await $authHost.get(`/purchase/get/${puuid}`)).data

            if (!r.ok) {
                this._latestError = r.message
                return {
                    uuid: "",
                    user: "",
                    purchase_time: "",
                    paid_amount: "",
                    quantity: "",
                    refunded_quantity: "",
                    category: "",
                    country: "",
                    bin: "",
                }
            }

            this._latestError = r.message
            return r.content
        } catch (e) {
            this._latestError = e.message
            return {
                uuid: "",
                user: "",
                purchase_time: "",
                paid_amount: "",
                quantity: "",
                refunded_quantity: "",
                category: "",
                country: "",
                bin: "",
            }
        }
    }

    // получает все покупки (или как оно правильно переводится)
    // при ошибке выводит ее в _latestError и выдает пустой массив
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

    // получает платеж
    // при ошибке выводит ее в _latestError и выдает объект с пустыми полями
    // параметры:
    //      puuid - string - uuid платежа
    async getPayment(puuid) {
        if (!this._isAuth) {
            this._latestError = "Unauthorized"
            return 0
        }
        try {
            let r = (await $authHost.get(`/payment/get/${puuid}`)).data

            if (!r.ok) {
                this._latestError = r.message
                return {
                    uuid: "",
                    user: "",
                    amount: "",
                    currency: "",
                    created_date: "",
                    status: "",
                    usdt_amount: "",
                    invoice_identifier: "",
                    address: "",
                    pay_url: "",
                    callback_url: "",
                    method: "",
                }
            }
            this._latestError = r.message
            return r.content
        } catch (e) {
            this._latestError = e.message
            return {
                uuid: "",
                user: "",
                amount: "",
                currency: "",
                created_date: "",
                status: "",
                usdt_amount: "",
                invoice_identifier: "",
                address: "",
                pay_url: "",
                callback_url: "",
                method: "",
            }
        }
    }

    // получает историю платежей
    // при ошибке выводит ее в _latestError и выдает пустой массив
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

    // создает платеж
    // при ошибке выводит ее в _latestError и выдает объект с пустыми полями
    // параметры:
    //      currency - string - название валюты
    //      usdt_amount - number(int/float) - сумма в usdt
    async createPayment(currency, usdt_amount) {
        if (!this._isAuth) {
            this._latestError = "Unauthorized"
            return 0
        }
        try {
            let r = (await $authHost.post("/payment/create", { currency, usdt_amount })).data
            if (!r.ok) {
                this._latestError = r.message
                return {
                    uuid: "",
                    currency: "",
                    usdt_amount: "",
                    amount: "",
                    address: "",
                    pay_url: "",
                }
            }

            this._latestError = r.message
            return r.content
        } catch (error) {
            this._latestError = e.message
            return {
                uuid: "",
                currency: "",
                usdt_amount: "",
                amount: "",
                address: "",
                pay_url: "",
            }
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