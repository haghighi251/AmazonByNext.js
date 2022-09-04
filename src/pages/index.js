import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
    return (
        <div className="bg-gray-100 h-screen">
            <Head>
                <title>Amazon 2.0</title>
            </Head>
            {/* Top Nav */}
            <Header/>

            <main className="max-w-screen-2xl mx-auto">

                {/* Banner */}
                <Banner />

                {/* Products */}
                <ProductFeed products={products} />

            </main>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const products = await fetch('https://fakestoreapi.com/products')
        .then(response => response.json());

    return {
        props: {
            products,
        }
    }
}
