/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: false, // Evita ignorar ESLint durante compilaciones (opcional)
        rules: {
          '@next/next/inline-script-id': 'off', // Desactiva la regla específica
        },
    },
};

export default nextConfig;
