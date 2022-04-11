import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS_DATA } from 'src/data/product.data';
import { ApiService } from 'src/types/api.service';
import { IProduct } from 'src/types/product.types';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  
  @Input() products: Array<IProduct>;

  constructor(public service: ApiService) {
    this.products = service.products;
  }

  ngOnInit(): void {
  }
/*
  updateCart(product: IProduct):void {
    let exists: boolean = false;
    for(let i = 0; i < this.cartData.length; i++)
    {
      if (this.cartData[i].id != product.id) continue;
      this.cartData[i].count++;
      exists = true;
      break;
    }
    if (!exists)
      this.cartData.push({ count: 1, id: product.id});

    this.cartTotal++;
    this.cartTotalChanged.emit(this.cartTotal);
  }

  getFilters(): Array<IToggle> {
    let result: Array<IToggle> = new Array();
    let list: Array<ToggledFilters> = new Array();
    result.push({ value: ToggledFilters.All, label: 'Показать все', checked: true});
    this.products.forEach(item => {
      if (item.price.discount != null)
        if (item.price.discount != 0)
          if (!list.includes(ToggledFilters.Discounted))
          {
            result.push({ value: ToggledFilters.Discounted, label: 'Со скидкой', checked: false});
            list.push(ToggledFilters.Discounted);
          }
      if (item.deliveryOptions.available > 0)
        if (!list.includes(ToggledFilters.InStore))
        {
          result.push({ value: ToggledFilters.InStore, label: 'В наличии', checked: false});
          list.push(ToggledFilters.InStore);
        }
    });
    return result;
  }

*/
}
