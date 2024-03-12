import { useRouter } from "next/router"
import { useState } from "react";
import { postSubscribe } from './../../lib/helper'
export default function newslatter(props) {
    const {user} = props ;
    const router = useRouter();
    const [isSubscribe, setIsSubscribe] = useState(false);
    const handelClick = async () => {
        if (!user.email)
            router.push('/login')
        else {
            const u = props.user.email;
            const res = await postSubscribe(u);
            if (res) {
                setIsSubscribe(true)
                alert("Subscribe is Done")
            }
        }
    }

    return (
        <section className="bg-[#262d34] mt-20">

            <div className="container mx-auto md:px-20 py-16 text-center">
                <h1 className="font-bold text-white text-3xl">Subscribe Newslatter</h1>
                <div className="py-4"></div>
                {!isSubscribe ? <button className="bg-[#698aac] px-20 py-3 rounded-full text-gray-50 text-xl"
                    onClick={handelClick}
                >
                    Subscribe
                </button>: 
                 <button className="bg-gray-300 px-20 py-3 rounded-full text-gray-50 text-xl"
                 
             >
                UnSubscribe
             </button>}


            </div>
        </section>
    )
}
