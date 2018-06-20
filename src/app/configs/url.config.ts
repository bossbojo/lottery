let production = true;
export const UrlConfig = {
    Home: '',
    Signin: 'signin',
    SigninPin: 'signin-pin',
    Book:'book',
    SummedUp:'summed-up',
    ListBuy:'list-buy',
    CheckLottery:'check-lottery',
    SendTo:'send-to',
    Setting:'setting',
    Profile:'profile',
    Notification:'notification',
    ProLong:'prolong',
};
export const baseUrl = production? 'http://lottery-api.paramat.work/api':'http://localhost:58752/api';
export const baseUrlsignalr = production? 'http://lottery-api.paramat.work/':'http://localhost:58752/';