/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'allycapitalgroup.chiccolacreative.com',
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
        // images: {
          
        //   formats:['image/webp']
        // },
/* ...Your other config rules */
}

module.exports = nextConfig