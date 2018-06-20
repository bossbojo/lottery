import { UrlConfig } from './../../configs/url.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Setting',
  templateUrl: './Setting.component.html',
  styleUrls: ['./Setting.component.scss']
})
export class SettingComponent implements OnInit {
  Url = UrlConfig
  constructor() { }

  ngOnInit() {
  }

}
