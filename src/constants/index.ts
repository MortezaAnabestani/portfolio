import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'دربارۀ من',
  },
  {
    id: 'work',
    title: 'مهارت‌ها',
  },
  {
    id: 'contact',
    title: 'راه ارتباطی',
  },
];

const services: TService[] = [
  {
    title: 'توسعه‌دهندۀ وب',
    icon: web,
  },
  {
    title: 'برنامه‌نویس ری‌اکت',
    icon: mobile,
  },
  {
    title: 'برنامه‌نویس MERN-Stack',
    icon: backend,
  },
  {
    title: 'داستان‌پرداز تعاملی',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'آغاز راه',
    companyName: 'یادگیری طراحی سایت',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'سال ۱۴۰۰',
    points: [
      'شروع یادگیری برنامه‌نویسی',
      'آغاز دورۀ دکتری در زمینۀ ادبیات الکترونیک',
      'یادگیری زبان برنامه‌نویسی C',
      'تسلط بر HTML و CSS',
      'تسلط بر اصول طراحی‌های واکنش‌پذیر (Responsive Design)',
    ],
  },
  {
    title: 'جاوااسکریپت و ری‌اکت',
    companyName: 'افزایش  مهارت‌های توسعۀ فرانت‌اند',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'سال ۱۴۰۱',
    points: [
      'یادگیری پیشرفته جاوااسکریپت',
      'تسلط بر گیت و گیت‌هاب',
      'یادگیری فریم‌ورک قدرتمند ری‌اکت',
      'یادگیری مقدماتی نود جی اس',
      'تسلط بر بسته‌های npm و vite',
    ],
  },
  {
    title: 'مرن‌استک‌شدن',
    companyName: 'افزایش مهارت‌های توسعۀ بک‌اند',
    icon: shopify,
    iconBg: '#383E56',
    date: 'سال ۱۴۰۲',
    points: [
      'یادگیری بیش‌تر نود جی اس',
      'یادگیری مونگو دی بی',
      'تسلط بر اکسپرس',
      'تسلط بیش‌تر بر ری‌اکت، ریداکس و react-routing',
      'انجام پروژ‌ه‌های فول‌استکی',
    ],
  },
  {
    title: 'داستان‌پردازی تعاملی',
    companyName: 'افزایش مهارت‌های داستان‌پردازی واکنش‌محور در وب',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'سال ۱۴۰۳',
    points: [
      'انجام کارهای پژوهشی در زمینه داستان‌گویی تعاملی',
      'توسعۀ سایت‌های تعاملی',
      'ورود به مقوله مهندسی پرامپت و استفاده از مدل‌های زبانی هوش مصنوعی',
      'انجام پروژه‌های اختصاصی',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'مرکز داده‌کاوی شناخت',
    description:
      'پروژۀ فول‌استک با استفاده از مونگودی‌بی، اکسپرس، نودجی‌اس و ری‌اکت. بهینه‌سازی سئو و استفاده از تگ‌های محتوایی رعایت شده است.',
    tags: [
      {
        name: 'مونگودی‌بی',
        color: 'blue-text-gradient',
      },
      {
        name: 'نودجی‌اس',
        color: 'green-text-gradient',
      },
      {
        name: 'اکسپرس',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'قهوۀ پالیگان',
    description:
      'توسعه فرانت‌اند با استفاده از html، css, .بوت استرپ و جاوااسکریپت. واکنش‌گرا و سازگار با نمایشگرهای مختلف.',
    tags: [
      {
        name: 'واکنش‌گرایی',
        color: 'blue-text-gradient',
      },
      {
        name: 'جاوااسکریپت',
        color: 'green-text-gradient',
      },
      {
        name: 'بوت‌استرپ',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'داشبورد حرفه‌ای',
    description:
      'توسعۀ فرانت‌اند داشبورد حرفه‌ای و با امکانات مختلف با استفاده از ری‌اکت و کتابخانه‌های مصورسازی داده و اطلاعات',
    tags: [
      {
        name: 'ری‌اکت',
        color: 'blue-text-gradient',
      },
      {
        name: 'تیلویند',
        color: 'green-text-gradient',
      },
      {
        name: 'ریداکس',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
