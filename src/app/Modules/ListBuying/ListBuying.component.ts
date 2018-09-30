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
  SumReport:any;
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
    this.GetSumReport();
  }
  GetSumReport(){
    if(this.FromGroupFilter.value.member_id == 0){
      this.http.requestGet(`get/report_sum/${this.FromGroupFilter.value.lottery_date}`).subscribe((res:any)=>{
        this.SumReport = res.data;      
      });
    }else{
      this.http.requestGet(`get/report_sum_member/${this.FromGroupFilter.value.lottery_date}/${this.FromGroupFilter.value.member_id}`).subscribe((res:any)=>{
        this.SumReport = res.data;      
      });
    }
  }
  GetAllReportLottery(){
    this.http.requestGet(`/get/check_report_lottery/${this.FromGroupFilter.value.lottery_date}/${this.FromGroupFilter.value.country_id}/${this.FromGroupFilter.value.member_id}`).subscribe((res:any)=>{
      this.HistoryLottery = res.data;
    });
  }
  GetListHistoryLottery(){
    // this.http.requestGet(`get/history/lottery/${this.FromGroupFilter.value.member_id}/${this.FromGroupFilter.value.country_id}/${this.FromGroupFilter.value.lottery_date}`).subscribe((res:any)=>{
    //   this.HistoryLottery = res.data;
    // });
    this.GetAllReportLottery();
    this.GetSumReport();
  }
  OnDeleteHistoryLottery(HistoryLotterys){
    var r = confirm(`คุณต้องการที่ลบการซื้อนี้ ${HistoryLotterys.number} = (${HistoryLotterys.price_1}x${HistoryLotterys.price_2})`);
    if (r == true) {
      this.http.requestDelete(`delete/historylottery?Id=${HistoryLotterys.Id}`).subscribe((res:any)=>{
        if(res.data){
          this.ngOnInit();
        }
      });
    } 
  }
}