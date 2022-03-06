import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ht: HttpClientService) { }

  productsList: any;
  insertIntoProductsList(data: any) {
    this.productsList = data;
  }
  ngOnInit(): void {

    this.ht.getProducts().subscribe((data) => this.insertIntoProductsList(data))
  }
 
  addItemToCart(item: any) {
    item.id = Math.floor(Math.random() * 100)
    this.ht.addToCart(item).subscribe((data) => console.log(data))
  }


}


