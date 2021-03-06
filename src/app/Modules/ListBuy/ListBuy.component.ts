import { GlobalValueService } from './../../services/global-value.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { UrlConfig } from '../../configs/url.config';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ListBuy',
  templateUrl: './ListBuy.component.html',
  styleUrls: ['./ListBuy.component.scss']
})
export class ListBuyComponent implements OnInit {
  Url = UrlConfig
  FormBuying: FormGroup;
  today = Date.now();
  FromGroupCopyLottery: FormGroup;
  FromCopyLottery: FormArray;
  copy = '';
  country = '';
  member = '';
  conutry: string = '';
  DataFrom: m_Copy[] = [];
  reword = false;
  rewordonly = false;
  DataCountry: any;
  DataMember: any;
  DataPlay: any;
  lot_dt: any;
  TabName = '2'
  constructor(private build: FormBuilder, private http: HttpService, private route: Router, private datep: DatePipe, private GlobalValue: GlobalValueService) {
    this.FormBuying = this.build.group({
      lot_dt: [datep.transform(this.today, 'yyyy-MM-dd'), [Validators.required]],
      who: ['', [Validators.required]],
      country: ['', [Validators.required]],
      type: [''],
      number: ['', [Validators.required]],
      price1: ['', [Validators.required]],
      price2: ['', [Validators.required]],
    });
    this.lot_dt = this.datep.transform(this.today, 'yyyy-MM-dd');
  }
  ngOnInit() {
    this.http.requestGet('get/all/country').subscribe((res: any) => {
      this.DataCountry = res.data;
    });
    this.http.requestGet('get/all/type').subscribe((res: any) => {
      this.DataPlay = res.data;
    });
    this.http.requestGet('get/all/member').subscribe((res: any) => {
      this.DataMember = res.data;
    });
  }
  OnBuyingSubmit() {
    if (this.FormBuying.valid) {
      this.GlobalValue.OnShowLoading()
      this.FormBuying.controls['type'].setValue(this.FormBuying.controls['number'].value.length == 2 ? 'two' : 'three');
      this.http.requestPost('create/buy/lottery/one', this.FormBuying.value).subscribe((res: any) => {
        alert("เพิ่มการซื้อเเล้ว");
        this.FormBuying.reset();
        this.GlobalValue.OnHiddenLoading()
        this.route.navigate(['/', UrlConfig.ListBuying]);
      });
    } else {
      alert("กรุณากรอบข้อมูลให้ครบ");
    }
  }
  OnRefreshFormat() {
    console.log('s');
    
    this.copy = this.copy.replace(/[^a-zA-Z0-9-=,\n ]/g, ' ');
    this.copy = this.copy.replace('\n', '');
    for (let i = 0; i < this.copy.length; i++) {
      this.copy = this.copy.replace('  ', ',');
      this.copy = this.copy.replace(',,', '');
      this.copy = this.copy.replace(' ', ',');
    }
    this.OnCopy();
  }
  OnRewordonly() {
    this.reword = false;
    this.OnCopy();
  }
  OnReword() {
    this.rewordonly = false;
    this.OnCopy();
  }
  OnChangeDate(){
    this.ngOnInit();
  }
  OnCopy() {
    this.DataFrom = [];
    const reso1 = this.copy.split('\n');
    reso1.forEach(e => {
      const number = e.split('=');
      if (number[1]) {
        if (number[1].toLowerCase().includes('x')) {
          const price1 = number[1].split('x')[0];
          const price2 = number[1].split('x')[1];
          if (price1 || price2)
            this.ConvertData(number[0], price1, price2);
        } else {
          this.ConvertData(number[0], number[1], 0);
        }
      }
    });
    this.SetFromGroup();
  }
  ConvertData(number, price1, price2) {
    let check = number.split(',');
    check.forEach(element => {
      let country = this.conutry;
      let type = '';
      let play = '';
      if (element.length == 2) {
        type = 'two';
      } else {
        type = 'three';
      }
      if (this.rewordonly == false) {
        this.DataFrom.push(new m_Copy(element, parseInt(price1), parseInt(price2), type));
        if (this.reword && element.length == 2) {
          this.DataFrom.push(new m_Copy(element.split('')[1] + "" + element.split('')[0], parseInt(price1), parseInt(price2), type));
        }
      } else {
        this.DataFrom.push(new m_Copy(element.split('')[1] + "" + element.split('')[0], parseInt(price1), parseInt(price2), type));
      }
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
          type: [element.type, [Validators.required]]
        })
      );
    });
    this.FromGroupCopyLottery = this.build.group({
      lot_dt: [this.lot_dt, [Validators.required]],
      who: [this.member, [Validators.required]],
      country: [this.conutry, [Validators.required]],
      buying: this.build.array(FormGroup)
    });
  }
  OnSubmit() {
    if (this.FromGroupCopyLottery) {
      if (this.FromGroupCopyLottery.valid) {
        this.GlobalValue.OnShowLoading()
        this.http.requestPost('create/buy/lottery/many', this.FromGroupCopyLottery.value).subscribe((res: any) => {
          //$('#AddCopyLotteryModal').modal('hide');
          this.GlobalValue.OnHiddenLoading()
          this.route.navigate(['/', UrlConfig.ListBuying]);
        });
      } else {
        alert("กรุณา เลือกผู้ซื้อ เลือกหวยของ เเละใส่การซื้อ ให้ครบก่อนบันทึก");
      }
    }
  }
}
class m_Copy {
  constructor(number, price1, price2, type) {
    this.number = number;
    this.price1 = price1;
    this.price2 = price2;
    this.type = type;
  }
  number: any;
  price1: any;
  price2: any;
  type: any;
}