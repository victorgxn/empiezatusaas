/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Asegurar que no hay trailing slashes que causen redirecciones
  trailingSlash: false,
  // Skip trailing slash redirect
  skipTrailingSlashRedirect: false,
}

export default nextConfig
