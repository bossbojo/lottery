import { Component, OnInit } from '@angular/core';
import { UrlConfig } from '../../configs/url.config';

@Component({
  selector: 'app-ListBuying',
  templateUrl: './ListBuying.component.html',
  styleUrls: ['./ListBuying.component.scss']
})
export class ListBuyingComponent implements OnInit {
  Url = UrlConfig
  today = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
