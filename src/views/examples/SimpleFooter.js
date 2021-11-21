/*eslint-disable*/
import React, { Fragment } from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const SimpleFooter = () => {
  return (
    <Fragment>
      <footer className=" footer">
        <Container>
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className=" text-primary font-weight-light mb-2">
                Thank you for visiting!
              </h3>
              
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              
              
              
             
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="github"
                href="https://github.com/thilina4321"
                id="tooltip495507257"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip495507257">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          
        </Container>
      </footer>
    </Fragment>
  );
};

export default SimpleFooter;
