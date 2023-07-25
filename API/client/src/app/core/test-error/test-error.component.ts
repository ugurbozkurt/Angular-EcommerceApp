import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {
  
  baseUrl = "https:localhost:7201/api/"
  validationError : any;
  constructor(private http:HttpClient,private activateRoute: ActivatedRoute) {
    
    
  }
  
  ngOnInit(): void {
    
  }
  
  get500Error(){
    this.http.get(this.baseUrl+'Buggy/servererror').subscribe(response=>{
      console.log(response);
  },error=>{
    console.log(error);  
  });
  }

  get404Error(){
    this.http.get(this.baseUrl+'Buggy/notfound').subscribe(response=>{
      console.log(response);
  },error=>{
    console.log(error);
  });
  }
  get400Error(){
    this.http.get(this.baseUrl+'Buggy/badrequest').subscribe(response=>{
      console.log(response);
  },error=>{
    console.log(error);
    if (error && error.errors) {
      this.validationError = error.errors;
    } else {
      // Başka bir hata durumuyla ilgilenmek için burayı güncelleyin.
    }
  });
  }
  get400ValidateError(){
    this.http.get(this.baseUrl+'products/fortytwo').subscribe(response=>{
      console.log(response);
  },error=>{
    console.log(error);
    if (error && error.errors) {
      this.validationError = error.errors;
    } else {
      // Başka bir hata durumuyla ilgilenmek için burayı güncelleyin.
    }
  });
  }


}
