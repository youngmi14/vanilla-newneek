import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['newneek.co', 'd2phebdq64jyfk.cloudfront.net'],
  }
};

export default withVanillaExtract(nextConfig);