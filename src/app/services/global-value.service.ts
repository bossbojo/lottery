import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageConfog } from '../configs/storage.config';
@Injectable()
export class GlobalValueService {

  //#region  sidebar
  public RouterNow:any;
  public User = StorageConfog.getItem('user');
  public Active: string;
  public OpenSideBar: boolean = false;
  //#endregion

  //#region  loading
  OnShowLoading() {
    $('.loading').show();
  }
  OnHiddenLoading() {
    $('.loading').fadeOut();
  }
  //#endregion 
}