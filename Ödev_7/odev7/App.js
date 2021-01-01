import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Restaurant from './Restaurant';


const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <Restaurant/>
      </SafeAreaView>
  );
};

export default App;
