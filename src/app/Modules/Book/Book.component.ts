import { GlobalValueService } from './../../services/global-value.service';
import { HttpService } from './../../services/http.service';
import { UrlConfig } from './../../configs/url.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Book',
  templateUrl: './Book.component.html',
  styleUrls: ['./Book.component.scss']
})
export class BookComponent implements OnInit {
  Url = UrlConfig
  Member:any;
  constructor(private http:HttpService,private Global:GlobalValueService) { }

  ngOnInit() {
    this.OnGetData();
  }
  OnGetData(){
    this.http.requestGet('get/report_member').subscribe((res:any)=>{
      this.Member = res.data;
      console.log(this.Member);
       
    });
  }
  OnSearch() {
    var person = prompt("ใส่ชื่อที่ต้องการค้นหา:", "");
    if (person == null || person == "") {
      console.log(person);
    } else {
      console.log(person);
    }
  }
  OnAddName() {
    var person = prompt("ใส่ชื่อที่คุณต้องการเพิ่ม:", "");
    if (person != null || person.trim() != "") {
      this.http.requestPost('create/member',person).subscribe((res:any)=>{
        this.OnGetData();
      });
    } else {
      alert("ชื่อว่างเปล่า");
    }
  }
  OnPay(Id,price_in) {
    var price = prompt("ใส่จำนวนเงินที่ต้องการจ่าย:", price_in);
    if (price == null || price == "") {
      console.log(price);
    } else {
      let obj = {
        "user_id": this.Global.User.Id,
        "member_id": Id,
        "paid": price
      }
      this.http.requestPost('create/money_income',obj).subscribe((res:any)=>{
        this.OnGetData();
      });
    }
  }
  OnDelete() {
    var r = confirm("คุณต้องการลบชื่อนี้ใช่ไหม!");
    if (r == true) {
      console.log(r);
    } else {
      console.log(r);
    }
  }
}
