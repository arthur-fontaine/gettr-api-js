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

##### User.`infos`
Example: `gettr.User('arthurfontaine').infos()`

Returns a promise that resolves to an object containing the user's infos.

```js
/**
 * @returns {Promise<{infos: UserInfos, body: APIUserInfosBody}>}
 */
```

##### User.`posts`
Example: `gettr.User('arthurfontaine').posts()`

Returns a promise that resolves to an array containing the user's posts.

```js
/**
 * @returns {Promise<{posts: Post[], body: APIUserPostsBody}>}
 */
```

##### User.`followers`
Example: `gettr.User('arthurfontaine').followers()`

Returns a promise that resolves to an array containing the user's followers.

```js
/**
 * @returns {Promise<{followers: User[], body: APIFollowersBody}>}
 */
```

##### User.`followings`
Example: `gettr.User('arthurfontaine').followings()`

Returns a promise that resolves to an array containing the user's followings.

```js
/**
 * @returns {Promise<{followings: User[], body: APIFollowingsBody}>}
 */
```

##### User.`isMutualWith`
Example: `gettr.User('arthurfontaine').isMutualWith('edwardsnowden')`

Returns a promise that resolves to a boolean indicating if the user is mutual with the given user.

```js
/**
 * @returns {Promise<boolean>}
 */
```

#### Properties

##### User.`url`
Example: `gettr.User('arthurfontaine').url`

```js
/**
 * @returns {string}
 */
```

### gettr.`Post(id: string, content: string, author: User, date: Date)`
Example: `gettr.Post('paz2a0ksnx', 'Hello world!', gettr.User('arthurfontaine'), new Date(1636405960355))`

#### Properties

##### Post.`content`
Example: `gettr.Post('paz2a0ksnx').content`

Returns the post's content.

```js
/**
 * @returns {?string}
 */
```

##### Post.`author`
Example: `gettr.Post('paz2a0ksnx').author`

Returns the post's author.

```js
/**
 * @returns {?User}
 */
```

##### Post.`date`
Example: `gettr.Post('paz2a0ksnx').date`

Returns the post's date.

```js
/**
 * @returns {?Date}
 */
```

##### Post.`url`
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
