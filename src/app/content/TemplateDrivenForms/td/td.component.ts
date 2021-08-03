import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TDComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  formSubmit(formVariable: NgForm){
    console.log("hi",formVariable);
  }
  
  @ViewChild('f2') formLocalReference !: NgForm ;
  formSubmit2(){
console.log(this.formLocalReference);
  }
}
