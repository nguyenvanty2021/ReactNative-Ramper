import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../App';
import React from 'react';
import {RamperScreen} from '@ramper/react-native-core';
import {useNavigation} from '@react-navigation/native';
const HomePage = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{flex: 1}}>
      <RamperScreen
        providers={[
          {
            name: 'google',
          },
          {
            name: 'facebook',
          },
          {
            name: 'twitter',
          },
          {
            name: 'apple',
          },
        ]}
        theme="light"
        onSuccess={user => {
          //handle user
          console.log(user);
        }}
        onFailure={error => {
          // handle error
          console.log(error);
        }}
        onClose={() => {}}
        // logo={require('mylogo') | {uri: 'mylogourl'}}
        browserProps={{
          modalEnabled: true,
          animated: true,
          readerMode: true,
          enableBarCollapsing: true,
          ephemeralWebSession: true,
        }}
      />

      <TouchableOpacity style={styles.center}>
        <View style={styles.border}>
          <Text
            onPress={() => navigation.navigate('Account')}
            style={styles.text}>
            Continue by email
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HomePage;
