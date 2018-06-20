import { UrlConfig } from './../../configs/url.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-SendTo',
  templateUrl: './SendTo.component.html',
  styleUrls: ['./SendTo.component.scss']
})
export class SendToComponent implements OnInit {
  Url = UrlConfig;
  constructor() { }

  ngOnInit() {
  }

}
