import React, { useEffect, useState } from "react";
import Post from '../../components/post'
import AddPost from '../../components/addPost'
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
function index() {
    const [changeState, setChangeState] = useState(0);
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);
    const router = useRouter();
    const [postObject, setPostObject] = useState({
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
        }
    });

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user.email != 's@gmail.com') {
                console.log(user.email)
                router.push('/')
            }
        })
    }, []);

    return (
        <>
            <div className="flex h-screen bg-gray-200">
                <div className=" block fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"></div>
                <div className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
                    <div className="flex items-center justify-center mt-8">
                        <div className="flex items-center">
                            <svg
                                className="w-12 h-12"
                                viewBox="0 0 512 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                                    fill="#4C51BF"
                                    stroke="#4C51BF"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                                    fill="white"
                                />
                            </svg>
                            <span className="mx-2 text-2xl font-semibold text-white">Dashboard</span>
                        </div>
                    </div>
                    <nav className="mt-10">
                        <a
                            className="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25"
                            onClick={() => setChangeState(0)}
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                />
                            </svg>
                            <span className="mx-3">Post</span>
                        </a>

                        <a
                            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
                            onClick={() => setChangeState(1)}
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                                ></path>
                            </svg>
                            <span className="mx-3">Add post</span>
                        </a>

                    </nav>
                </div>

                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
                        <div className="flex items-center">
                            <button

                                className="text-gray-500 focus:outline-none lg:hidden"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 6H20M4 12H20M4 18H11"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                            <div className="relative mx-4 lg:mx-0">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        >
                                        </path>
                                    </svg>
                                </span>
                                <input
                                    className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600"
                                    placeholder="Search"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div
                                className="relative"
                                x-data="{ notificationOpen: false }"
                            >
                                <button

                                    className="flex mx-4 text-gray-600 focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        >
                                        </path>
                                    </svg>
                                </button>

                                <div

                                    className="fixed inset-0 z-10 w-full h-full"
                                    style={{
                                        display: 'none'
                                    }}
                                    x-show="notificationOpen"
                                />
                                <div
                                    className="absolute right-0 z-10 mt-2 overflow-hidden bg-white rounded-lg shadow-xl w-80"
                                    style={{
                                        display: 'none',
                                        width: '20rem'
                                    }}
                                    x-show="notificationOpen"
                                >
                                    <a
                                        className="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600"
                                        href="#"
                                    >
                                        <img
                                            alt="avatar"
                                            className="object-cover w-8 h-8 mx-1 rounded-full"
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        />
                                        <p className="mx-2 text-sm">
                                            <span
                                                className="font-bold"
                                                href="#"
                                            >
                                                Sara Salah
                                            </span>
                                            <span
                                                className="font-bold text-indigo-400"
                                                href="#"
                                            >
                                                Upload Image
                                            </span>
                                        </p>
                                    </a>
                                    <a
                                        className="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600"
                                        href="#"
                                    >
                                        <img
                                            alt="avatar"
                                            className="object-cover w-8 h-8 mx-1 rounded-full"
                                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                        />
                                        <p className="mx-2 text-sm">
                                            <span
                                                className="font-bold"
                                                href="#"
                                            >
                                                Slick Net
                                            </span>
                                        </p>
                                    </a>
                                    <a
                                        className="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600"
                                        href="#"
                                    >
                                        <img
                                            alt="avatar"
                                            className="object-cover w-8 h-8 mx-1 rounded-full"
                                            src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        />
                                        <p className="mx-2 text-sm">
                                            <span
                                                className="font-bold"
                                                href="#"
                                            >
                                                Jane Doe
                                            </span>
                                            {' '}Like Your reply on{' '}
                                            <span
                                                className="font-bold text-indigo-400"
                                                href="#"
                                            >
                                                Test with TDD
                                            </span>
                                            {' '}artical . {'     '}
                                        </p>
                                    </a>
                                    <a
                                        className="flex items-center px-4 py-3 -mx-2 text-gray-600 hover:text-white hover:bg-indigo-600"
                                        href="#"
                                    >
                                        <img
                                            alt="avatar"
                                            className="object-cover w-8 h-8 mx-1 rounded-full"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                                        />
                                        <p className="mx-2 text-sm">
                                            <span
                                                className="font-bold"
                                                href="#"
                                            >
                                                Abigail Bennett
                                            </span>
                                            {' '}start following you . 3h{'                                '}
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="relative"
                                x-data="{ dropdownOpen: false }"
                            >
                                <button

                                    className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
                                >
                                    <img
                                        alt="Your avatar"
                                        className="object-cover w-full h-full"
                                        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                                    />
                                </button>
                                <div

                                    className="fixed inset-0 z-10 w-full h-full"
                                    style={{
                                        display: 'none'
                                    }}
                                    x-show="dropdownOpen"
                                />
                                <div
                                    className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
                                    style={{
                                        display: 'none'
                                    }}
                                    x-show="dropdownOpen"
                                >
                                    <a
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                                        href="#"
                                    >
                                        Profile
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                                        href="#"
                                    >
                                        Products
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                                        href="#"
                                    >
                                        Logout
                                    </a>
                                </div>
                            </div >
                        </div >
                    </header >
                    {!changeState && <Post
                        posts={posts}
                        setPosts={setPosts}
                    ></Post>}
                    {changeState === 1 && <AddPost
                        post={post}
                        setPost={setPost}
                        postObject={postObject}
                        setPostObject={setPostObject}
                        setChangeState={setChangeState}
                    ></AddPost>}


                </div>
            </div>


        </>

    )
}

export default index