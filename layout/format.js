import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function format(props){
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>

            <Header></Header>
            <main>{props.children}</main>
            <Footer user={props.user}></Footer>
        </>
    )
}