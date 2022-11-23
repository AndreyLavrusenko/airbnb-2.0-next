import '../styles/globals.css'
import Layout from "./Layout";
import ProgressBar from "@badrap/bar-of-progress";
import {Router} from "next/router";

function MyApp({Component, pageProps}) {

    const progress = new ProgressBar({
        size: 4,
        color: "#FE596E",
        className: 'z-50',
        delay: 100
    });

    Router.events.on('routeChangeStart', progress.start)
    Router.events.on('routeChangeComplete', progress.finish)
    Router.events.on('routeChangeError', progress.finish)

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
