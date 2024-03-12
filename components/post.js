import React, { useEffect } from "react";
import { getFirebase, fromPosts ,handelDelete} from './../lib/helper'
function index(props) {
    const { posts, setPosts } = props;
    useEffect(() => {
        getFirebase('Trending').then((res) => {
            getFirebase('Posts').then((res1) => {
                const array1 =  fromPosts(res ,'Trending')
                const array = fromPosts(res1 ,'Posts')
                setPosts([...array ,...array1]) 
           })     
        })
    }, [])

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col mt-8">
                    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Post</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Title</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Author Name</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            published</th>
                                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Lavel</th>

                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Action</th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {posts && posts.map((data, ind) => (
                                        <tr key={ind}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img className="w-10 h-10 rounded-full" src={data.img} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-600">{data.title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-600">{data.author.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-600">{new Date(data.published).getDay()+'-'+new Date(data.published).getMonth() +'-'+new Date(data.published).getFullYear()}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-600">{data.post}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <h2 onClick={e => handelDelete(data.id ,data.post , posts ,setPosts )} className="text-red-400 hover:text-indigo-900" >X</h2>
                                            </td>
                                            <td className="px-6 py-3 border-b  border-gray-200" />
                                        </tr>

                                    ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default index;