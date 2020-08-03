import React, { Component } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { Nav, NavItem, NavLink, Input } from "reactstrap";
import { FaTelegram, FaEye } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import "./dashboard.css";
export default class dashboard extends Component {
  render() {
    return (
      <Container>
        <Row className="nav-row">
          <div className="logo"></div>
          <div className="navbar-details">
            <Row>
              <Nav className="nav-items">
                <NavItem>
                  <NavLink>
                    <FaTelegram />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <FaEye />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Office</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Informatoin</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>logout</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <FiGlobe />
                  </NavLink>
                </NavItem>
              </Nav>
            </Row>

            <div className="participants-details">
              <Col>
                <div className="first-detail">
                  <div className="first-numbers">75123</div>
                  <div className="first-description">
                    ALL
                    <br />
                    participants
                  </div>
                </div>

                <div className="second-detail">
                  <div className="second-numbers">+8136</div>
                  <div className="second-description">
                    JOINED
                    <br />
                    IN 24 HOURS
                  </div>
                </div>
                <div className="third-detail">
                  <div className="third-numbers">+8136</div>
                  <div className="third-description">
                    PARTICIPANTS
                    <br />
                    have EARNED ETH
                  </div>
                </div>
                <div className="fourth-detail">
                  <div className="fourth-numbers">+8136</div>
                  <div className="fourth-description">
                    PARTICIPANTS
                    <br />
                    have EARNED USD
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </Row>
        <br />
        <Row>
          <Col lg="4" mb="4" xs="3" className="wf1">
            <Row>
              <div className="panel1">
                <div className="sub-panel1">
                  <Row className="sub-panel1-padding">
                    <Col className="sub-panel-1-logo-width">
                      <img
                        width="100%"
                        height="100%"
                        src="/assets/eth-logo.png"
                      />
                    </Col>
                    <Col className="sub-panel-1-width">
                      <Row>
                        <Col className="id-">ID 123</Col>
                      </Row>
                      <Row>
                        <div className="sub-panel-1-flex">
                          <div className="sub-panel-1-flex-child"></div>
                          <div className="sub-panel-1-flex-child2">
                            0
                            <img
                              width="40%"
                              height="40%"
                              src="/assets/partners_light.svg"
                            />
                          </div>
                        </div>
                      </Row>
                      <Row>
                        <Col className="bal-dollars">$ 0</Col>
                      </Row>
                      <Row></Row>
                    </Col>
                  </Row>
                </div>

                <div className="sub-panel2">
                  <Row>
                    <Col>
                      <div className="balance-display">
                        <Button id="balance-child-display">0.00eth</Button>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="sub-panel3">
                  <div className="sb-child-panel">
                    <Row>
                      <Col>
                        <div className="sub-panel3-child">
                          <img height="100%" width="80%" src="assets/x3.svg" />
                        </div>
                        <div className="sub-panel3-child2">0$ &nbsp;</div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="sub-child-panel3">
                        <Button id="btn-eth">0.00 eth</Button>
                      </div>
                    </Row>
                  </div>

                  <div className="sb-child-panel">
                    <Row>
                      <Col>
                        <div className="sub-panel3-child">
                          <img height="100%" width="80%" src="assets/x4.svg" />
                        </div>
                        <div className="sub-panel3-child2">0$ &nbsp;</div>
                      </Col>
                    </Row>
                    <Row>
                      <div className="sub-child-panel3">
                        <Button id="btn-eth">0.00 eth</Button>
                      </div>
                    </Row>
                  </div>
                </div>

                <div className="notification-flex-row">
                  <div className="telegram">
                    <FaTelegram color="white" />
                  </div>
                  <div className="nfication"> Enable notifications</div>
                </div>
                <div className="currency">
                  <div>
                    <Row className="globe">
                      <FiGlobe color="white" />
                    </Row>
                  </div>
                  <div className="USD">USD</div>
                  <div className="EUR"> EUR</div>
                  <div className="RUB">RUB</div>
                </div>
              </div>
            </Row>
            <br />
            <div className="panel2">
              <div className="pfs">
                <div className="pf1">Affiliate Link</div>
                <div className="pf2">
                  0{" "}
                  <div className="pf-col">
                    <img
                      width="40%"
                      height="40%"
                      src="/assets/partners_light.svg"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Input />
              </div>
              <div className="sub-child">
                <Button id="btn-eth2">copy</Button>
              </div>
            </div>
            <br />
            <div className="panel3">
              <Col className="eth-wallet">
                <Row className="eth-wallet-address">ethereum wallet</Row>
                <Row className="eth-wallet-address">0x1652s</Row>
              </Col>
            </div>
            <div className="sub-panel3">
              <Row>
                <Col>
                  <Button id="btn-etscan">etherscan</Button>
                </Col>
                <Col>
                  <Button id="btn-etscan2">COPY</Button>
                </Col>
              </Row>
            </div>
            <br />
            <div className="panel4">
              <Col className="eth-wallet">
                <Row className="smartcontract-address">contract address</Row>
                <Row className="smartcontract-address">0x1652s</Row>
              </Col>
            </div>
            <div className="sub-panel4">
              <Row>
                <Col>
                  <Button id="btn-etscan">etherscan</Button>
                </Col>
                <Col>
                  <Button id="btn-etscan2">COPY</Button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg="9" xs="9" className="wf2">
            <div className="wf2-child">
              <div className="x3-panel">
                <div className="x3-panel-child">
                  <div className="logo"> Forsage logo</div>
                  <div className="six-tree-x3-level-1">
                    <div>tree1</div>
                    <div>tree2</div>
                    <div>tree3</div>
                    <div>tree4</div>
                    <div>tree5</div>
                    <div>tree6</div>
                  </div>
                  <div className="six-tree-x3-level-2">
                    <div>tree1</div>
                    <div>tree2</div>
                    <div>tree3</div>
                    <div>tree4</div>
                    <div>tree5</div>
                    <div>tree6</div>
                  </div>
                </div>
              </div>
              <div className="platforms-details">
                <div className="eth-cost">
                  THE COST OF PLATFORMS IN ETH (ETHEREUM)
                </div>
                <div className="reopen">NUMBER OF REOPENS</div>
              </div>
              <div className="partners-platform">
                <div className="partners-platform-child">
                  PARTNERS ON THE PLATFORM
                </div>
              </div>
              <br />
              {/* X4 panel*/}
              <div className="x3-panel">
                <div className="x3-panel-child">
                  <div className="logo"> Forsage logo</div>
                  <div className="six-tree-x3-level-1">
                    <div>tree1</div>
                    <div>tree2</div>
                    <div>tree3</div>
                    <div>tree4</div>
                    <div>tree5</div>
                    <div>tree6</div>
                  </div>
                  <div className="six-tree-x3-level-2">
                    <div>tree1</div>
                    <div>tree2</div>
                    <div>tree3</div>
                    <div>tree4</div>
                    <div>tree5</div>
                    <div>tree6</div>
                  </div>
                </div>
              </div>
              <br />
              <div className="overflow-details">
                <div className="overflow-col1">
                  <div className="overflow-child-col-1">
                    PARTNER INVITED BY YOU
                  </div>
                  <div className="overflow-child-col-2">OVERFLOW FROM UP</div>
                </div>
                <div className="overflow-col2">
                  <div className="overflow-child-col-1">
                    PARTNER INVITED BY YOU
                  </div>
                  <div className="overflow-child-col-2">OVERFLOW FROM UP</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
