/** @type {import('next').NextConfig} */
module.exports = {
   compiler: {
      styledComponents: true,
   },
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/i,
         issuer: /\.[jt]sx?$/,
         use: ['@svgr/webpack'],
      });

      return config;
   },
};