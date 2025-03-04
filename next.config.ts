import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    // icon: true,
                    expandProps: false,
                    svgo: false
                }
            }
        ],
    })
    return config
},
};

export default nextConfig;
