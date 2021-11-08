// https://api.gettr.com/u/user/username/posts?offset=0&max=1&incl=posts&fp=f_uo

import {APIBaseBody} from "./Base";

export type APIUserPostsBody = APIBaseBody<Data, Aux>

export interface Aux {
    removed?: number;
    pinf?:    null;
    post?:    UserPosts;
    sPst?:    null;
    uinf?:    null;
    lks?:     null;
    shrs?:    null;
}

export interface UserPosts {
    [postId: string]: UserPost;
}

export interface UserPost {
    udate?:      number;
    acl?:        ACL;
    _t?:          string;
    cdate?:      number;
    _id?:         string;
    txt?:        string;
    main?:       string;
    vidDur?:     string;
    vidWid?:     string;
    vidHgt?:     string;
    vid?:        string;
    ovid?:       string;
    vis?:        string;
    uid?:        string;
    txtLang?:    string;
    translates?: Translates;
    lkbpst?:     number;
    cm?:         number;
    shbpst?:     number;
}

export interface ACL {
    pub?: number;
}

export interface Translates {
    [lang: string]: Translate
}

export interface Translate {
    pstid?:          string;
    uid?:            string;
    translatedDate?: number;
    sourceLang?:     string;
    targetLang?:     string;
    translatedPath?: string;
}

export interface Data {
    udate?: number;
    t?:     string;
    cdate?: number;
    list?:  List[];
    id?:    string;
}

export interface List {
    udate?:      number;
    t?:          string;
    cdate?:      number;
    receiverID?: string;
    activity?:   Activity;
    id?:         string;
    action?:     string;
}

export interface Activity {
    cdate?:   number;
    initID?:  string;
    initLvl?: number;
    srcType?: string;
    srcID?:   string;
    action?:  string;
    tgtType?: string;
    tgtID?:   string;
    tgtOID?:  string;
    pstid?:   string;
    uid?:     string;
    media?:   boolean;
    id?:      string;
}
