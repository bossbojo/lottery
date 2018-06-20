import { UrlConfig } from './../../configs/url.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-CheckLottery',
  templateUrl: './CheckLottery.component.html',
  styleUrls: ['./CheckLottery.component.scss']
})
export class CheckLotteryComponent implements OnInit {
  Url =UrlConfig
  today = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
