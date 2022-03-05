import Flags from 'country-flag-icons/react/3x2'; 

interface AuthorType {
  site:        string;
  role:        string;
  name:        string;
  avatar:      string;
  country:     string;
  city:        string;
  description: string;
  countryCode: keyof typeof Flags;
}

const Author: AuthorType = {
  site:         '<johnmusa.dev />',
  name:         'John Musa',
  role:         'JavaScript Engineer',
  avatar:       'https://avatars.githubusercontent.com/u/37968147?v=4',
  city:         'Edo',
  country:      'Nigeria',
  countryCode:  'NG', // https://www.npmjs.com/package/country-flag-icons
  description:  'JavaScript Engineer, PHP Expert, WordPress Enthusiast',
};

export default Author;