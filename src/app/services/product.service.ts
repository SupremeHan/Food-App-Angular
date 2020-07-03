import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() { 
    this.products = [
      {id: "p01", name: "Pasta", price: 10, photo: "assets/img/food_img1.jpg"},
      {id: "p02", name: "Burger", price: 12, photo: "assets/img/food_img2.jpg"},
      {id: "p03", name: "Noodles", price: 6, photo: "assets/img/food_img3.jpg"},
      {id: "p04", name: "Pizza", price: 15, photo: "assets/img/food_img4.jpg"},
      {id: "p05", name: "Salad", price: 8, photo: "assets/img/food_img5.jpg"},
      {id: "p06", name: "Steak", price: 20, photo: "assets/img/food_img6.jpg"},
      {id: "p07", name: "Cake", price: 8, photo: "assets/img/food_img7.jpg"},
      {id: "p08", name: "Sushi", price: 12, photo: "assets/img/food_img8.jpg"},
      {id: "p09", name: "Pancakes", price: 6, photo: "assets/img/food_img9.jpg"},
      {id: "p10", name: "Burito", price: 14, photo: "assets/img/food_img10.jpg"},
    ];
  }


  findAll(): Product[] {
    return this.products;
}

find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            return i;
        }
    }
    return -1;
}

}
