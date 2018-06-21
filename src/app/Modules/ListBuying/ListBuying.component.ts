import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UrlConfig } from '../../configs/url.config';

@Component({
  selector: 'app-ListBuying',
  templateUrl: './ListBuying.component.html',
  styleUrls: ['./ListBuying.component.scss']
})
export class ListBuyingComponent implements OnInit {
  Url = UrlConfig
  FromCopyLottery:FormGroup;
  today = Date.now();
  copy: string = '';
  conutry: string = 'thailand';
  DataFrom:m_Copy[] = [];
  constructor(private build:FormBuilder) { }

  ngOnInit() {
  }
  OnCopy(){
    this.DataFrom = [];
    const reso1 = this.copy.split('\n');
    reso1.forEach(e =>{
      const number = e.split('=');
      if(number[1].includes('x')){
        const price1 = number[1].split('x')[0];
        const price2 = number[1].split('x')[1];
        this.ConvertData(number[0],price1,price2);
      }else{
        const price1 = number[1].split('X')[0];
        const price2 = number[1].split('X')[1];
        this.ConvertData(number[0],price1,price2);
      }
    });
   console.log(this.DataFrom);
  }
  ConvertData(number,price1,price2){
    let country = this.conutry;
    let type = '';
    let play = '';
    if(number.length == 2){
      type = 'two';
      play = 'both';
    }else{
      type = 'three';
      play = 'both';
    }
    this.DataFrom.push(new m_Copy(number,price1,price2,country,type,play));
  }
  SetFromGroup(){
   this.FromCopyLottery = this.build.group(e => {
    
   }); 
  }
}
class m_Copy{
  constructor(number,price1,price2,country,type,play){
    this.number = number;
    this.price1 = price1;
    this.price2 = price2;
    this.country = country;
    this.type = type;
    this.play = play;
  }
  number:any;
  price1:any;
  price2:any;
  country:any;
  type:any;
  play:any;
}
