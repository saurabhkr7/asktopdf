import './App.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import Header from './Components/Header';
import Home from './Content/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Theme theme="g100">
          <Header />
        </Theme>
      <Content>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </Content>
      </BrowserRouter>
    </>
  );
}

export default App;
