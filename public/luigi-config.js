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
            loadingIndicator: {
              enabled: false,
            },
          },
        ],
      },
    ],
  },
  settings: {
    header: {
      title: 'Luigi React App',
      logo: '/logo.png',
    },
    responsiveNavigation: 'simpleMobileOnly',
  },
})
