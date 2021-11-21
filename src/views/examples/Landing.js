import React, { Fragment, useEffect, useRef } from "react";
// nodejs library that concatenates classes

// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

const Landing = () => {
  const mainRef = useRef();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);

  return (
    <Fragment>
      <main ref={mainRef}>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <ion-icon name="cog"></ion-icon>
                  </div>
                  <h3>Technical Explosure</h3>

                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Web Development</h6>
                          <small>
                            React, Angular, Node.js, JavaScript, Typescript,
                            Html, Css
                          </small>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Mobile Development</h6>
                          <small> Flutter </small>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Cloud technologies</h6>
                          <small> AWS </small>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Databases</h6>
                          <small> MySql, Mongodb, Firebase </small>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Version Controlling</h6>
                          <small> Git, GitHub </small>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Other Skills</h6>
                          <small> Leadership, Interpersonal Skills </small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg bg-gradient-default">
          <Container className="pt-lg pb-300">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="display-3 text-white">Education</h2>
                <p className="lead text-white">
                  In school days I attended to 3 schools, I do my primary
                  eduation at Biyagama junior school. After that I able to join
                  colombo Asoka College For my OL's and I able to join Colombo
                  Ananda college for my AL's. Then for my higher educations I
                  able to join Institute of Technology University Of Moratuwa.
                </p>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
        </section>
      </main>
    </Fragment>
  );
};

export default Landing;
