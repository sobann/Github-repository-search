import { ComponentType } from "react";

import { SearchGithubProjects } from '../SearchProjects/SearchGithubProjects';
import { DetailsApplication } from '../DetailsApplication/DetailsApplication';
import { Factorial } from '../Factorial/Factorial';

export type RouteConfig = {
  path: string;
  component: ComponentType;
  name: string
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: SearchGithubProjects,
    name: 'Github repository search'
  },
  {
    path: "/details-aplication",
    component: DetailsApplication,
    name: 'Project details'
  },
  {
    path: "/factorial",
    component: Factorial,
    name: 'Calculate factorial'
  },
]