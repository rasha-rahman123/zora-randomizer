const { fetchTypeDefs } = require('apollo-mocked-provider');

(() => {
  fetchTypeDefs({ uri: 'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1' });
})();