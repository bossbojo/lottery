import { UrlConfig } from './../../configs/url.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ProLong',
  templateUrl: './ProLong.component.html',
  styleUrls: ['./ProLong.component.scss']
})
export class ProLongComponent implements OnInit {
  Url = UrlConfig
  constructor() { }

  ngOnInit() {
  }

}
