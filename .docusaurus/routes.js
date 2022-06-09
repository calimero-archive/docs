import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '976'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '332'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'dff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '31c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '11a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'fe2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '80c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '66f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '100'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '616'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/basics/congratulations',
        component: ComponentCreator('/basics/congratulations', '465'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/basics/create-a-blog-post',
        component: ComponentCreator('/basics/create-a-blog-post', 'd86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/basics/create-a-document',
        component: ComponentCreator('/basics/create-a-document', '37c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/basics/create-a-page',
        component: ComponentCreator('/basics/create-a-page', '8f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/basics/deploy-your-site',
        component: ComponentCreator('/basics/deploy-your-site', 'b29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/basics/markdown-features',
        component: ComponentCreator('/basics/markdown-features', '90e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
