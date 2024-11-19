/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
};

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
export default withNextIntl(nextConfig);