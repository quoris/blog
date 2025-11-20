import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '.'),
  },
  images: {
    remotePatterns: [
      new URL('https://i.pravatar.cc/**?img=1'),
      new URL('https://i.pravatar.cc/**?img=2'),
      new URL('https://i.pravatar.cc/**?img=3'),
      new URL('https://i.pravatar.cc/**?img=4'),
      new URL('https://i.pravatar.cc/**?img=5'),
      new URL('https://i.pravatar.cc/**?img=6'),
      new URL('https://picsum.photos/**/**?random=1'),
      new URL('https://picsum.photos/**/**?random=2'),
      new URL('https://picsum.photos/**/**?random=3'),
      new URL('https://picsum.photos/**/**?random=4'),
      new URL('https://picsum.photos/**/**?random=5'),
      new URL('https://picsum.photos/**/**?random=6'),
    ],
  },
}

export default nextConfig
