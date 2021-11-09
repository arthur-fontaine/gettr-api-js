# Gettr

_This package is in development._

> A [GETTR](https://gettr.com/) client library written in TypeScript.

## Installation

    npm install --save gettr

## Usage

    import gettr from 'gettr'

## API

### gettr.`User(id: string)`
Example: `gettr.User('arthurfontaine')`

#### Methods

##### gettr.User.`infos()`
Example: `gettr.User('arthurfontaine').infos()`

Returns a promise that resolves to an object containing the user's infos.

```js
/**
 * @returns {Promise<{infos: UserInfos, body: APIUserInfosBody}>}
 */
```

##### gettr.User.`posts(max = 20, offset = 0)`
Example: `gettr.User('arthurfontaine').posts()`

Returns a promise that resolves to an array containing the user's posts.

```js
/**
 * @param {number} [max=20]
 * @param {number} [offset=0]
 * @returns {Promise<{posts: gettr.Post[], body: APIUserPostsBody}>}
 */
```

##### gettr.User.`followers(max = 20, offset = 0)`
Example: `gettr.User('arthurfontaine').followers()`

Returns a promise that resolves to an array containing the user's followers.

```js
/**
 * @param {number} [max=20]
 * @param {number} [offset=0]
 * @returns {Promise<{followers: gettr.User[], body: APIFollowersBody}>}
 */
```

##### gettr.User.`followings(max = 20, offset = 0)`
Example: `gettr.User('arthurfontaine').followings()`

Returns a promise that resolves to an array containing the user's followings.

```js
/**
 * @param {number} [max=20]
 * @param {number} [offset=0]
 * @returns {Promise<{followings: gettr.User[], body: APIFollowingsBody}>}
 */
```

##### gettr.User.`isMutualWith(user: gettr.User)`
Example: `gettr.User('arthurfontaine').isMutualWith(new gettr.User('edwardsnowden'))`

Returns a promise that resolves to a boolean indicating if the user is mutual with the given user.

```js
/**
 * @param {gettr.User} user
 * @returns {Promise<boolean>}
 */
```

#### Properties

##### gettr.User.`url`
Example: `gettr.User('arthurfontaine').url`

```js
/**
 * @returns {string}
 */
```

### gettr.`Post(id: string, content: string, author: gettr.User, date: Date)`
Example: `gettr.Post('paz2a0ksnx', 'Hello world!', gettr.User('arthurfontaine'), new Date(1636405960355))`

#### Methods

##### gettr.Post.`content()`
Example: `gettr.Post('paz2a0ksnx').content()`

Returns a promise that resolves to the post's content.

```js
/**
 * @returns {Promise<?string>}
 */
```

##### gettr.Post.`author()`
Example: `gettr.Post('paz2a0ksnx').author()`

Returns a promise that resolves to the post's author.

```js
/**
 * @returns {Promise<?gettr.User>}
 */
```

##### gettr.Post.`date()`
Example: `gettr.Post('paz2a0ksnx').date()`

Returns a promise that resolves to the post's date.

```js
/**
 * @returns {Promise<?Date>}
 */
```

#### Properties

##### gettr.Post.`url`
Example: `gettr.Post('paz2a0ksnx').url`

Returns the post's URL.

```js
/**
 * @returns {?string}
 */
```

## Types

#### `UserInfos`

```js
/**
 * {
 *   ?username: string,
 *   ?nickname: string,
 *   ?description: string,
 *   ?language: string,
 *   ?location: string,
 *   ?website: string,
 *   ?followers: number,
 *   ?followings: number,
 *   ?joined: Date
 * }
 */
```

## Maintainers

- [Arthur Fontaine](https://github.com/arthur-fontaine)
