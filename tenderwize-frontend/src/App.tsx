import * as React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import * as WebFont from 'webfontloader';
import Header from './components/Header'
import UnsubmittedTendors from './components/UnsubmittedTendors';
import { Route, Switch } from 'react-router';
import NewTenderForm from './components/NewTenderForm';
import FillTenderForm1 from './components/FillTenderForm1';
import FillTenderForm2 from './components/FillTenderForm2';

WebFont.load({
  google: {
    families: ['Varela Round:300,400,700',
      'Bree Serif',
      'sans-serif']
  }
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <div>
            <Route path="/">
              <Header />
            </Route>
            <Switch>
              <Route exact={true} path="/">
                <UnsubmittedTendors />
              </Route>
              <Route exact={true} path="/createNewTender">
                <NewTenderForm />
              </Route>
              <Route exact={true} path="/fillTendorForm1">
                <FillTenderForm1 />
              </Route>
              <Route exact={true} path="/fillTendorForm2">
                <FillTenderForm2 />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div >
    );
  }
}

export default App
