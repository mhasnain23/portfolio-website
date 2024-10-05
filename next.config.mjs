/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.canva.com', "hostname": "wallpapers.com",
            port: '',
          },
        ],
      },
};

export default nextConfig;
