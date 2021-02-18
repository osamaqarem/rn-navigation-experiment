import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';

enableScreens();

type RootStackParamsList = {
  Photo: {depth: number};
};

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

interface PhotoProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Photo'>;
  route: RouteProp<RootStackParamsList, 'Photo'>;
}
const Photo: React.FC<PhotoProps> = ({navigation, route}) => {
  const back = () => navigation.goBack();

  const next = () => navigation.push('Photo', {depth: route.params.depth + 1});

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={back}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Stack depth: {route.params.depth}</Text>
      <Image
        resizeMode="contain"
        source={{
          uri: `https://source.unsplash.com/random/60${route.params.depth}x60${route.params.depth}`,
        }}
        style={styles.mainImage}
      />
      <TouchableOpacity style={styles.btn} onPress={next}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'pink',
    width: 100,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  mainImage: {
    marginVertical: 10,
    width: 400,
    height: 400,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true, stackPresentation: 'push'}}>
        <Stack.Screen
          name="Photo"
          component={Photo}
          initialParams={{
            depth: 0,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
