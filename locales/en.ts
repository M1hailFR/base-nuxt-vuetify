import { en } from 'vuetify/locale'

export default {
  $vuetify: {
    ...en,
    dataIterator: {
      rowsPerPageText: 'Items per page:',
      pageText: '{0}-{1} of {2}',
    },
  },
  test: {
    hello: 'Hello!',
    welcome: 'Welcome, {name}!'
  },
  navigation: {
    home: 'Home',
    about: 'About',
    contacts: 'Contacts',
    services: 'Services'
  }
}
