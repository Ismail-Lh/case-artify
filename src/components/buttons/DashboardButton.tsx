import React from 'react';
import { LayoutDashboard } from 'lucide-react';

import ButtonLink from './ButtonLink';

function DashboardButton() {
  const isAdmin = false;
  return (
    <>
      {isAdmin ? (
        <ButtonLink href="/dashboard" size="sm" variant="ghost">
          Dashboard
          <LayoutDashboard className="ml-1.5 size-5" />
        </ButtonLink>
      ) : null}
    </>
  );
}

export default DashboardButton;
