
import { getFirebase , fromPosts } from "../../lib/helper";

// api/trending
export default function handler(req, res){
    getFirebase('Trending').then((res1) =>{
        const Trending = fromPosts(res1 , 'Trending');
        if(Trending) return res.status(200).json(Trending)
        return res.status(404).json({ error: "Data Not Found"})
    }) 
}