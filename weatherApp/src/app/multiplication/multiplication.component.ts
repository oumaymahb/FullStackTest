import { Component, OnInit } from '@angular/core';
import { MultiplicationService } from '../services/multiplication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent implements OnInit {
  firstNumber:number;
  secondNumber:number;
  result:number;
  showResult:boolean=false;
  constructor(private multService:MultiplicationService) { }

  ngOnInit() {
  }
  calculate(firstNumber:number,secondNumber:number){
    this.multService.multiplate(firstNumber,secondNumber).subscribe(
      (data:any) => {
        this.result=data.result;
        this.showResult=true;
  })
}
}
