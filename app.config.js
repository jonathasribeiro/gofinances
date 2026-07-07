export default {
  expo: {
    name: 'gofinances',
    slug: 'gofinances',
    scheme: 'gofinances',
    version: '2.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'dark',
    assetBundlePatterns: ['**/*'],
    ios: { supportsTablet: true },
    android: { adaptiveIcon: { backgroundColor: '#09090b' } },
    web: { bundler: 'metro' },
    extra: {
      clientId: process.env.CLIENT_ID,
      redirectUri: process.env.REDIRECT_URI,
    },
  },
};
