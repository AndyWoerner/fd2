export const state = () => ({
  team: [
    {
      id: 1,
      name: 'Nikolas Stein',
      role: 'Creative Director',
      image: 'team_niko.webp',
      socialMedia: [
        {
          type: 'INSTAGRAM',
          link: 'http://www.instagram.com'
        }
      ]
    },
    {
      id: 2,
      name: 'Torben Ludwig',
      role: 'CEO',
      image: 'team_torben.webp',
      socialMedia: [
        {
          type: 'FACEBOOK',
          link: 'http://www.facebook.com'
        },
        {
          type: 'TWITTER',
          link: 'http://www.twitter.com'
        }
      ]
    },
    {
      id: 3,
      name: 'Chris Figge',
      role: 'Technical Director',
      image: 'team_figge.webp',
      socialMedia: [
        {
          type: 'FACEBOOK',
          link: 'http://www.facebook.com'
        },
        {
          type: 'TWITTER',
          link: 'http://www.twitter.com'
        },
        {
          type: 'INSTAGRAM',
          link: 'http://www.instagram.com'
        }
      ]
    },
    {
      id: 4,
      name: 'Andy Wörner',
      role: 'Frontend Developer',
      image: 'team_niko.webp',
      socialMedia: [
        {
          type: 'FACEBOOK',
          link: 'http://www.facebook.com'
        },
        {
          type: 'TWITTER',
          link: 'http://www.twitter.com'
        },
        {
          type: 'INSTAGRAM',
          link: 'http://www.instagram.com'
        }
      ]
    },
    {
      id: 5,
      name: 'Sonja Buchhop',
      role: 'Social Media',
      image: 'team_sonja.webp',
      socialMedia: [
        {
          type: 'FACEBOOK',
          link: 'http://www.facebook.com'
        },
        {
          type: 'TWITTER',
          link: 'http://www.twitter.com'
        },
        {
          type: 'INSTAGRAM',
          link: 'http://www.instagram.com'
        }
      ]
    },
    {
      id: 6,
      name: 'Janina Fuhrwerk',
      role: 'Controlling',
      image: 'team_janina.webp',
      socialMedia: [
        {
          type: 'FACEBOOK',
          link: 'http://www.facebook.com'
        },
        {
          type: 'TWITTER',
          link: 'http://www.twitter.com'
        }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Tonie APP',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      date: 2021,
      services: [
        'App-Development', 'Design'
      ],
      client: 'Boxine GmbH',
      link: 'http://www.tonies.de',
      images: [
        {
          file: 'proj_tonies.webp',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
          file: 'proj_tonies.webp',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
      ]
    },
    {
      id: 2,
      title: 'Kleine Krone',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      date: 2021,
      services: [
        'App-Development', 'Design', 'Backend'
      ],
      client: 'Schmidt-Gruppe',
      link: 'http://www.schmidt-gruppe.de',
      images: [
        {
          file: 'proj_schmidt.webp',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
      ]
    },
    {
      id: 3,
      title: 'UBISOFT',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      date: 2021,
      services: [
        'Design', 'Backend'
      ],
      client: 'UBISOFT',
      link: 'http://www.ubisoft.com',
      images: [
        {
          file: 'proj_ubisoft.webp',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
      ]
    },
    {
      id: 4,
      title: 'Drift',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      date: 2021,
      services: [
        'Backend', 'Frontend', 'Design'
      ],
      client: 'Drift',
      link: 'http://www.drift.de',
      images: [
        {
          file: 'proj_drift.webp',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
      ]
    },
    {
      id: 5,
      title: 'Kurts Box',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      date: 2021,
      services: [
        'Prototyp'
      ],
      client: 'Kurt König',
      link: 'http://www.kurt-koenig.de',
      images: [
        {
          file: 'proj_kurts.webp',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
      ]
    }
  ],
  clients: [
    {
      id: 1,
      client: 'Big Point',
      link: 'http://www.bigpoint.com',
      logo: 'client_bigpoint.png'
    },
    {
      id: 2,
      client: 'BlueByte Ubisoft',
      link: 'http://www.bluebyte.com',
      logo: 'client_blue.png'
    },
    {
      id: 3,
      client: 'Ciberdime',
      link: 'http://www.ciberdime.com',
      logo: 'client_ciberdime.png'
    },
    {
      id: 4,
      client: 'DeltaRadio',
      link: 'http://www.deltaradio.com',
      logo: 'client_deltaradio.png'
    },
    {
      id: 5,
      client: 'Dieteg',
      link: 'http://www.dieteg.com',
      logo: 'client_dieteg.png'
    },
    {
      id: 6,
      client: 'FUNK',
      link: 'http://www.funk.com',
      logo: 'client_funk.png'
    },
    {
      id: 7,
      client: 'Kliemannsland',
      link: 'http://www.kliemannsland.com',
      logo: 'client_kliemannsland.png'
    },
    {
      id: 8,
      client: 'Kurt König',
      link: 'http://www.kk.com',
      logo: 'client_kurt.png'
    },
    {
      id: 9,
      client: 'Massive',
      link: 'http://www.massive.com',
      logo: 'client_massive.png'
    },
    {
      id: 10,
      client: 'Nukklear',
      link: 'http://www.nukklear.com',
      logo: 'client_nukklear.png'
    },
    {
      id: 11,
      client: 'Penny',
      link: 'http://www.penny.com',
      logo: 'client_penny.png'
    },
    {
      id: 12,
      client: 'RSH',
      link: 'http://www.rsh.com',
      logo: 'client_rsh.png'
    }
  ],
  services: [
    {
      id: 1,
      title: 'WEB & APP DEVELOPMENT  🔥',
      description: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>',
      images: [
        {
          file: 'proj_tonies.jpg',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
          file: 'proj_schmidt.jpg',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
      ]
    },
    {
      id: 2,
      title: 'UI/UX DESIGN  🦄',
      description: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>',
      images: [
        {
          file: 'proj_tonies.jpg',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
          file: 'proj_schmidt.jpg',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
      ]
    },
    {
      id: 3,
      title: 'ENGINEERING  🥑',
      description: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>',
      images: [
        {
          file: 'proj_tonies.jpg',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
          file: 'proj_schmidt.jpg',
          alt: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
      ]
    }
  ],
  stats: {
    experience: 32,
    happyClients: 98,
    projectsCompleted: 112,
    locations: 4
  }
})

export const getters = {
  getProjectByID: state => (id) => {
    // eslint-disable-next-line eqeqeq
    return state.projects.find(project => project.id == id)
  },
  getServiceByID: state => (id) => {
    // eslint-disable-next-line eqeqeq
    return state.services.find(service => service.id == id)
  }
}
