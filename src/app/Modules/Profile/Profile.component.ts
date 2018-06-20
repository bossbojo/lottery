import { UrlConfig } from './../../configs/url.config';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {
  User: any;
  FormProfile:FormGroup;
  Url = UrlConfig
  constructor(private Authen: AuthenticationService,private build: FormBuilder) {
    this.User = Authen.User;
    this.FormProfile = this.build.group({
      Name:[this.User.Name,[Validators.required]]
    });
  }

  ngOnInit() {
  }

}
