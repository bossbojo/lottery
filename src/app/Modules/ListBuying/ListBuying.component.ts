import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UrlConfig } from '../../configs/url.config';
import { HttpService } from '../../services/http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ListBuying',
  templateUrl: './ListBuying.component.html',
  styleUrls: ['./ListBuying.component.scss']
})
export class ListBuyingComponent implements OnInit {
  Url = UrlConfig
  today = Date.now();
  HistoryLottery:any = [];
  DataCountry:any = [];
  DataCountry2:any;
  DataPlay:any = [];
  DataMember:any;
  FromGroupFilter:FormGroup;
  constructor(private build: FormBuilder,private http:HttpService,private datep:DatePipe) {
    this.FromGroupFilter = this.build.group({
      lottery_date:datep.transform(this.today,'yyyy-MM-dd'),
      member_id:0,
      country_id:0
    });
  }

  ngOnInit() {
    this.GetListHistoryLottery();
    this.http.requestGet('get/all/country').subscribe((res: any) => {
      this.DataCountry2 = res.data; 
      res.data.forEach(element => {
        this.DataCountry[element.Id] = element.country_name; 
      });
    });
    this.http.requestGet('get/all/type').subscribe((res: any) => {
      res.data.forEach(element => {
       this.DataPlay[element.Id] = element.type_name;
      });
    });
    this.http.requestGet('get/all/member').subscribe((res: any) => {
      this.DataMember = res.data;
    });
  }
  GetListHistoryLottery(){
    console.log(this.FromGroupFilter.value);
    
    this.http.requestGet(`get/history/lottery/${this.FromGroupFilter.value.member_id}/${this.FromGroupFilter.value.country_id}/${this.FromGroupFilter.value.lottery_date}`).subscribe((res:any)=>{
      console.log(res.data);
      this.HistoryLottery = res.data;
    });
  }
}