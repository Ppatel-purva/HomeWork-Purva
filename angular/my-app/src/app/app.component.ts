import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  counter = 0;
  totalQuntity = 0;
  billAmount = 0;
  Data = [
    {
      "id":"",
      "name":"",
      "quentity":"",
      "price":"",
      "url":""
    },
  ];

  addItemToCart(product:any){
  this.Data.push(product);
  this.counter++;
  this.totalQuntity += Number(product.quentity);
  this.billAmount += Number(product.price);
}
}


