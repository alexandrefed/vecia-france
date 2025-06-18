export type Locale = 'fr-fr' | 'fr-ch' | 'en-ae';

export interface Translation {
  nav: {
    home: string;
    solutions: string;
    industries: string;
    process: string;
    resources: string;
    about: string;
    blog: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheading: string;
    cta_primary: string;
    cta_secondary: string;
    cta_link?: string;
  };
  tagline: string;
  solutions: {
    title: string;
    dataOps: {
      title: string;
      description: string;
    };
    marketing: {
      title: string;
      description: string;
    };
    trading: {
      title: string;
      description: string;
    };
    custom: {
      title: string;
      description: string;
    };
  };
  industries: {
    title: string;
    retail: {
      title: string;
      description: string;
    };
    sme: {
      title: string;
      description: string;
    };
    trading: {
      title: string;
      description: string;
    };
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      discovery: {
        title: string;
        description: string;
      };
      sprint: {
        title: string;
        description: string;
      };
      measure: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
    gdpr: string;
  };
}

export type TranslationKey = keyof Translation;