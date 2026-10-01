import mainAvatar from '../assets/profile/main-avatar.jpg';
import heroArtwork from '../assets/hero/mahiru.png';

// Shared identity and navigation. Projects and builds live in Content Collections.
export const navigation = [
  { label: 'osu!', href: '/osu/' },
  { label: 'Keyboards', href: '/keyboards/' },
  { label: 'Notes & code', href: '/blog/' },
  { label: 'About', href: '/about/' },
];

export const profile = {
  name: 'SEApodEErman',
  alias: 'Mahiru Shiina in osu!',
  intro: 'Beatmaps, hitsounds, custom keyboards, software, and notes on whatever I’m making next.',
  portrait: mainAvatar,
  hero: heroArtwork,
};

export const socialLinks = [
  { label: 'GitHub', handle: '@SEApodEErman', href: 'https://github.com/SEApodEErman', placeholder: false },
  { label: 'osu! profile', handle: 'Mahiru Shiina', href: 'https://osu.ppy.sh/users/13866023', placeholder: false },
  { label: 'Email', handle: 'seapodeerman.business@gmail.com', href: 'mailto:seapodeerman.business@gmail.com', placeholder: false },
  { label: 'Twitter', handle: '@seapodeerman', href: 'https://twitter.com/seapodeerman', placeholder: false },
  { label: 'Discord', handle: 'seapodeerman', href: 'https://discord.com/users/397729598391189505', placeholder: false },
  { label: 'Ko-fi', handle: 'Support my work', href: 'https://ko-fi.com/seapodeerman', placeholder: false },
];

export const contributions: { name: string; years: string; roles: string[] }[] = [
  { name: 'osu! Malaysia Tournament', years: '2023–2025', roles: ['Custom Mapping'] },
  { name: 'osu! Malaysia Tournament Kecemasan', years: '2026', roles: ['Custom Mapping', 'Custom Mapping QA'] },
  { name: 'Corsace Closed', years: '2023', roles: ['Custom Mapping'] },
  { name: 'Malaysian 5 Digit Amateur Cup', years: '2023', roles: ['Custom Mapping'] },
  { name: 'Mekakucity Showdown', years: '2024', roles: ['Custom Mapping'] },
  { name: 'Maimai-Chuni Showdown', years: '2026', roles: ['Custom Mapping'] },
];

export const osuStats = [
  { value: '8', label: 'Ranked beatmaps' },
  { value: '10', label: 'Ranked guest difficulties' },
  { value: '71', label: 'Total maps' },
  { value: '150+', label: 'Hitsounded maps' },
  { value: '60+', label: 'Ranked hitsounds' },
];

export const osuSpotlight = {
  projectId: 'haiboku-no-altra-vita',
  labels: ['Most played', 'Most favourited'],
};
