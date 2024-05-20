import React from 'react';
import { ArrowRight } from 'lucide-react';

import ButtonLink from './ButtonLink';

function CreateCaseButton() {
  return (
    <ButtonLink
      href="/configure/upload"
      size="sm"
      className="hidden items-center gap-1 sm:flex"
    >
      Create case
      <ArrowRight className="ml-1.5 size-5" />
    </ButtonLink>
  );
}

export default CreateCaseButton;
