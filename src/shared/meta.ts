export const Links = {
  githubAccountLink: "https://github.com/whosramoss",
  githubProjectLink: "https://github.com/whosramoss/coffee-boilerplate",
  fakeCoffeeApiLink: "https://fake-coffee-api.vercel.app/",
};

export const PARALLAX_IMAGE_CLASS = "parallax-image-ukiyo";
export const META_NAME = "Coffee Boilerplate";
export const META_DESCRIPTION = `NextJs boilerplate to creative projects and coffee lovers`;
export const META_THUMBNAIL =
  "https://github.com/whosramoss/coffee-boilerplate/blob/main/docs/coffee-boilerplate-thumbnail.png";
export const META_URL = "https://www.coffee-boilerplate.vercel.com/";
export const META_SITENAME = "www.coffee-boilerplate.vercel.com";
export const META_BASE = "http://localhost:3000";
export const META_LOCALE = "pt-BR";

export const openDefaultMetada = {
  default: {
    title: META_NAME,
    applicationName: META_NAME,
    description: META_DESCRIPTION,
    generator: "Next.js",
    category: "food",
    keywords: [
      "Café expresso",
      "Cappuccino",
      "Latte",
      "Macchiato",
      "Mocha",
      "Frappuccino",
      "Cold brew",
      "Café gelado",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  graph: {
    metadataBase: new URL(META_BASE),
    openGraph: {
      title: META_NAME,
      description: META_DESCRIPTION,
      url: META_URL,
      siteName: META_SITENAME,
      locale: META_LOCALE,
      type: "website",
      images: [
        {
          url: META_THUMBNAIL,
          width: 1200,
          height: 630,
          alt: META_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: META_NAME,
      description: META_DESCRIPTION,
      images: META_THUMBNAIL,
    },
  },
};
