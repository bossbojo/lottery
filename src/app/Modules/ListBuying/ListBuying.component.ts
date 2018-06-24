import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UrlConfig } from '../../configs/url.config';

@Component({
  selector: 'app-ListBuying',
  templateUrl: './ListBuying.component.html',
  styleUrls: ['./ListBuying.component.scss']
})
export class ListBuyingComponent implements OnInit {
  Url = UrlConfig
  FromGroupCopyLottery: FormGroup;
  FromCopyLottery: FormArray;
  today = Date.now();
  copy: string = '';
  conutry: string = 'thailand';
  DataFrom: m_Copy[] = [];
  constructor(private build: FormBuilder) {
  }

  ngOnInit() {
    // this.FromGroupCopyLottery = this.build.group({
    //   who: ['', [Validators.required]],
    //   country: ['', [Validators.required]],
    //   buying: this.build.array([this.CreateBuying()])
    // });
    // console.log(this.FromGroupCopyLottery);

  }
  OnCopy() {
    this.DataFrom = [];
    const reso1 = this.copy.split('\n');
    reso1.forEach(e => {
      const number = e.split('=');
      if (number[1].includes('x')) {
        const price1 = number[1].split('x')[0];
        const price2 = number[1].split('x')[1];
        this.ConvertData(number[0], price1, price2);
      } else {
        const price1 = number[1].split('X')[0];
        const price2 = number[1].split('X')[1];
        this.ConvertData(number[0], price1, price2);
      }
    });
    console.log(this.DataFrom);
    this.SetFromGroup();
    console.log(this.FromGroupCopyLottery);

  }
  ConvertData(number, price1, price2) {
    let check = number.split(',');
    check.forEach(element => {   
      let country = this.conutry;
      let type = '';
      let play = '';
      if (element.length == 2) {
        type = 'two';
        play = 'both';
      } else {
        type = 'three';
        play = 'both';
      }
      this.DataFrom.push(new m_Copy(element, price1, price2, type, play));
    });

  }
  CreateBuying(): FormGroup {
    return this.build.group({
      number: ['', [Validators.required]],
      price1: ['', [Validators.required]],
      price2: ['', [Validators.required]],
      type: ['', [Validators.required]],
      play: ['', [Validators.required]],
    });
  }
  SetFromGroup() {
    let FormGroup: FormGroup[] = [];
    this.DataFrom.forEach(element => {
      FormGroup.push(
        this.build.group({
          number: [element.number, [Validators.required]],
          price1: [element.price1, [Validators.required]],
          price2: [element.price2, [Validators.required]],
          type: [element.type, [Validators.required]],
          play: [element.play, [Validators.required]],
        })
      );
    });
    this.FromGroupCopyLottery = this.build.group({
      who: ['', [Validators.required]],
      country: ['', [Validators.required]],
      buying: this.build.array(FormGroup)
    });
  }
}
class m_Copy {
  constructor(number, price1, price2, type, play) {
    this.number = number;
    this.price1 = price1;
    this.price2 = price2;
    this.type = type;
    this.play = play;
  }
  number: any;
  price1: any;
  price2: any;
  type: any;
  play: any;
}
