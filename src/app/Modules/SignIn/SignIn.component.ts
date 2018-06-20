import { UrlConfig } from './../../configs/url.config';
import { GlobalValueService } from './../../services/global-value.service';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-SignIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.scss']
})
export class SignInComponent implements OnInit {
  FormSignIn: FormGroup;
  constructor(private build: FormBuilder, private http: HttpService, private global: GlobalValueService, private route: Router) {
    this.FormSignIn = this.build.group({
      username: ['', [Validators.required]]
    });
  }
  ngOnInit() {
  }
  OnSubmit() {
    if (this.FormSignIn.valid) {
      this.global.OnShowLoading();
      let obj = {
        "username": this.FormSignIn.controls['username'].value
      };
      this.http.requestPost(`signin`, obj).subscribe((res: any) => {
        if (res.data) {
          this.route.navigate(['/', UrlConfig.SigninPin]).then(() => {
            this.global.OnHiddenLoading();
          });
        }
      },(err:any) => {
        alert(err.data.Message);
        this.global.OnHiddenLoading();
      });
    }else{
      alert('รหัสผู้ใช้งานว่างเปล่า');
    }
  }
}
