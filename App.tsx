/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {Ramper} from '@ramper/react-native-core';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Auth} from '@ramper/react-native-core';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {RamperScreen} from '@ramper/react-native-core';
type SectionProps = PropsWithChildren<{
  title: string;
}>;
Ramper.configure({
  appId: 'pcsnabqhiu',
  locale: 'en',
  chainName: 'ethereum',
});
function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
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
  const handleGetUser = async () => {
    try {
      const user = await Auth.getUser();
      console.log(user);
      // handle user
    } catch (error) {
      // handle error
    }
  };
  useEffect(() => {
    //handleLoginSocialByRamper();
    handleGetUser();
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>123456789111</Text>
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
        browserProps // optional
      />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
