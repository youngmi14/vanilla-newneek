import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['newneek.co', 'd2phebdq64jyfk.cloudfront.net'],
  },
  reactStrictMode: false, /** TODO - 테스트끝나고 지우기 */
};

export default withVanillaExtract(nextConfig);