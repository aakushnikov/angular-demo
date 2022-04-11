import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct, Products } from 'src/types/product.types';
import { ApiService } from 'src/types/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardComponent implements OnInit {
  @Input() product: IProduct;
  isFavorite: boolean;

  constructor(public service: ApiService) {
    this.isFavorite = false;
    this.product =  Products.getEmptyProduct();
   }

  ngOnInit(): void {
  }
  
  switchImage(): void {
    if (this.product == null) return;
    if (this.product.image == null) return;
    switch(this.product.image)
    {
      case this.product.colors.one.image:
        this.product.image = this.product.colors.two.image; break;
      default:
        this.product.image = this.product.colors.one.image; break;
    }
  }

  switchFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
/*
  addInCart(): void {
    if (this.product.deliveryOptions.available < 1) return;
    this.product.deliveryOptions.available--;
    this.onInCart.emit(this.product);
  }
  */

  getDiscount(): number {
    if (this.product.price.discount == null) return 0;
    return this.product.price.value * this.product.price.discount / 100;
  }
/*
  isVisible(): boolean {
    // TODO It's unbelievable hard readed logic
    // Should find simple way 
    if (this.lastToggle == null) return true;
    if (this.lastToggle.value != ToggledFilters.All)
    {
      if (this.filters.includes(this.lastToggle.value))
      {
        if (!this.lastToggle.checked)
          this.filters = this.filters.filter(i => {
            return i != this.lastToggle?.value;
          });
      }
      else
        if (this.lastToggle.checked)
          this.filters.push(this.lastToggle.value);
    }
    else
    {
      this.filters = new Array();
      this.filters.push(ToggledFilters.All);
      return true;
    }

    if (this.filters.length == 1 && this.filters.includes(ToggledFilters.All))
      return true;

    if (this.filters.includes(ToggledFilters.Discounted))
    {
      if (this.product.price.discount == null) return false;
      if (this.product.price.discount == 0) return false;
    }
    if (this.filters.includes(ToggledFilters.InStore))
    {
      console.log(this.startedCount);
      if (this.startedCount == 0) return false;
    }
    return true;
  }
  */
}
