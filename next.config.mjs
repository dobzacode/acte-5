const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'placehold.co' }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },

  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/agence-evenementielle-strasbourg/projets',
        permanent: true
      },
      {
        source: '/project-category/:path*',
        destination: '/agence-evenementielle-strasbourg/projets',
        permanent: true
      },
      {
        source: '/projet',
        destination: '/agence-evenementielle-strasbourg/projets',
        permanent: true
      },
      {
        source: '/projet/:slug',
        destination: '/agence-evenementielle-strasbourg/projets',
        permanent: true
      },
      {
        source: '/agence-evenementielle-strasbourg/convention-entreprise-strasbourg',
        destination: '/agence-evenementielle-strasbourg/services/convention-entreprise-strasbourg',
        permanent: true
      },
      {
        source: '/agence-evenementielle-strasbourg/inauguration-entreprise',
        destination: '/agence-evenementielle-strasbourg/services/inauguration-entreprise',
        permanent: true
      },
      {
        source: '/agence-evenementielle-strasbourg/organisateur-anniversaire',
        destination: '/agence-evenementielle-strasbourg/services/organisateur-anniversaire',
        permanent: true
      },
      {
        source: '/agence-evenementielle-strasbourg/ceremonie-remise-medailles',
        destination: '/agence-evenementielle-strasbourg/services/ceremonie-remise-medailles',
        permanent: true
      },
      {
        source: '/agence-evenementielle-strasbourg/ceremonie-voeux',
        destination: '/agence-evenementielle-strasbourg/services/ceremonie-voeux',
        permanent: true
      },
      {
        source: '/agence-evenementielle-strasbourg/portes-ouvertes',
        destination: '/agence-evenementielle-strasbourg/services/portes-ouvertes',
        permanent: true
      },
      {
        source: '/agence-evenementielle-strasbourg/soiree-gala',
        destination: '/agence-evenementielle-strasbourg/services/soiree-gala',
        permanent: true
      },
      {
        source: '/agence-evenementielle-strasbourg/spectacle-entreprise',
        destination: '/agence-evenementielle-strasbourg/services/spectacle-entreprise',
        permanent: true
      },
      {
        source: '/agence-evenementielle-strasbourg/team-building',
        destination: '/agence-evenementielle-strasbourg/services/team-building',
        permanent: true
      },
      {
        source: '/blog',
        destination: '/agence-evenementielle-strasbourg/blog',
        permanent: true
      },
      {
        source: '/contact',
        destination: '/agence-evenementielle-strasbourg/contact',
        permanent: true
      },
      {
        source: '/agence/:path*',
        destination: '/agence-evenementielle-strasbourg/a-propos',
        permanent: true
      },
      {
        source: '/category/agence',
        destination: '/agence-evenementielle-strasbourg',
        permanent: true
      },

      {
        source: '/agence-communication-strasbourg',
        destination: '/agence-evenementielle-strasbourg',
        permanent: true
      },
      {
        source: '/agence-communication-strasbourg/:path*',
        destination: '/agence-evenementielle-strasbourg/services/:path*',
        permanent: true
      },
      {
        source: '/reservations',
        destination: '/spectacles-strasbourg/a-laffiche',
        permanent: true
      },
      {
        source: '/spectacles/:path*',
        destination: '/spectacles-strasbourg/a-laffiche',
        permanent: true
      },
      {
        source: '/category/spectacles',
        destination: '/spectacles-strasbourg/a-laffiche',
        permanent: true
      },
      {
        source: '/spectacles-strasbourg/affiche',
        destination: '/spectacles-strasbourg/a-laffiche',
        permanent: true
      },
      {
        source: '/calendrier',
        destination: '/spectacles-strasbourg/calendrier',
        permanent: true
      },
      {
        source: '/event-directory/',
        destination: '/spectacles-strasbourg/calendrier',
        permanent: true
      },
      {
        source: '/reservations',
        destination: '/spectacles-strasbourg/a-laffiche',
        permanent: true
      },
      {
        source: '/events/:path*',
        destination: '/spectacles-strasbourg/a-laffiche',
        permanent: true
      },
      {
        source: '/event-location',
        destination: '/spectacles-strasbourg/a-laffiche',
        permanent: true
      },
      {
        source: '/event-location/:path*',
        destination: '/spectacles-strasbourg/a-laffiche',
        permanent: true
      }
    ];
  },

  experimental: {
    taint: true,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js'
        }
      }
    }
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack']
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  }
};
export default nextConfig;
