import { EMPTY_PRODUCT, PRODUCTS_DATA } from "src/data/product.data";

export interface IProduct
{
    id: number,
    company: string,
    title: string,
    image: string,
    rating: IProductRating,
    price: IProductPrice,
    deliveryOptions: IProductDeliveryOptions,
    bage: IProductBage,
    colors: {
        one: IProductColor,
        two: IProductColor,
    },
}

export interface IProductRating
{
    value: number,
    reviews: number,
}

export interface IProductPrice
{
    value: number,
    discount?: number,
}

export interface IProductDeliveryOptions
{
    delivery: string,
    postmate: boolean,
    available: number,
}

export interface IProductBage
{
    color: string,
    text: string,
}

export interface IProductColor
{
    color: string,
    image: string,
}

export interface ICartData
{
    id: number,
    count: number,
}

export class Products
{
    private myProducts: Array<IProduct>;
    public get data(): Array<IProduct> {
        return this.myProducts;
    }

    constructor() {
        this.myProducts = PRODUCTS_DATA;
        let unique: Array<number> = new Array();
        this.myProducts.forEach(p => {
            if (unique.includes(p.id))
                throw Error("Constraint error. Product's ID must be unique");
            unique.push(p.id);
        })
    }

    public static getEmptyProduct() : IProduct
    {
        return EMPTY_PRODUCT;
    }
}

