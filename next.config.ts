/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost', 'dev.hocketzap.com'], // adicione seus domínios aqui
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // temporariamente desabilitar erros de ESLint durante o build
  },
};

module.exports = nextConfig;