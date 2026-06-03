import { Component, input, output } from '@angular/core';
import { Product } from '../common/product';
import { CurrencyPipe } from '../common/currencyPipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './app-product-card.html',
  styleUrl: './app-product-card.css',
  imports: [CurrencyPipe],
})

export class AppProductCard {
  product = input.required<Product>()
  addToCart = output<Product>();
}
 