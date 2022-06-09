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
    component: ComponentCreator('/', '997'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '616'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/bridge/architecture',
        component: ComponentCreator('/bridge/architecture', '2ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/bridge/connectors/cross_shard_contract_call_connector',
        component: ComponentCreator('/bridge/connectors/cross_shard_contract_call_connector', 'de6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/bridge/connectors/fungible_token_connector',
        component: ComponentCreator('/bridge/connectors/fungible_token_connector', '9f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/bridge/connectors/non_fungible_token_connector copy',
        component: ComponentCreator('/bridge/connectors/non_fungible_token_connector copy', 'b10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/bridge/light_client_contract',
        component: ComponentCreator('/bridge/light_client_contract', '8f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/bridge/light_client_prover',
        component: ComponentCreator('/bridge/light_client_prover', '902'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/bridge/relayer',
        component: ComponentCreator('/bridge/relayer', '183'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/faq',
        component: ComponentCreator('/faq', '204'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/getting-started/architecture',
        component: ComponentCreator('/getting-started/architecture', '55c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/integrate/',
        component: ComponentCreator('/integrate/', '6d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/interact/',
        component: ComponentCreator('/interact/', 'c17'),
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
