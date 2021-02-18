import {Navigation} from 'react-native-navigation';
import {Photo} from './App';

Navigation.registerComponent('photo', () => Photo);

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'photo',
              passProps: {
                depth: 0,
              },
            },
          },
        ],
      },
    },
  });
});
