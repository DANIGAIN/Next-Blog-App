// import data from '../data'
import { fromPosts , getFirebase } from "../../../lib/helper";
export default function handler(req, res) {
    const { postId } = req.query;
    getFirebase('Trending').then((res1) => {
        const Trending = fromPosts(res1, 'Trending')
        if (postId) {
            const Tren = Trending.find(value => value.id == postId)
            return res.status(200).json(Tren)
        }
        return res.status(404).json({ error: "Trending Not Found" })
    })
}