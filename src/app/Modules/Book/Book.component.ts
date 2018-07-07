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
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.OnGetData();
  }
  OnGetData(){
    this.http.requestGet('get/all/member').subscribe((res:any)=>{
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
  OnPay() {
    var person = prompt("ใส่จำนวนเงินที่ต้องการจ่าย:", '500');
    if (person == null || person == "") {
      console.log(person);
    } else {
      console.log(person);
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
