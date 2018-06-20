import { UrlConfig } from './../../configs/url.config';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  User:any;
  Url = UrlConfig;
  constructor( public authen: AuthenticationService) {
    this.User = authen.getUser();
   }

  ngOnInit() {
  }

}
