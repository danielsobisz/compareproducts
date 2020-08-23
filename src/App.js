import React from 'react';
import { Provider } from 'react-redux'
import './styles/main.scss';
import Header from './layouts/Header/Header'
import Main from './layouts/Main/Main'

import store from './store'




function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Main></Main>

    </Provider>
  )
}

export default App;