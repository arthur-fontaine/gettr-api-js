import {test} from "tap";
import User from "../src/models/User";
import Post from "../src/models/Post";

test('', async (t) => {
  const user = new User('jairbolsonaro')

  const userInfos = (await user.infos()).infos
  t.equal(userInfos.nickname, 'Jair Messias Bolsonaro')

  const userPosts = (await user.posts()).posts
  t.type(userPosts[0], Post)

  const mutualTrue = await user.isMutualWith(new User('celiofaria'))
  t.ok(mutualTrue)

  const mutualFalse = await user.isMutualWith(new User('arthurfontaine'))
  t.notOk(mutualFalse)

  const post = new Post('pgeb7m863c')

  const postDate = await post.date()
  t.equal(postDate?.getTime(), new Date(1636393569664).getTime())
});
