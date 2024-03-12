// import data from '../data'
import { getFirebase, fromPosts } from '../../../lib/helper';
// api/posts/1
export default function handler(req, res) {
    const { postId } = req.query;
    getFirebase('Posts').then((res1) => {
        const Posts = fromPosts(res1, 'Posts')
        if (postId) {
            const post = Posts.find(value => value.id == postId)
            return res.status(200).json(post)
        }
        return res.status(404).json({ error: "Post Not Found" })
    })
}