import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';

  // urlproducts = 'https://localhost:7201/api/Products';
  // products :IProduct[] = [];

  constructor(){}

  ngOnInit(): void 
  {
  //   this.http.get(this.urlproducts).subscribe((response:any)=>{
  //     this.products = response.data;
  //   },error=>{
  //     console.log(error);
  // });
  } 

}