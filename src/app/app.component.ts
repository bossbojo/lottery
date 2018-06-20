import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  Authened;
  constructor(public authen: AuthenticationService){}
  onGetComponent(e){
    this.Authened = this.authen.getAuthenticated;
  }
}