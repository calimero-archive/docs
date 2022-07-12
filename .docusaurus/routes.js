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
    component: ComponentCreator('/', '119'),
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
        path: '/bridge/connectors/overview',
        component: ComponentCreator('/bridge/connectors/overview', '821'),
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
        path: '/bridge/prover_service',
        component: ComponentCreator('/bridge/prover_service', '08e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/bridge/relayer_service',
        component: ComponentCreator('/bridge/relayer_service', 'c42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/bridge/running_a_bridge',
        component: ComponentCreator('/bridge/running_a_bridge', '1d3'),
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
        path: '/integrate/fungible_token',
        component: ComponentCreator('/integrate/fungible_token', '496'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/integrate/non_fungible_token',
        component: ComponentCreator('/integrate/non_fungible_token', 'cc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/integrate/wallet_integration',
        component: ComponentCreator('/integrate/wallet_integration', '183'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/interact/assembly_script_sdk',
        component: ComponentCreator('/interact/assembly_script_sdk', '3d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/interact/indexer',
        component: ComponentCreator('/interact/indexer', '684'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/interact/local_development',
        component: ComponentCreator('/interact/local_development', 'b20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/interact/rpc',
        component: ComponentCreator('/interact/rpc', 'f9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/interact/rust_sdk',
        component: ComponentCreator('/interact/rust_sdk', '16e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/private_shard/architecture',
        component: ComponentCreator('/private_shard/architecture', '9ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/private_shard/running_a_shard',
        component: ComponentCreator('/private_shard/running_a_shard', '82b'),
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
