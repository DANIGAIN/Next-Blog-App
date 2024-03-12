import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import Newslatter from "./_child/newslatter";
export default function footer(props) {
  const bg = {
    backgroundImage : "url('/images/footer14.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom right"
  }
 

  return (
    <footer className="bg-[#262d34]" style={bg}>
      <Newslatter user ={props.user}></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div className="flex gap-6 justify-center">
                    <Link href={"/"}><ImFacebook color="#888888" /></Link>
                    <Link href={"/"}><ImTwitter color="#888888" /></Link>                    
                    <Link href={"/"}><ImYoutube color="#888888" /></Link>
              </div>

              <p className="py-5 text-gray-400">Copyright ©2022 All rights reserved | This template is made by Syeda Sadia Afrin</p>
              <p className="text-gray-400 text-center">Terms & Condition</p>
          </div>
      </div>

    </footer>
  );
}
