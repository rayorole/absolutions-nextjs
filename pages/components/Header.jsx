/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import HamburgerMenu from './HamburgerMenu';
import RegularMenu from './RegularMenu';

function Header() {
  return (
    <header className="bg-zinc-50 z-50 border border-b-neutral-100 py-3 px-5 md:px-8 lg:px-12 flex items-center justify-between fixed top-0 w-screen selection:bg-cyan-600 selection:text-white">
      <a href="/" className="focus:outline-none">
        <img
          src="assets/images/absolutions.png"
          alt="AB"
          className="w-24 focus:outline-none"
        />
      </a>
      <HamburgerMenu />
      <RegularMenu />
    </header>
  );
}

export default Header;
