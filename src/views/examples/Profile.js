import React, { Fragment, useEffect, useRef } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
import me from "../../assets/img/layosa.jpg";

const Profile = () => {
  const mainRef = useRef();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);

  return (
    <Fragment>
      <main className="profile-page" ref={mainRef}>
        <section className="section-profile-cover section pb-0 bg-gradient-warning">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img alt="..." className="rounded-circle" src={me} />
                      </a>
                    </div>
                  </Col>
                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="facebook"
                        href="https://www.facebook.com/LayosaDesigners"
                        id="tooltip4955072570"
                        target="_blank"
                      >
                        <span className="btn-inner--icon">
                          <ion-icon name="logo-facebook"></ion-icon>{" "}
                        </span>
                      </Button>

                      <Button
                        className="float-right"
                        color="default"
                        href="mailto:layosadesigners@email.com"
                        size="sm"
                        target="_blank"
                      >
                        Connect
                      </Button>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <h3>LAYOSA DESIGNERS</h3>

                  <div className="h6 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Make Your Dream House Architecturally In One Place
                  </div>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <p style={{fontSize:'14px'}}>
                      Layosa is an excellent minds putting manufacturers on the path toward the competitive edge.

Engineers. Designers. Fabricators. Electricians. Programmers. A team of geniuses fueled by your ideas.

We’re more than the sum of our parts, but these parts are damn good.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </Fragment>
  );
};

export default Profile;
