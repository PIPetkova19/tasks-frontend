import { Component, input, output } from '@angular/core';
import { Product } from '../common/product';
import { CurrencyPipe } from '../common/currencyPipe';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  templateUrl: './app-product-card.html',
  styleUrl: './app-product-card.css',
  imports: [CurrencyPipe, MatListModule,MatButtonModule],
})

export class AppProductCard {
  product = input.required<Product>()
  addToCart = output<Product>();
}
 