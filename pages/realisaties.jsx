/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';

function Realisaties() {
  return (
    <div className="overflow-x-hidden selection:bg-cyan-600 selection:text-white">
      <Head>
        <title>Realisaties | absolutions</title>
        <link
          rel="shortcut icon"
          href="/assets/images/absolutions.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Heb je vragen over één van onze diensten? Stuur ons gerust een mailtje via onderstaand formulier. We zijn ook telefonisch bereikbaar op +32 479 65 96 39."
        />
        <meta property="og:title" content="Onze realisaties!" />
        <meta
          property="og:description"
          content="Heb je vragen over één van onze diensten? Stuur ons gerust een mailtje via onderstaand formulier. We zijn ook telefonisch bereikbaar op +32 479 65 96 39."
        />
        <meta property="og:url" content="https://www.absolutesolutions.be/" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <div className="container mx-auto max-w-7xl mt-28 p-5">
        <div className="text-center flex justify-center items-center flex-col space-y-3 mb-5">
          <h2 className="font-medium text-3xl text-cyan-600">REALISATIES</h2>
          <p className="font-light text-gray-500 text-sm">
            Een zwembad maakt jouw tuin compleet. Bekijk hieronder enkele van
            onze realisaties!
          </p>
        </div>
        <div className="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          <div className="w-full rounded">
            <img src="/assets/images/Pool1A.png" alt="image" />
          </div>
          <div className="w-full col-span-2 row-span-2 rounded">
            <img src="/assets/images/Pool3A.png" alt="image" />
          </div>
          <div className="w-full rounded">
            <img src="/assets/images/Pool4A.png" alt="image" />
          </div>
          <div className="w-full rounded">
            <img src="/assets/images/Pool5A.png" alt="image" />
          </div>
          <div className="w-full rounded">
            <img src="/assets/images/Pool6A.png" alt="image" />
          </div>
          <div className="w-full rounded">
            <img src="/assets/images/Pool7A.png" alt="image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Realisaties;
