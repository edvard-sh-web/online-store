import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {"id": 1, "name": "Refrigerators"},
            {"id": 2, "name": "Smartphones"},
            {"id": 3, "name": "Laptops"},
            {"id": 4    , "name": "TVs"}
        ]
        this._brands = [
            {"id": 1, "name": "Nokia"},
            {"id": 2, "name": "Apple"},
            {"id": 3, "name": "Lenovo"},
            {"id": 4, "name": "LG"},
            {"id": 5, "name": "Samsung"},
        ]
        this._devices = [
            {
                "id": 1,
                "name": "iPhone 13",
                "price": 50000,
                "rating": 5,
                "img": "https://media.wired.com/photos/62d75d34ddaaa99a1df8e61d/master/pass/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg",
                "typeId": 2,
                "brandId": 2
            },
            {
                "id": 2,
                "name": "Test",
                "price": 50000,
                "rating": 4,
                "img": "https://www.deccanherald.com/sites/dh/files/article_images/2020/02/11/file74611pmyc4lm51g790g-1581415869.jpg",
                "typeId": 2,
                "brandId": 2
            },
            {
                "id": 3,
                "name": "Note Pro",
                "price": 50000,
                "rating": 3,
                "img": "https://www.deccanherald.com/sites/dh/files/article_images/2020/02/11/file74611pmyc4lm51g790g-1581415869.jpg",
                "typeId": 2,
                "brandId": 2
            },
            {
                "id": 4,
                "name": "Galaxy S",
                "price": 50000,
                "rating": 4,
                "img": "https://www.deccanherald.com/sites/dh/files/article_images/2020/02/11/file74611pmyc4lm51g790g-1581415869.jpg",
                "typeId": 2,
                "brandId": 1
            },
            {
                "id": 5,
                "name": "Galaxy P",
                "price": 50000,
                "rating": 5,
                "img": "https://www.deccanherald.com/sites/dh/files/article_images/2020/02/11/file74611pmyc4lm51g790g-1581415869.jpg",
                "typeId": 2,
                "brandId": 1
            }
        ]

        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}