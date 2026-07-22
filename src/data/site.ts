// Main editing hub. Replace entries marked `placeholder: true` as real details become available.
export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Notes', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'SEApodEErman',
  alias: 'Mahiru Shiina in osu!',
  intro: 'osu! beatmapper, hitsounder, custom mapping QA for several tournaments, and a custom keyboard enthusiast.',
  portrait: '/assets/profile/main-avatar.webp',
};

export const socialLinks = [
  { label: 'GitHub', handle: '@SEApodEErman', href: 'https://github.com/SEApodEErman', placeholder: false },
  { label: 'osu! profile', handle: 'Mahiru Shiina', href: 'https://osu.ppy.sh/users/13866023', placeholder: false },
  { label: 'Email', handle: 'seapodeerman.business@gmail.com', href: 'mailto:seapodeerman.business@gmail.com', placeholder: false },
  { label: 'Twitter', handle: '@seapodeerman', href: 'https://twitter.com/seapodeerman', placeholder: false },
  { label: 'Discord', handle: 'seapodeerman', href: 'https://discord.com/users/397729598391189505', placeholder: false },
];

export const projects = [
  {
    title: 'Kotone — Kagome',
    description: 'A personal favourite of mine, really happy with the end result due to how the song stuck with me.',
    category: 'Beatmap showcase',
    image: '/assets/projects/kagome-cover.webp',
    href: 'https://osu.ppy.sh/beatmapsets/2199809#osu/4672887',
    tags: ['osu!', 'mapping', 'hitsounds'],
    placeholder: false,
  },
  {
    title: 'takehirotei — Haiboku no Altra Vita',
    description: 'I went all-out on hitsounds, choosing samples to mirror the song’s multi-genre shifts. I also solo-mapped the Hard and contributed sections to the Easy, Expert, and top difficulty.',
    category: 'Hitsound showcase',
    image: '/assets/projects/haiboku-no-altra-vita-cover.webp',
    href: 'https://osu.ppy.sh/beatmapsets/2412331#osu/5297696',
    tags: ['hitsounds', 'audio', 'mapping'],
    placeholder: false,
  },
  {
    title: 'Kawayo by The Flying Penguin',
    description: 'A 65% CNC aluminum board I won at MYMK 2025, with a brass Toblerone rear weight. Built with Kailh BCP switches, GMK Jamon clone keycaps, Typeplus stabilizers, and a custom-cut POM plate using PCBSnap mounting.',
    category: 'Keyboard showcase',
    image: '/assets/projects/kawayo.webp',
    tags: ['65%', 'Kailh BCP', 'POM plate'],
    placeholder: false,
  },
  {
    title: 'osu! ReqTrac',
    description: 'A side project I\'m currently working on to track and manage osu! mapping related requests. Currently released but in early stages, with more features planned for the future.',
    category: 'application showcase',
    image: '/assets/projects/reqtrac-logo.webp',
    href: 'https://github.com/SEApodEErman/osu-ReqTrac',
    tags: ['osu!', 'requests', 'tracking'],
    placeholder: false,
  },
];

export const hobbies = [
  { number: '01', title: 'Beatmapping', label: 'Rhythm / structure', description: 'Shaping music into playable patterns with strong emphasis on my idealogy: The more you f*ck around, the more you are going to find out.', symbol: '●' },
  { number: '02', title: 'Hitsounds', label: 'Audio / texture', description: 'Giving a map another layer of expression through carefully placed sounds while enjoying the experimentation with samples.', symbol: '◒' },
  { number: '03', title: 'Custom keyboards', label: 'Hardware / feel', description: 'Exploring the tiny decisions that change how a board looks, sounds, and feels. From layout to the final keypress.', symbol: '⌨' },
  { number: '04', title: 'Anime & creative things', label: 'Inspiration / mood', description: 'A soft spot for anime-inspired aesthetics and the creative details that make digital spaces feel personal.', symbol: '✦' },
];
