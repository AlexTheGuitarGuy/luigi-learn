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
            pathSegment: 'vite',
            label: 'Vite App',
            icon: 'cloud',
            viewUrl: 'http://localhost:3002',
            context: {
              user: Luigi.getGlobalContext().user,
            },
          },
        ],
      },
    ],
  },
  communication: {
    customMessagesListeners: {
      'profile.me': (data) => {
        Luigi.setGlobalContext({
          user: data,
        })

        Luigi.ux().showAlert({
          text: 'User profile set',
          type: 'info',
        })
      },
    },
  },
  settings: {
    header: {
      title: 'Luigi React App',
      logo: '/logo.png',
    },
    responsiveNavigation: 'simpleMobileOnly',
    thirdPartyCookieCheck: {
      thirdPartyCookieErrorHandling: () => {
        const alert = {
          text: 'Third Party Cookies are not enabled. Please check your browser settings.',
          type: 'warning',
        }
        Luigi.ux().showAlert(alert)
      },
    },
  },
})
