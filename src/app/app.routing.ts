import { AuthenticationGuard } from './guards/authentication.guard';
import { AllowAnonymousGuard } from './guards/allowAnonymous.guard';
import { UrlConfig } from "./configs/url.config";
import { RouterModule, Routes, CanActivate } from '@angular/router';
//pages
const Url = UrlConfig;

export const RoutesList: Routes = [
    {
        path: Url.Signin,
        loadChildren: 'app/Modules/SignIn/SignIn.module#SignInModule',
        canActivate:[AllowAnonymousGuard]
    },
    {
        path: Url.SigninPin,
        loadChildren: 'app/Modules/SignInPIN/SignInPIN.module#SignInPINModule',
        canActivate:[AllowAnonymousGuard]
    },
    {
        path: Url.Home,
        loadChildren: 'app/Modules/Home/Home.module#HomeModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: Url.Book,
        loadChildren: 'app/Modules/Book/Book.module#BookModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: Url.SummedUp,
        loadChildren: 'app/Modules/SummedUp/SummedUp.module#SummedUpModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: Url.ListBuy,
        loadChildren: 'app/Modules/ListBuy/ListBuy.module#ListBuyModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: Url.CheckLottery,
        loadChildren: 'app/Modules/CheckLottery/CheckLottery.module#CheckLotteryModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: Url.SendTo,
        loadChildren: 'app/Modules/SendTo/SendTo.module#SendToModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: Url.Setting,
        loadChildren: 'app/Modules/Setting/Setting.module#SettingModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: Url.Profile,
        loadChildren: 'app/Modules/Profile/Profile.module#ProfileModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: Url.Notification,
        loadChildren: 'app/Modules/Notification/Notification.module#NotificationModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: Url.ProLong,
        loadChildren: 'app/Modules/ProLong/ProLong.module#ProLongModule',
        canActivate:[AuthenticationGuard]
    },
    {
        path: '**',
        redirectTo:Url.Home,
        pathMatch: 'full'
    }
];

export const RoutingModule = RouterModule.forRoot(RoutesList);