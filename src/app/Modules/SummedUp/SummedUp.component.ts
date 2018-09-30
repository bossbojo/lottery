import { DatePipe } from '@angular/common';
import { HttpService } from './../../services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UrlConfig } from '../../configs/url.config';

@Component({
  selector: 'app-SummedUp',
  templateUrl: './SummedUp.component.html',
  styleUrls: ['./SummedUp.component.scss']
})
export class SummedUpComponent implements OnInit {
  Url = UrlConfig;
  today = Date.now();
  SumReport;
  SUMALL = 0;
  Persent = 100;
  FromGroupFilter: FormGroup;
  constructor(private build: FormBuilder, private http: HttpService, private datep: DatePipe) {
    this.FromGroupFilter = this.build.group({
      lottery_date: datep.transform(this.today, 'yyyy-MM-dd'),
    });
  }
  ngOnInit() {
    this.GetSumReport();
  }
  GetSumReport() {
    this.http.requestGet(`get/report_sum/${this.FromGroupFilter.value.lottery_date}`).subscribe((res: any) => {
      this.SumReport = res.data;
      this.SUMALL = 0;
      this.SumReport.forEach(element => {
            this.SUMALL += element.price1+element.price2;
      });
    });
  }
}
