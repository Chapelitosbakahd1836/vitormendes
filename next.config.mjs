import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Existe um package-lock.json na pasta do usuário, acima deste projeto.
  // Sem isto o Next elege aquela pasta como raiz do workspace.
  outputFileTracingRoot: projectRoot,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
