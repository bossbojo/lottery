import { UrlConfig } from './../../configs/url.config';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-CheckLottery',
  templateUrl: './CheckLottery.component.html',
  styleUrls: ['./CheckLottery.component.scss']
})
export class CheckLotteryComponent implements OnInit {
  Url = UrlConfig
  today = Date.now();
  LotteyCheck: any;
  CreateCheck: FormGroup;
  EditCheck: FormGroup;
  TabName = '1';
  LotteyChecksModel: any;
  ViewLotteryCorrect:any;
  constructor(private http: HttpService, private build: FormBuilder, private datep: DatePipe) {
    this.CreateCheck = this.build.group({
      "lot_dt": datep.transform(this.today, 'yyyy-MM-dd'),
      "number_upper": ["", [Validators.required, Validators.minLength(2)]],
      "number_lower": ["", [Validators.required, Validators.minLength(2)]],
      "number_three": ["", [Validators.required, Validators.minLength(3)]],
      "Country_id": '1'
    });

  }

  ngOnInit() {
    this.http.requestGet(`get/check`).subscribe((res: any) => {
      this.LotteyCheck = res.data;
    });
  }
  OnSubmitCreateLottery() {
    if (this.CreateCheck.valid) {
      this.http.requestPost(`create/check`, this.CreateCheck.value).subscribe((res: any) => {
        this.ngOnInit();
        this.TabName = '1';
      }, (err: any) => {
        alert(err.data.Message);
      });
    } else {
      alert('กรุณาใส่ข้อมูลให้ครบ');
    }
  }
  OnCresteCheckLottery(lot_dt, Country_id) {
    this.CreateCheck.controls['lot_dt'].setValue(this.datep.transform(lot_dt, 'yyyy-MM-dd'));
    this.CreateCheck.controls['Country_id'].setValue(Country_id + '');
    this.TabName = '2';
  }
  OnEditCheckLottery(LotteyChecks) {
    this.LotteyChecksModel = LotteyChecks;
    this.EditCheck = this.build.group({
      "number_upper": [LotteyChecks.number_upper, [Validators.required, Validators.minLength(2)]],
      "number_lower": [LotteyChecks.number_lower, [Validators.required, Validators.minLength(2)]],
      "number_three": [LotteyChecks.number_three, [Validators.required, Validators.minLength(3)]],
    });
  }
  OnSubmitEditCheckLottery(){
    if (this.EditCheck.valid) {
      this.http.requestPut(`update/check?Id=${this.LotteyChecksModel.Id}`, this.EditCheck.value).subscribe((res: any) => {
        this.ngOnInit();
        $('#EditCheckLotteryModal').modal('hide');
      }, (err: any) => {
        alert(err.data.Message);
      });
    } else {
      alert('กรุณาใส่ข้อมูลให้ครบ');
    }
  }
  OnViewCorrectCheckLottery(data){
    this.http.requestGet(`get/check_report_lottery_lot_dt/only_correct/${data.lot_dt.replace('T00:00:00','')}/${data.Country_id}`).subscribe((res:any)=>{
      this.ViewLotteryCorrect = res.data;
      console.log(res.data);
      
    });
  }
}

