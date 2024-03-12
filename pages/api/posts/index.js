
// import data from '../data'
import { getFirebase ,fromPosts } from "../../../lib/helper";

export default function hanlder(req, res){
    // const { Posts } = data;
 
    getFirebase('Posts').then((res1) => {
        const  Posts = fromPosts(res1, 'Posts')
        if (Posts) return res.status(200).json(Posts);
        return res.status(404).json({ error : "Data Not Found"})
   })
     
}