module.exports = {
  developers: [
    ['overview'],
    ['using-base'],
    {
      type: 'category',
      label: 'Notices',
      items: ['notices/preparing-for-fault-proofs-on-base-sepolia'],
    },
    {
      type: 'category',
      label: 'Building on Base',
      items: [
        'building-with-base/network-information',
        'building-with-base/base-contracts',
        'building-with-base/fees',
        'building-with-base/differences',
        {
          type: 'link',
          label: 'Decentralizing Base with Optimism',
          href: 'https://base.mirror.xyz/H_KPwV31M7OJT-THUnU7wYjOF16Sy7aWvaEr5cgHi8I',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'tools/node-providers',
        'tools/block-explorers',
        'tools/network-faucets',
        'tools/oracles',
        'tools/data-indexers',
        'tools/cross-chain',
        'tools/account-abstraction',
        'tools/onramps',
        'tools/onboarding',
        'tools/bridges-mainnet',
        {
          type: 'category',
          label: 'Onchain Registry',
          items: ['tools/registry-api', 'tools/registry-faq'],
        },
        {
          type: 'category',
          label: 'Toolchains',
          items: ['tools/foundry', 'tools/hardhat', 'tools/thirdweb-cli'],
        },
        {
          type: 'category',
          label: 'Clients',
          items: ['tools/ethers', 'tools/thirdweb-sdk', 'tools/viem', 'tools/web3'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tokens',
      items: ['tokens/token-list', 'tokens/wallet'],
    },
    ['contracts'],
    ['security'],
    { type: 'link', label: 'Status', href: 'https://status.base.org' },
    { type: 'link', label: 'Brand Kit', href: 'https://github.com/base-org/brand-kit' },
    ['terms-of-service'],
    ['privacy-policy'],
    ['cookie-policy'],
  ],
};
