import axios from "axios";
import {app} from './../firebase/config'
import { v4 } from "uuid";
import {ref,getStorage, uploadBytes, getDownloadURL} from 'firebase/storage'

export default async function getPost(id){
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/posts`)
    const pos = await res.json()

    if(id){
        return pos.find(value => value.id == id)
    }

    return pos;
}

export  async function getTrending(id){
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/trending`)
    const trein = await res.json()

    if(id){
        return trein.find(value => value.id == id)
    }

    return trein;
}
//----------------------------------------------- fireBASE ---------------------------------------------------//
export const getSubscribe = async() =>{
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_FIREBASE_URL}/subscribe.json`);
        return res.data ;
    }catch(error){
        return error
    }
}
export const postSubscribe = async(id)=>{
    try{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_FIREBASE_URL}/subscribe.json`, {user:id}, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
         return res.data.name;   
    }catch(error){
        return error;
    }
    
}

const postFirebase = async(obj ,post)=>{
    try{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_FIREBASE_URL}/post/${post}.json`, obj, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
         return res.data.name;   
    }catch(error){
        return error;
    }
    
}

export const getFirebase = async(post) =>{
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_FIREBASE_URL}/post/${post}.json`);
        return res.data ;
    }catch(error){
        return error
    }
}
export const handelDelete = async(id ,post , post1 , setPosts) =>{
    try{
         
        const updatePost = post1.filter(data=>(data.id !=id))
        setPosts(updatePost)
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_FIREBASE_URL}/post/${post}/${id}.json`);
        if(res.status === 200){
            alert("post is deleted")
        }

    }catch(error){
        console.log(error)
    }
}


export const fromPosts = (data,post) =>{
    const array = [];
    for(const i in data){
        const ele = data[i]
        ele.post = post;
        ele.id = i ;
        array.push(ele);
    }
   return array ; 
}

export const imageUpload = async(postObject ,post) =>{
    const storage = getStorage(app);
    const imageRef = ref(storage ,`uploads/${v4()}`)

    return  uploadBytes(imageRef, postObject.img)
    .then(() => {
        return getDownloadURL(imageRef);
    })
    .then(async(url) => {
        postObject.img = url
        return  await postFirebase(postObject, post);
    
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

