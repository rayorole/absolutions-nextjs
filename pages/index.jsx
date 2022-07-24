/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import DidYouKnow from './components/DidYouKnow';
import About from './components/About';
import Gallery from './components/Gallery';
import Aos from 'aos';
import Head from 'next/dist/shared/lib/head';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Head>
        <title>Contact absolutions</title>
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
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, archive" />
      </Head>
      <main className="mt-24 home w-full selection:bg-cyan-600 selection:text-white flex justify-center px-4 items-start flex-col text-white">
        <h2
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="text-3xl font-semibold w-96 sm:w-fit md:w-[600px]"
        >
          AB Solutions bouwt en onderhoudt uw zwembad met de grootste zorg.
        </h2>
        <h3
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="text-lg"
        >
          U hoeft enkel te genieten
        </h3>
        <div className="mt-12">
          <a
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            href="/hdpe"
            className="py-3 px-5 transition ease-linear hover:bg-neutral-200 appearance-none rounded-sm bg-neutral-100 shadow-sm shadow-gray-300 font-semibold text-sm text-neutral-700"
          >
            Bekijk onze zwembaden
          </a>
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
      <Footer />
    </div>
  );
}

export default Home;
