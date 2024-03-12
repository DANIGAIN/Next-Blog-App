import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function header() {
  return (
      <header className="bg-[#b4cbe3]">
          <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
              <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                  <input type="text" className="input-text"  placeholder="Search..."/>
              </div>
              <div className="shrink w-80 sm:order-2">
                  <Link href={"/"} className="font-bold  text-3xl">
                      Travel Bangladesh
                  </Link>
              </div>
              <div className="w-96 order-3 flex justify-center">
                  <div className="flex gap-6">
                      <Link target="blank" href={"https://web.facebook.com/"}><ImFacebook color="#22222" /></Link>
                      <Link target="blank" href={"https://twitter.com"}><ImTwitter color="#22222" /></Link>                    
                      <Link target="blank" href={"https://www.youtube.com"}><ImYoutube color="#22222" /></Link>
                  </div>
              </div>
          </div>
      </header>
  );
}
