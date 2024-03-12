"use client"
import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format';
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config'

// compoenents
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import { useState } from 'react';
// import Section3 from '../components/section3';
// import Section4 from '../components/section4';

export default function Home() {
   const router = useRouter();
   const [user, setUser] = useState({email:''});
   const getUser = async () => {
      onAuthStateChanged(auth, (res) => {
         if (!res) {
            router.push('/login')
         }else{
            setUser(res)
         }
      })
   }
   setTimeout(() => { getUser() }, 10000);
   return (
      <Format  user={user} >
         <Section1></Section1>
         <Section2></Section2>
         {/* <Section3></Section3>
      <Section4></Section4> */}
      </Format>

   )
}
