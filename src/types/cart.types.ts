import { IProduct } from "./product.types";

export class Cart
{
    data: Array<ICartItem>;

    constructor() {
        this.data = new Array();
    }

    addToCart(item: IProduct): void {
        this.data.forEach(i => {
            if (item.id = i.product.id)
            {
                i.count++;
                item.deliveryOptions.available--;
                return;
            }
        });
        this.data.push({ product: item, count: 1});
        item.deliveryOptions.available--;
    }

    getTotalCount() : number {
        let result: number = 0;
        this.data.forEach(i => {
            result += i.count;
        });
        return result;
    }
}

export interface ICartItem
{
    product: IProduct,
    count: number,
}