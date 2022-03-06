import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor(public ht:HttpClientService) { }
  productsList: any;
  insertIntoProductsList(data: any) {
    this.productsList = data;
  }
  ngOnInit(): void {

    this.ht.getCartItems().subscribe((data) => this.insertIntoProductsList(data))
  }

}
