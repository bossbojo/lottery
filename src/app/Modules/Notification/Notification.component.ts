import { UrlConfig } from './../../configs/url.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Notification',
  templateUrl: './Notification.component.html',
  styleUrls: ['./Notification.component.scss']
})
export class NotificationComponent implements OnInit {
  Url =UrlConfig
  TabName = '1';
  constructor() { }

  ngOnInit() {
  }

}
