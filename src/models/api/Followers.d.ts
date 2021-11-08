// https://api.gettr.com/u/user/jairbolsonaro/followers/?offset=0&max=1

import {APIBaseBody} from "./Base";

export type APIFollowersBody = APIBaseBody<Data, Aux>

export interface Aux {
    uinf?:    Uinf;
    fws?:     any[];
    fwr?:     any[];
    removed?: number;
}

export interface Uinf {
    [follower: string]: Follower;
}

export interface Follower {
    udate?:     string;
    _t?:         string;
    _id?:        string;
    username?:  string;
    ousername?: string;
    status?:    string;
    cdate?:     string;
    lang?:      string;
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
