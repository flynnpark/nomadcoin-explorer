import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import AppPresenter from './AppPresenter';
import reset from 'styled-reset';
import typography from '../../typography';

const baseStyles = () => injectGlobal`
  ${reset};
  ${typography};
  a {
    text-decoration: none!important;
  }
`;

class App extends Component {
  render() {
    baseStyles();
    return <AppPresenter />;
  }
}

export default App;
