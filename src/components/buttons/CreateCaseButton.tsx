import React from 'react';
import { ArrowRight } from 'lucide-react';

import NavLink from '../navbar/NavLink';

function CreateCaseButton() {
  return (
    <NavLink
      href="/configure/upload"
      size="sm"
      className="hidden items-center gap-1 sm:flex"
    >
      Create case
      <ArrowRight className="ml-1.5 size-5" />
    </NavLink>
  );
}

export default CreateCaseButton;
