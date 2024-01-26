import CaseStudy from '@/components/pages/case-study';

const BANNER_CONTENT = {
  name: 'The Catalyst',
  description: `Rethinking, redesigning and improving Catalyst, an app 
  that helps small businesses with managing their supply chains.`,
  link: 'www.catalyst.org',
  industry: 'finance',
  timeline: 'January, 2023 - March, 2024',
  client: 'GoGoStrategy',
  services: ['Web Design', 'Web Development', 'Wordpress'],
  image: 'https://assets.awwwards.com/awards/sites_of_the_day/2024/01/ferrari-movie-1.jpg',
};

const BRIEF_CONTENT = [
  `In spring 2019, we partnered with the British Red Cross on their latest campaign - OneKindThing. We were tasked
with creating the digital platform which was part of a nationwide campaign, showing people that even the simplest
things can change the life of someone in crisis. The site had to engage and encourage users, with clear call to
actions and simple user journeys, for them to take the next step in offering their help for others.`,
  `One of the design challenges for the platform, was to create something that stood out from their previous
campaigns, but also stayed within their (pretty epic) brand guidelines. One of the first things we did was to
reverse their main site's colour scheme, with light text on darker backgrounds to give it a fresh distinctive
feel. We then created an animated intro which kept consistency with the social campaign, a silky-smooth carousel
displaying featured OneKindThings, and a modern layout for the rest of the content, accessible through fluid
transitions between the pages.`,
];

const APPROACH_CONTENT = [
  `From the development side, a lot of planning had to go into the technical features. These included: a) A hybrid
server-side and single page application. Each page has its own URL for tracking and SEO purposes but near
instant navigation between pages; b) The clicks on call to actions are logged and automatically update the 'Kind
Things So Far' counter on the homepage; c) The CMS allows the creation of unique referral codes which can be
used to customise the content a user will see on the home page. This can be used to tailor content to a specific
campaign or audience.`,
];

const SUMMARY_CONTENT = [
  `From the development side, a lot of planning had to go into the technical features. These included: a) A hybrid
server-side and single page application. Each page has its own URL for tracking and SEO purposes but near instant
navigation between pages.`,
];

const GALLERY_CONTENT = [
  'https://www.datocms-assets.com/49149/1705424785-1-cover.jpg?fm=webp',
  'https://assets.awwwards.com/awards/sites_of_the_day/2024/01/ferrari-movie-4.jpg',
  'https://www.datocms-assets.com/49149/1705487840-9-static.png?fm=webp',
  'https://www.datocms-assets.com/49149/1705487495-group-7648.png?dpr=0.75&fm=webp',
  'https://assets.awwwards.com/awards/sites_of_the_day/2024/01/ferrari-movie-1.jpg',
  'https://assets.awwwards.com/awards/sites_of_the_day/2024/01/ferrari-movie-2.jpg',
];

const EXCLUDE = 'Ferrari';

const CONTENT = {
  banner: BANNER_CONTENT,
  text: {
    brief: BRIEF_CONTENT,
    approach: APPROACH_CONTENT,
    summary: SUMMARY_CONTENT,
  },
  gallery: GALLERY_CONTENT,
  exclude: EXCLUDE,
};

/**
 * Sample case study page for the website promoting the Ferrari movie.
 */
const FerrariPage = () => <CaseStudy {...CONTENT} />;

export default FerrariPage;
