import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";


import './styles.scss';

import { routes } from '../Routes/routes';
import { NavList } from './NavList';
export const App = () => {

  const RoutesMap = routes.map((route) => <Route path={route.path} key={route.name} element={<route.component />}></Route>);

  return (
    <>
      <Router>
        <div className="main__layout">
          <aside>
            <nav>
              <ul>
                <NavList />
              </ul>
              <h2 className="author">Author: Dawid Sobański</h2>
            </nav>
          </aside>
          <main>
            <Routes>{RoutesMap}</Routes>
          </main>
        </div>
      </Router>
    </>
  );
}