import { Component, OnInit } from '@angular/core';
import { UrlConfig } from '../../configs/url.config';

@Component({
  selector: 'app-SummedUp',
  templateUrl: './SummedUp.component.html',
  styleUrls: ['./SummedUp.component.scss']
})
export class SummedUpComponent implements OnInit {
  Url = UrlConfig;
  constructor() { }

  ngOnInit() {
  }

}
