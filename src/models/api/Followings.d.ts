// https://api.gettr.com/u/user/jairbolsonaro/followings/?offset=0&max=1

import {APIBaseBody} from "./Base";

export type APIFollowingsBody = APIBaseBody<Data, Aux>

export interface Aux {
    uinf?:    Uinf;
    fws?:     any[];
    fwr?:     any[];
    removed?: number;
}

export interface Uinf {
    [follower: string]: Following;
}

export interface Following {
    udate?:     string;
    _t?:         string;
    _id?:        string;
    nickname?:  string;
    username?:  string;
    ousername?: string;
    dsc?:       string;
    status?:    string;
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

export interface Data {
    udate?: number;
    t?:     string;
    cdate?: number;
    list?:  string[];
    id?:    string;
}
