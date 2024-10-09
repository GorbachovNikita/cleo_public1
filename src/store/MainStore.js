import { get, makeAutoObservable } from "mobx"
import { $host, $authHost } from "../http"

export default class MainStore {

    constructor() {
        this._latestError = ""
        this._currencies = []
        makeAutoObservable(this)
        this.getAllCurrencies()
    }

    get currencies() {
        return this._currencies
    }

    async getAllCurrencies() {
        try {
            let r = (await $host.get("/currency/get_all")).data
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
}