import React, { FC } from 'react';

import { Link, useLocation  } from "react-router-dom";

import { routes } from '../Routes/routes';

export const NavList = () => {
  const location = useLocation();

  return (
    <>
      {routes.map((nav) => (
        <React.Fragment key={nav.name}>
          <li className={location.pathname === nav.path ? 'active' : ''}><Link to={nav.path}>{nav.name}</Link></li>
        </React.Fragment>
      ))}
    </>
  )
}
