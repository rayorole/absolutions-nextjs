/* eslint-disable @next/next/no-img-element */
import HamburgerMenu from './HamburgerMenu';
import RegularMenu from './RegularMenu';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-zinc-50 z-50 border border-b-neutral-100 py-3 px-5 md:px-8 lg:px-12 flex items-center justify-between fixed top-0 w-screen selection:bg-cyan-600 selection:text-white">
      <Link href="/">
        <a className="focus:outline-none">
          <img
            src="assets/images/absolutions.png"
            alt="AB"
            className="w-24 focus:outline-none"
          />
        </a>
      </Link>
      <HamburgerMenu />
      <RegularMenu />
    </header>
  );
}

export default Header;
