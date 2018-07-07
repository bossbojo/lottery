import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
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
  constructor(private build: FormBuilder) {
  }

  ngOnInit() {
    // this.FromGroupCopyLottery = this.build.group({
    //   who: ['', [Validators.required]],
    //   country: ['', [Validators.required]],
    //   buying: this.build.array([this.CreateBuying()])
    // });
    // console.log(this.FromGroupCopyLottery);

  }
}