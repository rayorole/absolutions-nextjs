import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Gallery() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="bg-zinc-50 text-center py-12 px-4 text-neutral-700 border-b border-b-zinc-100">
      <div class="grid gap-4 grid-cols-2 grid-rows-4">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src="/assets/images/asset-fluidra.jpeg"
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src="/assets/images/image-asset.jpeg"
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src="/assets/images/asset-deck.jpeg"
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src="/assets/images/asset-pool-garden.jpeg"
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src="/assets/images/asset-pool-long.jpeg"
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src="/assets/images/pool-asset-blue.jpeg"
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src="/assets/images/pool-asset-more.jpeg"
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="rounded-lg overflow-hidden"
        >
          <img
            src="/assets/images/pool-w-house.jpeg"
            alt="Vincent met man"
            className="object-cover h-56 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
