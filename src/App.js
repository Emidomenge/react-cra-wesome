import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import './App.css';
import DevTools from './components/devTools/devTools';
import ReactElementSample from './components/reactElementSample/reactElementSample';
import Footer from './components/footer/footer';
import ViewOnGithub from './components/viewOnGithub/viewOnGithub';
import ForkOnGithub from './components/forkOnGithub/forkOnGithub';

const App = () => (
  <div>
    <ReactElementSample />
    <ForkOnGithub />
    <Grid>
      <Row className="show-grid">
        <DevTools />
      </Row>
    </Grid>
    <ViewOnGithub />
    <Footer />
  </div>
);

export default App;
