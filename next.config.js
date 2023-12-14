/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/login',
            permanent: true, // 301 redirect (permanent)
          },
        ];
      },
}

module.exports = nextConfig
