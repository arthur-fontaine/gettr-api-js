import undici from 'undici'
import baseApiUrl from "../lib/baseApiUrl";
import {APIUserPostsBody} from "./api/UserPosts";
import Post from "./Post";
import _ from "lodash";
import {APIUserInfosBody} from "./api/UserInfos";
import {APIFollowersBody} from "./api/Followers";
import {APIFollowingsBody} from "./api/Followings";

class User {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    get url(): string {
        return `https://gettr.com/post/${this.id}`;
    }

    async infos() {
        const body: APIUserInfosBody = await (await undici.request(`${baseApiUrl}/s/uinf/${this.id}`)).body.json()

        const data = body.result?.data;

        const infos = {
            username: data?.username,
            nickname: data?.nickname,
            description: data?.dsc,
            language: data?.lang,
            location: data?.location,
            website: data?.website,
            followers: data?.flw ? parseInt(data.flw) : undefined,
            followings: data?.flg ? parseInt(data.flg) : undefined,
            joined: data?.cdate ? new Date(data.cdate) : undefined,
        }

        return { infos, body }
    }

    async posts(max = 20, offset = 0) {
        const body: APIUserPostsBody = await (await undici.request(`${baseApiUrl}/u/user/${this.id}/posts?offset=${offset}&max=${max}&incl=posts&fp=f_uo`)).body.json()

        const posts: Post[] = body.result?.aux?.post ?
            _.compact(Object.values(body.result.aux.post).map(post => post._id && post.cdate && post.txt ?
                new Post(post._id) : null))
            : []

        return { posts, body }
    }

    async followers(max = 20, offset = 0) {
        const body: APIFollowersBody = await (await undici.request(`${baseApiUrl}/u/user/${this.id}/followers?offset=${offset}&max=${max}`)).body.json()

        const followers: User[] = body.result?.aux?.uinf ?
            _.compact(Object.values(body.result.aux.uinf).map(user => user._id ? new User(user._id) : null))
            : []

        return { followers, body }
    }

    async followings(max = 20, offset = 0) {
        const body: APIFollowingsBody = await (await undici.request(`${baseApiUrl}/u/user/${this.id}/followings?offset=${offset}&max=${max}`)).body.json()

        const followings: User[] = body.result?.aux?.uinf ?
            _.compact(Object.values(body.result.aux.uinf).map(user => user._id ? new User(user._id) : null))
            : []

        return { followings, body }
    }

    async isMutualWith(user: User) {
        const followingByBody: {_t: string, rc: string, result: 'y' | 'n'} = await (await undici.request(`${baseApiUrl}/u/user/${this.id}/follows/${user.id}`)).body.json()

        if (followingByBody.result === 'n') return false

        const followedByBody: {_t: string, rc: string, result: 'y' | 'n'} = await (await undici.request(`${baseApiUrl}/u/user/${user.id}/follows/${this.id}`)).body.json()

        return followedByBody.result !== 'n'
    }
}

export default User
