import { UrlConfig } from './../../configs/url.config';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Setting',
  templateUrl: './Setting.component.html',
  styleUrls: ['./Setting.component.scss']
})
export class SettingComponent implements OnInit {
  Url = UrlConfig
  TabName = 'price';
  FromPrice:FormGroup;
  constructor(private Authen: AuthenticationService,private build:FormBuilder) { 
    this.FromPrice = this.build.group({
      straight:[Authen.User.straight,[Validators.required]],
      unstraight:[Authen.User.unstraight,[Validators.required]],
      two_number:[Authen.User.two_number,[Validators.required]],
    });
  }

  ngOnInit() {
  }

}
