/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      'apis',
      'app',
      'components',
      'contexts',
      'features',
      'hooks',
      'pages',
      'types',
    ],
  },
}

module.exports = nextConfig
