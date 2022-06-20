import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Teste</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
