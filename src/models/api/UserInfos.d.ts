// https://api.gettr.com/s/uinf/username

import {APIBaseBody} from "./Base";

export type APIUserInfosBody = APIBaseBody<Data, undefined>

export interface Data {
    udate?:     string;
    _t?:         string;
    _id?:        string;
    nickname?:  string;
    username?:  string;
    ousername?: string;
    dsc?:       string;
    status?:    string;
    pinpsts?:   string;
    cdate?:     string;
    lang?:      string;
    infl?:      number;
    ico?:       string;
    bgimg?:     string;
    location?:  string;
    website?:   string;
    flw?:       string;
    flg?:       string;
}
