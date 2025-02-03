import { ru } from 'vuetify/locale'

export default {
  $vuetify: {
    ...ru,
    dataIterator: {
      rowsPerPageText: 'Элементов на странице:',
      pageText: '{0}-{1} из {2}',
    },
  },
  test: {
    hello: 'Привет!',
    welcome: 'Добро пожаловать, {name}!'
  },
  navigation: {
    home: 'Главная',
    about: 'О нас',
    contacts: 'Контакты',
    services: 'Услуги'
  }
}
