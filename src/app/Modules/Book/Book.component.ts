import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Book',
  templateUrl: './Book.component.html',
  styleUrls: ['./Book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSearch() {
    var person = prompt("ใส่ชื่อที่ต้องการค้นหา:", "Mark");
    if (person == null || person == "") {
      console.log(person);
    } else {
      console.log(person);
    }
  }
  OnAddName() {
    var person = prompt("ใส่ชื่อที่คุณต้องการเพิ่ม:", "Harry");
    if (person == null || person == "") {
      console.log(person);
    } else {
      console.log(person);
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
}
