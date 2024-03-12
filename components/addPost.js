import React, { useState } from "react";
import {imageUpload} from "../lib/helper";


function index(props) {
    const { post, setPost, postObject, setPostObject , setChangeState} = props;
    const [errorMsg , setErrorMsg] = useState('');
    const handelSubmit = async(e) =>{
        e.preventDefault();
        if(!postObject.title || !postObject.subtitle || !postObject.category || !postObject.description || !post || !postObject.img ){
            setErrorMsg("Please fill all the field  ...")
            return ;            
        }
        postObject.published = Date.now();
        const res =  await imageUpload(postObject ,post)
        if(res){
            setChangeState(0)
            setPostObject({
                title: '',
                subtitle: '',
                category: '',
                img: '',
                description: '',
                published: '',
                author: {
                    name: "Syeda Sadia Afrin",
                    img: "/images/author/author1.jpg",
                    designation: "Founder"
                }});
        
            alert('Add a new post');
        }

    }
    return (
        <>
            <div className="mt-8">

                <div className="mt-4">
                    <div className="p-6 bg-white rounded-md shadow-md">

                        <form className="max-w-md mx-auto" onSubmit={handelSubmit}>
                            <div className="relative z-0 w-full mb-5 group">
                                <select
                                    name="post"
                                    id="post"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    defaultValue={post}
                                    onChange={(e) => setPost(e.target.value)}
                                >
                                    <option value={post} disabled>Select on Post</option>
                                    <option value="Trending" className="text-gray-600">Trending</option>
                                    <option value="Posts" className="text-gray-600" >Latest Post</option>
                                </select>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={postObject.title}
                                    onChange={(e) => setPostObject((prev) => ({ ...prev, title: e.target.value }))}
                                />
                                <label
                                    htmlFor="title"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Title
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="sub_title"
                                    id="sub_title"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={postObject.subtitle}
                                    onChange={(e) => setPostObject((prev) => ({ ...prev, subtitle: e.target.value }))}
                                />
                                <label
                                    htmlFor="sub_title"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Post Subtitle
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={postObject.description}
                                    onChange={(e) => setPostObject((prev) => ({ ...prev, description: e.target.value }))}

                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Post description
                                </label>
                            </div>


                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder=" "
                                    className="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    value={postObject.category}
                                    onChange={(e) => setPostObject((prev) => ({ ...prev, category: e.target.value }))}

                                />
                                <label
                                    htmlFor="category"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    
                                >
                                    Post Category
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <div className="relative">
                                    <label
                                        title="Click to upload"
                                        htmlFor="button2"
                                        className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                                    >
                                        <div className="w-max relative">
                                           {!postObject.img ? <img
                                                className="w-12"
                                                src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                                                alt="file upload icon"
                                                width={512}
                                                height={512}
                                            />:
                                            <img
                                                className="w-12"
                                                src="https://www.svgrepo.com/show/520676/cross.svg"
                                                alt="file upload icon"
                                                width={512}
                                                height={512}
                                            />}

                                        </div>
                                        <div className="relative">
                                            <span className="block text-base font-semibold relative text-gray-400  group-hover:text-blue-500">
                                                Upload Post Image
                                            </span>
                                            <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
                                                Max 2 MB
                                            </span>
                                        </div>
                                    </label>
                                    <input hidden="" 
                                    type="file"
                                     name="button2"
                                      id="button2" 
                                       
                                      onChange={(e)=> setPostObject((prev) =>({...prev ,img:e.target.files[0]}))}
                                      />
                                </div>

                            </div>
                            {errorMsg && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400" role="alert">
                                    <span className="font-medium"> alert!</span> {errorMsg}
                                </div>}
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </>

    )

}
export default index;