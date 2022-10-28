/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import DidYouKnow from './components/DidYouKnow';
import About from './components/About';
import Gallery from './components/Gallery';
import Aos from 'aos';
import Head from 'next/dist/shared/lib/head';
import Link from 'next/link';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Head>
        <title>AB Solutions zwembaden</title>
        <link
          rel="shortcut icon"
          href="/assets/images/absolutions.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="AB Solutions bouwt en onderhoudt uw zwembad met de grootste zorg. U hoeft enkel te genieten."
        />
        <meta property="og:title" content="AB Solutions" />
        <meta
          property="og:description"
          content="AB Solutions bouwt en onderhoudt uw zwembad met de grootste zorg. U hoeft enkel te genieten."
        />
        <meta property="og:url" content="https://www.absolutesolutions.be/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/rayorole/absolutions-nextjs/dev/public/assets/images/absolutions.png"
        />
        <meta property="og:site_name" content="AB Solutions zwembaden" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, archive" />
        <meta
          name="google-site-verification"
          content="9ZktPPedo01mWXN8XvjIGf9u5x2KdzxyUr8BTvgI80I"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rayorole" />
        <meta name="twitter:title" content="AB Solutions zwembaden" />
        <meta
          name="twitter:url"
          content="https://absolutions-nextjs.vercel.app/"
        />
        <meta
          name="twitter:description"
          content="AB Solutions bouwt en onderhoudt uw zwembad met de grootste zorg. U hoeft enkel te genieten."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/rayorole/absolutions-nextjs/dev/public/assets/images/absolutions.png"
        />
      </Head>
      <div className="">
        <main className="mt-24 px-4 home w-full selection:bg-cyan-600 selection:text-white flex justify-center items-start flex-col text-white">
          <div className="lg:w-8/12 lg:mx-auto lg:text-left">
            <h1
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="text-3xl font-semibold w-96 sm:w-fit md:w-[600px]"
            >
              AB Solutions bouwt en onderhoudt uw zwembad met de grootste zorg.
            </h1>
            <h3
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="text-lg"
            >
              U hoeft enkel te genieten
            </h3>
            <div className="mt-12">
              <Link href="/hdpe">
                <a
                  className="inline-flex items-center px-6 py-3 mt-8 bg-white border border-white rounded hover:bg-transparent hover:text-white text-gray-600 focus:outline-none focus:ring-none"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                >
                  <span className="text-sm font-medium">
                    Bekijk onze zwembaden
                  </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </main>

        <Services />
        <About />
        <DidYouKnow />
        <Gallery />
        <div className="w-full py-10 px-4 sm:hidden">
          <h2 className="text-center text-neutral-600 font-semibold text-sm">
            In samenwerking met:
          </h2>
          <div className="flex items-center justify-center py-6">
            <img
              className="w-40"
              src="/assets/images/vanbeers.png"
              alt="Vanbeers Logo"
            />
            <img
              className="w-40"
              src="/assets/images/renolit.png"
              alt="Renolit Logo"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
