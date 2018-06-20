import { Component, OnInit } from '@angular/core';
import { UrlConfig } from '../../configs/url.config';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-ListBuy',
  templateUrl: './ListBuy.component.html',
  styleUrls: ['./ListBuy.component.scss']
})
export class ListBuyComponent implements OnInit {
  Url = UrlConfig
  FormBuying:FormGroup;
  today = Date.now();
  constructor(private build:FormBuilder) {
    this.FormBuying = this.build.group({
      type:['two',[Validators.required]],
      up:[true,[Validators.required]],
      down:[true,[Validators.required]],
      straight:[true,[Validators.required]],
      unstraight:[true,[Validators.required]]
    });
   }

  ngOnInit() {
  }

}
