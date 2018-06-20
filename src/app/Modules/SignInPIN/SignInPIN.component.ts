import { HttpService } from './../../services/http.service';
import { GlobalValueService } from './../../services/global-value.service';
import { UrlConfig } from './../../configs/url.config';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-SignInPIN',
  templateUrl: './SignInPIN.component.html',
  styleUrls: ['./SignInPIN.component.scss']
})
export class SignInPINComponent implements OnInit {
  FormSignInPIN: FormGroup;
  i: number = 0;
  constructor(private build: FormBuilder, private http: HttpService, private authen: AuthenticationService, private route: Router, private global: GlobalValueService) {
    if (!authen.TempData) {
      this.global.OnShowLoading();
      this.route.navigate(['/', UrlConfig.Signin]).then(() => {
        this.global.OnHiddenLoading();
      });
    }
    this.FormSignInPIN = this.build.group({
      PIN1: ['', [Validators.required]],
      PIN2: ['', [Validators.required]],
      PIN3: ['', [Validators.required]],
      PIN4: ['', [Validators.required]],
      PIN5: ['', [Validators.required]],
      PIN6: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }
  OnKeyPress(num) {
    this.i++;
    if (this.i >= 6) {
      this.i = 6;
      this.FormSignInPIN.controls['PIN' + this.i].setValue(num);
      this.OnSubmit();
    }
    else {
      this.FormSignInPIN.controls['PIN' + this.i].setValue(num);
    }
  }
  OnBackSpace() {
    if (this.i <= 1) {
      this.i = 1;
      this.FormSignInPIN.controls['PIN' + this.i].setValue('');
    } else {
      this.FormSignInPIN.controls['PIN' + this.i].setValue('');
    }
    this.i--;
  }
  OnClear(){
    this.FormSignInPIN.controls['PIN1'].setValue('');
    this.FormSignInPIN.controls['PIN2'].setValue('');
    this.FormSignInPIN.controls['PIN3'].setValue('');
    this.FormSignInPIN.controls['PIN4'].setValue('');
    this.FormSignInPIN.controls['PIN5'].setValue('');
    this.FormSignInPIN.controls['PIN6'].setValue('');
    this.i = 0;
  }
  OnSubmit() {
    if (this.FormSignInPIN.valid) {
      this.global.OnShowLoading();
      let obj = {
        "TempData" : this.authen.TempData, 
        "PIN": this.FormSignInPIN.controls['PIN1'].value +''+ this.FormSignInPIN.controls['PIN2'].value +''+ this.FormSignInPIN.controls['PIN3'].value +''+
               this.FormSignInPIN.controls['PIN4'].value +''+ this.FormSignInPIN.controls['PIN5'].value +''+ this.FormSignInPIN.controls['PIN6'].value
      };
      this.http.requestPost(`signin/pin`, obj).subscribe((res: any) => {
        if (res.data) {
          this.route.navigate(['/', UrlConfig.Home]).then(() => {
            this.global.OnHiddenLoading();
          });
        }else{
          this.OnClear();
        }
      },(err:any) => {
        this.OnClear();
        alert(err.data.Message);
        this.global.OnHiddenLoading();
      });
    }
  }
  GoBack(){
    this.global.OnShowLoading();
    this.route.navigate(['/', UrlConfig.Signin]).then(() => {
      this.global.OnHiddenLoading();
    });
  }
}
