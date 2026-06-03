import { Component,signal } from '@angular/core';
import { Product } from '../common/product';
import { AppProductCard } from '../app-product-card/app-product-card';

@Component({
  selector: 'app-product-page',
  templateUrl: './app-product-page.html',
  styleUrl: './app-product-page.css',
  imports: [AppProductCard],
})
export class AppProductPage {
  products: Product[] = [
    { id: 1, name: 'TV', price: 1000, inStock: true },
    { id: 2, name: 'Iphone 16', price: 2000, inStock: false },
    { id: 3, name: 'Samsung A52', price: 700, inStock: true }
  ];

  cart = signal<typeof this.products>([]);
  onAdd(p: (typeof this.products)[0]) { this.cart.update(c => [...c, p]); }

}
