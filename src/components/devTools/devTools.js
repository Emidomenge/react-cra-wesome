import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button, Col, Alert } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Animated } from 'react-animated-css';
import ExampleTemplate from './components/exampleTemplate/exampleTemplate';
import css from './devTools.css';
import logo from '../../assets/svg/logo.svg';

class DevTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAnimated: true,
    };
    this.triggerToggleAnimated = this.triggerToggleAnimated.bind(this);
  }

  triggerToggleAnimated() {
    const { toggleAnimated } = this.state;
    this.setState({
      toggleAnimated: !toggleAnimated,
    });
  }

  render() {
    const { toggleAnimated } = this.state;
    return (
      <div>
        <Col sm={12} md={12} className="tc">
          <p
            className="App-intro"
            style={{ marginTop: 35 }}
          >
            <h3>
              {'To get started, take a look to the cool stuff already out of the box:'}
            </h3>
          </p>
        </Col>

        <Col sm={12} md={12} className={css.devBtn}>
          <ExampleTemplate
            codeAsString={
            ''
            + 'import FontAwesome from \'react-fontawesome\'; \n\n\n'
            + '<FontAwesome\n'
            + ' className="super-crazy-colors"\n'
            + ' name="font-awesome"\n'
            + ' size="3x"\n'
            + ' style={{ textShadow: \'0 1px 0 rgba(0, 0, 0, 0.1)\' }}\n'
            + '/>'
        }
            linkToDoc="https://fontawesome.com/v4.7.0/icons/"
            title="FontAwesome Icons v4.7.0"
          >
            <FontAwesome
              className="super-crazy-colors"
              name="font-awesome"
              size="3x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </ExampleTemplate>
        </Col>

        <Col sm={12} md={12} className={css.devBtn}>
          <ExampleTemplate
            importLibString="import { Alert } from 'react-bootstrap';"
            codeAsString={
            '<Alert bsStyle="warning">\n'
            + '  <strong>Holy guacamole!</strong> Best check yo self, you\'re not looking too '
            + 'good.\n'
            + '</Alert>'
        }
            linkToDoc="https://react-bootstrap.github.io/components/alerts/"
            title="React Bootstrap v3"
          >
            <Alert bsStyle="warning">
              <strong>Holy guacamole!</strong>
          Best check yo self, you're not looking too good.
            </Alert>
          </ExampleTemplate>
        </Col>

        <Col sm={12} md={12} className={css.devBtn}>
          <ExampleTemplate
            importLibString="// take a look in 'src/index.js'"
            codeAsString={
            '<div className="dtc-ns v-mid pr4">\n'
            + '  <div className="bt black b--black db pt2 pb2 mb3">b--black</div>\n'
            + '  <div className="bt black-90 b--black-90 db pt2 pb2 mb3">b--black-90</div>\n'
            + '  <div className="bt black-80 b--black-80 db pt2 pb2 mb3">b--black-80</div>\n'
            + '  <div className="bt black-70 b--black-70 db pt2 pb2 mb3">b--black-70</div>\n'
            + '  <div className="bt black-60 b--black-60 db pt2 pb2 mb3">b--black-60</div>\n'
            + '  <div className="bt black-50 b--black-50 db pt2 pb2 mb3">b--black-50</div>\n'
            + '  <div className="bt black-40 b--black-40 db pt2 pb2 mb3">b--black-40</div>\n'
            + '  <div className="bt black-30 b--black-30 db pt2 pb2 mb3">b--black-30</div>\n'
            + '  <div className="bt black-20 b--black-20 db pt2 pb2 mb3">b--black-20</div>\n'
            + '  <div className="bt black-10 b--black-10 db pt2 pb2 mb3">b--black-10</div>\n'
            + '  <div className="bt black-05 b--black-05 db pt2 pb2 mb3">b--black-05</div>\n'
            + '  <div className="bg-black pa2 db">\n'
            + '    <div className="bt white-025 b--white-025 db pt2 pb2 mb3">b--white-025</div>\n'
            + '    <div className="bt white-0125 b--white-0125 db pt2 pb2 mb3">b--white-0125</div>\n'
            + '    <div className="bt dark-red b--dark-red db pt2 pb2 mb3">b--dark-red</div>\n'
            + '    <div className="bt red b--red db pt2 pb2 mb3">b--red</div>\n'
            + '    <div className="bt orange b--orange db pt2 pb2 mb3">b--orange</div>\n'
            + '    <div className="bt gold b--gold db pt2 pb2 mb3">b--gold</div>\n'
            + '    <div className="bt yellow b--yellow db pt2 pb2 mb3">b--yellow</div>\n'
            + '    <div className="bt purple b--purple db pt2 pb2 mb3">b--purple</div>\n'
            + '    <div className="bt light-purple b--light-purple db pt2 pb2 mb3">b--light-purple</div>\n'
            + '    <div className="bt hot-pink b--hot-pink db pt2 pb2 mb3">b--hot-pink</div>\n'
            + '    <div className="bt dark-pink b--dark-pink db pt2 pb2 mb3">b--dark-pink</div>\n'
            + '  </div>\n'
            + '</div>'
        }
            linkToDoc="http://tachyons.io/docs/"
            title="Tachyons"
          >
            <div className="dtc-ns v-mid pr4">
              <div className="bt black b--black db pt2 pb2 mb3">b--black</div>
              <div className="bt black-90 b--black-90 db pt2 pb2 mb3">b--black-90</div>
              <div className="bt black-80 b--black-80 db pt2 pb2 mb3">b--black-80</div>
              <div className="bt black-70 b--black-70 db pt2 pb2 mb3">b--black-70</div>
              <div className="bt black-60 b--black-60 db pt2 pb2 mb3">b--black-60</div>
              <div className="bt black-50 b--black-50 db pt2 pb2 mb3">b--black-50</div>
              <div className="bt black-40 b--black-40 db pt2 pb2 mb3">b--black-40</div>
              <div className="bt black-30 b--black-30 db pt2 pb2 mb3">b--black-30</div>
              <div className="bt black-20 b--black-20 db pt2 pb2 mb3">b--black-20</div>
              <div className="bt black-10 b--black-10 db pt2 pb2 mb3">b--black-10</div>
              <div className="bt black-05 b--black-05 db pt2 pb2 mb3">b--black-05</div>
              <div className="bg-black pa2 db">
                <div className="bt white-025 b--white-025 db pt2 pb2 mb3">b--white-025</div>
                <div className="bt white-0125 b--white-0125 db pt2 pb2 mb3">b--white-0125</div>
                <div className="bt dark-red b--dark-red db pt2 pb2 mb3">b--dark-red</div>
                <div className="bt red b--red db pt2 pb2 mb3">b--red</div>
                <div className="bt orange b--orange db pt2 pb2 mb3">b--orange</div>
                <div className="bt gold b--gold db pt2 pb2 mb3">b--gold</div>
                <div className="bt yellow b--yellow db pt2 pb2 mb3">b--yellow</div>
                <div className="bt purple b--purple db pt2 pb2 mb3">b--purple</div>
                <div className="bt light-purple b--light-purple db pt2 pb2 mb3">b--light-purple</div>
                <div className="bt hot-pink b--hot-pink db pt2 pb2 mb3">b--hot-pink</div>
                <div className="bt dark-pink b--dark-pink db pt2 pb2 mb3">b--dark-pink</div>
              </div>
            </div>
          </ExampleTemplate>
        </Col>

        <Col sm={12} md={12} className={css.devBtn}>
          <ExampleTemplate
            importLibString="import ScrollAnimation from 'react-animate-on-scroll';"
            codeAsString={
           '<ScrollAnimation\n'
           + '  animateIn="bounceInRight"\n'
           + '  animateOut="bounceOutLeft"\n'
           + '>\n'
           + '  <h2>\n'
           + '    <a href="https://daneden.github.io/animate.css/">\n'
           + '     Animate.css\n'
           + '    </a>\n'
           + '  </h2>\n'
           + '</ScrollAnimation>'
        }
            linkToDoc="https://www.npmjs.com/package/react-animate-on-scroll"
            title="React Animate on Scroll"
          >
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <h2>
                <a href="https://daneden.github.io/animate.css/">
      Animate.css
                </a>
              </h2>
            </ScrollAnimation>
          </ExampleTemplate>
        </Col>

        <Col sm={12} md={12} className={css.devBtn}>
          <ExampleTemplate
            importLibString="import { Animated } from 'react-animated-css';"
            codeAsString={
           `<Animated animationIn="fadeIn" animationOut="zoomOutDown" isVisible={${toggleAnimated}}>\n`
           + '  <img src={logo} className="App-logo" alt="logo" />\n'
           + '</Animated>'
        }
            linkToDoc="https://www.npmjs.com/package/react-animated-css"
            title="React Animated CSS"
          >
            <Animated animationIn="fadeIn" animationOut="zoomOutDown" isVisible={toggleAnimated}>
              <img src={logo} className="App-logo" alt="logo" />
            </Animated>
            <Button
              onClick={this.triggerToggleAnimated}
            >
              {`isVisible={${toggleAnimated}}`}
            </Button>
          </ExampleTemplate>
        </Col>
      </div>
    );
  }
}


export default DevTools;
