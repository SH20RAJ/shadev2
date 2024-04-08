/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        pageDataCollectionTimeout: 20000, // Increase the timeout (in milliseconds)
      },
};

export default nextConfig;
