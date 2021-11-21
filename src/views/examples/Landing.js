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
                  <h3>Our Services</h3>

                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge className="badge-circle mr-3" color="success">
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Modern House Planing</h6>
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
                          <h6 className="mb-0">2D Floor Plan Design</h6>
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
                          <h6 className="mb-0">3D Design</h6>
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
                          <h6 className="mb-0">BOQ Estimation</h6>
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
                          <h6 className="mb-0">Council Approval Plans</h6>
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
                          <h6 className="mb-0">Electrical Layout Design</h6>
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
                          <h6 className="mb-0">
                            All Type Of Construction Works
                          </h6>
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
                <h2 className="display-3 text-white">Our Misition</h2>
                <p className="lead text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae
                  cum dixisset, finem ille. Primum divisit ineleganter; Urgent
                  tamen et nihil remittunt. Quid est igitur, inquit, quod
                  requiras? Eaedem res maneant alio modo. Duo Reges: constructio
                  interrete. Sed ad rem redeamus; Tollitur beneficium, tollitur
                  gratia, quae sunt vincla concordiae. Immo alio genere;
                  Respondeat totidem verbis. Deprehensus omnem poenam contemnet.
                  Quid ergo? Vestri haec verecundius, illi fortasse constantius.
                  Quae cum dixisset, finem ille.
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
