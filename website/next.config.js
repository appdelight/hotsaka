/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");



module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ["images.unsplash.com", "jagan.cf"],
  },
};


module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    // runtimeCaching,
    // swSrc: 'serviceWorker.js'
  },
});

module.exports = {
  async rewrites() {
    return [
      {
        source: '/chicken_tandoori',
        destination: '/menu/starters',
      },
    ]
  },
}