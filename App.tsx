/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import {Auth} from '@ramper/react-native-core';
// import {WalletView} from '@ramper/react-native-core';
// import {EthDataProvider} from '@ramper/react-native-evm';
import {Ramper} from '@ramper/react-native-core';
import {StyleSheet} from 'react-native';
import Account from './screens/Account/index';
// import {Auth} from '@ramper/react-native-core';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './screens/HomePage';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;
Ramper.configure({
  appId: 'pcsnabqhiu',
  locale: 'en',
  chainName: 'ethereum',
});
// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  // const handleLoginSocialByRamper = async () => {
  //   try {
  //     const user = await Auth.signin(
  //       'apple',
  //       // browserProps, //optional
  //     );
  //     console.log(user);
  //     // handle response
  //   } catch (error) {
  //     // handle error
  //   }
  // };
  // const handleSignout = async () => {
  //   try {
  //     await Auth.signOut();
  //     // browserProps //optional
  //     // handle signout
  //   } catch (error) {
  //     // handle error
  //   }
  // };
  // const handleGetUser = async () => {
  //   try {
  //     const user = await Auth.getUser();
  //     console.log(user);
  //     // handle user
  //   } catch (error) {
  //     // handle error
  //   }
  // };
  // useEffect(() => {
  //   //handleLoginSocialByRamper();
  //   handleGetUser();
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false, // hidden header
          }}
          name="HomePage"
          component={HomePage}
        />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={backgroundStyle}>
    //   <Text>123456789113331</Text>
    //   <Text onPress={handleSignout}>Sign out</Text>
    //   {/* <WalletView
    //     dataProviders={[{name: 'ethereum', dataProvider: EthDataProvider}]}
    //     onCLose={() => {}} // this method will be called when the user clicks on the close button of wallet view
    //   /> */}
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    //   <Text>123456789111</Text>
    // </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    width: 120,
  },
  text: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    marginBottom: 280,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
