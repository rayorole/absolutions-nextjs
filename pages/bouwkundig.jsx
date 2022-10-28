/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';

import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Bouwkundig() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Head>
        <title>Bouwkundige zwembaden | absolutions</title>
        <link
          rel="shortcut icon"
          href="/assets/images/absolutions.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Onze bouwkundige zwembaden worden gebouwd volledig op uw maat."
        />

        <meta
          property="og:title"
          content="Bouwkundige zwembaden bij AB Solutions."
        />
        <meta
          property="og:description"
          content="Onze bouwkundige zwembaden worden gebouwd volledig op uw maat."
        />
        <meta property="og:url" content="https://www.absolutesolutions.be/" />
        <meta property="og:type" content="website" />
      </Head>
      <section className="relative bg-white">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="/assets/images/bouwkundig.jpeg"
          alt="Bouwkundig zwembad"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="font-extrabold text-cyan-700 sm:block">
                Bouwkundige{' '}
              </strong>
              <span className="text-stone-700">zwembaden</span>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-neutral-700">
              Tradionele skimmerbaden. Of heb je liever een onder- of
              overloop-zwembad?
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/assets/images/night-pool.png"
                  alt="Indoors house"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Wat is een bouwkundig zwembad?
                </h2>

                <p className="mt-4 text-gray-600">
                  Onze bouwkundige zwembaden worden gebouwd volledig op uw maat.
                  Wij bouwen traditionele skimmerbaden met oog voor detail en
                  totaalconcept met net dat ietsje meer. Of liever een onder- of
                  overloopzwembad aan zeer concurrentiële prijzen.
                </p>

                <a
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-cyan-700 border border-cyan-700 rounded active:text-cyan-500 hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring"
                  href="/contact"
                >
                  Een vraag?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 px-8 bg-neutral-50 border border-t-neutral-100 ">
        <div className="md:flex md:justify-between items-center max-w-screen-2xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-cyan-700 tracking-wide">
              Aarzel ons niet te contacteren
            </h2>
            <p className="text-neutral-600 font-semibold text-xs">
              Wij luisteren naar iedere klant en streven naar kwaliteit.
            </p>
          </div>
          <div className="flex items-center space-x-2 my-4">
            <a
              type="submit"
              href="mailto:vincent@absolutesolutions.be"
              className="py-2 flex focus:outline-none focus:bg-cyan-800 hover:rotate-1 appearance-none justify-center w-32 bg-cyan-700 transition ease-in hover:bg-cyan-800 rounded-full text-white items-center text-md font-medium"
            >
              Mail
              <MailIcon className="w-4 h-4 text-white ml-2" />
            </a>
            <a
              type="submit"
              href="tel:+32479659639"
              className="py-2 hover:rotate-1 focus:outline-none focus:bg-neutral-600 flex appearance-none justify-center w-32 bg-neutral-500 transition ease-in hover:bg-neutral-600 rounded-full text-white items-center text-md font-medium"
            >
              Bel
              <PhoneIcon className="w-4 h-4 text-white ml-2" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
