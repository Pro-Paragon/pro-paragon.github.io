export const PAGE_METADATA = [
  {
    url: '/blockcade/privacy/',
    title: 'Blockcade Privacy Policy',
    description: 'How Blockcade, a puzzle game by Pro Paragon Software LLC, handles your information.',
  },
  {
    url: '/blockcade/',
    title: 'Blockcade - Pro Paragon Software',
    description: 'Blockcade, a sliding block puzzle game for Android and iOS by Pro Paragon Software LLC.',
  },
  {
    url: '/support/',
    title: 'Support - Pro Paragon Software',
    description: 'Get help with Blockcade from Pro Paragon Software LLC.',
  },
  {
    url: '/about/',
    title: 'About - Pro Paragon Software',
    description: 'Pro Paragon Software LLC is an independent game studio, makers of Blockcade.',
  },
  {
    url: '/',
    title: 'Pro Paragon Software',
    description: 'Pro Paragon Software LLC is an independent game studio, makers of Blockcade.',
  },
];

const NOT_FOUND_METADATA = {
  title: 'Page not found - Pro Paragon Software',
  description: 'The page you are looking for could not be found.',
};

export function getPageMetadata(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return PAGE_METADATA.find(({ url }) => (url.replace(/\/+$/, '') || '/') === path)
    ?? NOT_FOUND_METADATA;
}
