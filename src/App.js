import React from 'react';
import store from "./store";
import { Provider } from 'react-redux';
import Applicant from './components/Applicant'

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Applicant/>
      </Provider>
    );
  }
}

export default App;
