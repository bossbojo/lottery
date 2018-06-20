import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UrlConfig } from '../../configs/url.config';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  User: any;
  Url = UrlConfig;
  constructor(private Authen: AuthenticationService) {
    this.User = Authen.User;
  }

  ngOnInit() {
  }

}
