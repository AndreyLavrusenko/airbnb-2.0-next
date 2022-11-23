import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";


export default function Home({exploreData, cardsData}) {
    return (
        <>
            <Head>
                <title>Airbnb 2.0</title>
            </Head>

            <Banner/>

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {exploreData?.map(({location, img, distance}) => (
                            <SmallCard key={img} location={location} img={img} distance={distance}/>
                        ))}
                    </div>

                </section>

                <section>
                    <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

                    <div className="flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3">
                        {cardsData?.map(({img, title}) => (
                            <MediumCard key={img} img={img} title={title}/>
                        ))}
                    </div>

                </section>

                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb"
                    buttonText="Get Inspired"
                />
            </main>

        </>
    )
}


export async function getStaticProps() {
    const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
        .then(res => res.json())


    const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT")
        .then(res => res.json())

    return {
        props: {
            exploreData,
            cardsData
        }
    }
}
