import Image from 'next/image';

import MaxWidthWrapper from '../global/MaxWidthWrapper';
import CasesDesignGrid from './CasesDesignGrid';

function CasesDesignGallery() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        src="/images/what-people-are-buying.png"
        height={143}
        width={193}
        alt="what-people-are-buying"
        className="absolute -left-32 top-1/3 hidden select-none xl:block"
        aria-hidden="true"
      />

      <CasesDesignGrid />
    </MaxWidthWrapper>
  );
}

export default CasesDesignGallery;
