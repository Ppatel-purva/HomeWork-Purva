import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {
      "id":"1",
      "name":"Moca",
      "quentity":"50gm",
      "price":"250",
      "url":".././assets/imgs/latte-image.png"
    },
    {
      "id":"2",
      "name":"Americano",
      "quentity":"50gm",
      "price":"150",
      "url":".././assets/imgs/americano-image.png"
    },
    {
      "id":"3",
      "name":"Cappuccino",
      "quentity":"30gm",
      "price":"300",
      "url":".././assets/imgs/mocha-image.png"
    },
    {
      "id":"4",
      "name":"Fillter-Coffee",
      "quentity":"30gm",
      "price":"100",
      "url":".././assets/imgs/coffee.jpg"
    },
    {
      "id":"5",
      "name":"Black-Coffee",
      "quentity":"30gm",
      "price":"200",
      "url":".././assets/imgs/black.jpg"
    },
    {
      "id":"6",
      "name":"Puff-Coffee",
      "quentity":"30gm",
      "price":"300",
      "url":".././assets/imgs/puff.jpg"
    }
  ]
  @Output() discriptionItemEvent = new EventEmitter<any>();

  addToCart(productData:any){
    this.discriptionItemEvent.emit(productData);

  }
}

