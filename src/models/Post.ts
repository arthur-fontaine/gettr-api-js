import User from "./User";
import undici from "undici";
import baseApiUrl from "../lib/baseApiUrl";
import {APIPostBody} from "./api/Post";

class Post {
    id: string;

    private body?: APIPostBody;

    constructor(id: string) {
        this.id = id;

        (async () => {
            this.body = await (await undici.request(`${baseApiUrl}/u/post/${id}?incl=poststats|shared|liked`)).body.json()
        })();
    }

    get dataFetched(): boolean {
        return this.body !== undefined;
    }

    get content() {
        return this.body?.result?.data?.txt
    }

    get author() {
        return this.body?.result?.data?.uid ? new User(this.body.result.data.uid) : undefined
    }

    get date() {
        return this.body?.result?.data?.cdate ? new Date(this.body.result.data.cdate) : undefined
    }

    get url(): string {
        return `https://gettr.com/post/${this.id}`;
    }
}

export default Post