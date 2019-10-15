import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Multiplication } from '../models/multiplication';

@Injectable({
  providedIn: 'root'
})
export class MultiplicationService {


  constructor(private http: HttpClient) { }
 
     multiplate(nb1:number,nb2:number): Observable<any> {
       let obj=new Multiplication(nb1,nb2);
      return this.http.post("/spring",obj);
      
  }

}
