import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';

interface PhotoProps extends NavigationComponentProps {
  depth: number;
}
export const Photo: React.FC<PhotoProps> = ({componentId, depth}) => {
  const back = () => Navigation.pop(componentId);
  const next = () =>
    Navigation.push(componentId, {
      component: {
        name: 'photo',
        passProps: {
          depth: depth + 1,
        },
      },
    });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={back}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Stack depth: {depth}</Text>
      <Image
        resizeMode="contain"
        source={{
          uri: `https://source.unsplash.com/random/60${depth}x60${depth}`,
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
