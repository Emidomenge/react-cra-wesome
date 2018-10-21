import {
  Button, Col, Grid, Row,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import React from 'react';


const ViewOnGithub = () => (
  <Grid
    className="relative"
    style={{
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 51 + 15,
      paddingRight: 51 + 15,
      paddingBottom: 15,
      marginBottom: 60, // footer margin
      width: '100%',
    }}
  >
    <div className="bg-gray absolute w-100 h-100 left-0" />
    <Row className="show-grid">
      <Col sm={12} md={12} className="tc">
        <div className="ma3">
          <div>
            <FontAwesome
              className="ma2 white"
              name="github"
              size="5x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </div>
          <Button className="ma2" href="https://github.com/Emidomenge/react-cra-wesome" target="_blank">Check on Github</Button>
        </div>
      </Col>
    </Row>
  </Grid>
);

export default ViewOnGithub;
