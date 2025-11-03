/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.resolve.fallback = { fs: false };
        config.module.rules.push({
            test: /\.txt$/,
            use: 'raw-loader'
        })
        return config
    },
    async headers() {
        return [
            {
                source:"/sim/:path*",
                headers : [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }, 
                { key: "Cross-Origin-Opener-Policy", value: "same-origin"},
                {key: "Cross-Origin-Embedder-Policy", value: "require-corp"}
                ]
            }
        ]
    }
};

export default nextConfig;