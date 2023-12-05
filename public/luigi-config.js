Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            pathSegment: 'tenera',
            label: 'Tenera',
            icon: 'cloud',
            viewUrl: 'http://localhost:3000',
          },
          {
            pathSegment: 'local-microfrontend',
            label: 'Local microfrontend',
            icon: 'cloud',
            viewUrl: '/sampleapp.html#/local-microfrontend',
          },
        ],
      },
    ],
  },
  communication: {
    customMessagesListeners: {
      'microfrontend-login': (data) => {
        console.log('data', data)
      },
    },
  },
  settings: {
    header: {
      title: 'Luigi React App',
      logo: '/logo.png',
    },
    responsiveNavigation: 'simpleMobileOnly',
  },
})
