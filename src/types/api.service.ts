import { Injectable } from "@angular/core";
import { Cart } from "./cart.types";
import { IProduct, Products } from "./product.types";
import { Toggler } from "./toggle.types";

@Injectable({
    providedIn: 'root',
  })
export class ApiService
{
    private myProducts : Products;
    get products(): Array<IProduct> {
        return this.myProducts.data;
    }

    private myCart: Cart;
    public get cart() : Cart {
        return this.myCart;
    }

    private myToggler: Toggler;
    public get toggler(): Toggler {
        return this.myToggler;
    }

    constructor () {
        this.myProducts = new Products();
        this.myCart = new Cart();
        this.myToggler = new Toggler();
    }


}