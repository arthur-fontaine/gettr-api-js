import {APIBaseBody} from "./Base";

export type APIPostBody = APIBaseBody<Data, Aux>

export interface Aux {
    shrdpst?: null;
    sPst?:    SPst;
    uinf?:    null;
    lks?:     any[];
    shrs?:    any[];
}

export interface SPst {
    lkbpst?: number;
    cm?:     number;
    shbpst?: number;
}

export interface Data {
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
    imgs?:       string[];
    htgs?:       string[];
    utgs?:       string[];
    meta?:       MetaElement[];
    cm?:         number;
    translates?: Translates;
    lkbpst?:     number;
    shbpst?:     number;
}

export interface ACL {
    pub?: number;
}

export interface MetaElement {
    wid?:  null;
    hgt?:  null;
    meta?: Meta;
}

export interface Meta {
    heads?: null;
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
