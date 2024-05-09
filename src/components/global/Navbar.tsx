import React from 'react';
import Link from 'next/link';

import NavLinks from '../navbar/NavLinks';
import MaxWidthWrapper from './MaxWidthWrapper';

function Navbar() {
  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 flex font-semibold">
            Case<span className="text-green-500">Artify</span>
          </Link>

          <NavLinks />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
