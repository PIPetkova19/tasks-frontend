import { Component, signal } from '@angular/core';
import { Product } from '../common/product';
import { AppProductCard } from '../app-product-card/app-product-card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-product-page',
  templateUrl: './app-product-page.html',
  styleUrl: './app-product-page.css',
  imports: [AppProductCard, MatDividerModule],
})

export class AppProductPage {
  
  products: Product[] = [
    { id: 1, name: 'TV', price: 1000, inStock: true },
    { id: 2, name: 'Iphone 16', price: 2000, inStock: false },
    { id: 3, name: 'Samsung A52', price: 700, inStock: true }
  ];

  cart = signal<Product[]>([]);

  onAdd(p: Product) {
    this.cart.update(c => [...c, p]);
  }
}
