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
  image:
    'https://cdn.dribbble.com/userupload/6482165/file/original-2e3823ab88342ba9a010b49dfd213115.png?resize=1504x1128',
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
  'https://cdn.dribbble.com/userupload/6482169/file/original-94ed2a73b1ad1da7a846310cfde3bf35.png?resize=1504x1128&vertical=center',
  'https://cdn.dribbble.com/userupload/6482165/file/original-2e3823ab88342ba9a010b49dfd213115.png?resize=1504x1128',
  'https://cdn.dribbble.com/userupload/5948249/file/original-4240f1daf8e18740adcacd5ca1fcd9c4.png?resize=1504x1128&vertical=center',
  'https://cdn.dribbble.com/userupload/6482167/file/original-2c03d787ebf988404548e8e43a823143.png?resize=1504x1128&vertical=center',
  'https://cdn.dribbble.com/userupload/6482166/file/original-f8837b8e9997503ec743148dab153369.png?resize=1504x1128&vertical=center',
  'https://cdn.dribbble.com/userupload/6482168/file/original-a56de34024a2fd2061d788cff6e3154e.png?resize=1504x1128&vertical=center',
];

const EXCLUDE = 'Catalyst';

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
 * Sample case study page for the website promoting the Catalyst App.
 */
const CatalystPage = () => <CaseStudy {...CONTENT} />;

export default CatalystPage;
