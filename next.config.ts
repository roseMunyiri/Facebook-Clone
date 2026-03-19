/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  reactCompiler: {
    target: '18',                    // Tells compiler you're on React 18
    runtimeModule: 'react-compiler-runtime',  // Points to the package you just installed
  },
  
  turbopack: {
    resolveAlias: {
      'react/compiler-runtime': 'react-compiler-runtime',
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;