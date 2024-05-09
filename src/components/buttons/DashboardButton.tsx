import React from 'react';
import { LayoutDashboard } from 'lucide-react';

import NavLink from '../navbar/NavLink';

function DashboardButton() {
  const isAdmin = false;
  return (
    <>
      {isAdmin ? (
        <NavLink href="/dashboard" size="sm" variant="ghost">
          Dashboard
          <LayoutDashboard className="ml-1.5 size-5" />
        </NavLink>
      ) : null}
    </>
  );
}

export default DashboardButton;
