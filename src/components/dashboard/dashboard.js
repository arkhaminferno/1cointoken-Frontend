import React, { Component } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { Nav, NavItem, NavLink, Input } from "reactstrap";
import { FaTelegram, FaEye, FaEthereum } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

import { BsCircleFill } from "react-icons/bs";
import { MdLoop, MdGroup } from "react-icons/md";

import "./dashboard.css";
export default class dashboard extends Component {
  render() {
    return (
      <Container>
        <div className="nav-row">
          <div className="brand-logo">FORSAGE LOGO</div>
          <div className="navbar-details">
            <Row className="abk">
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
        </div>
        <br />
        <div className="wf-parent">
          <Container className="wf1">
            <div className="hol">
              <div className="holder-parent">
                <div className="panel1">
                  <div className="sub-panel1">
                    <div className="sub-panel1-padding">
                      <div className="sub-panel-1-logo-width">
                        <img
                          width="100%"
                          height="100%"
                          src="/assets/eth-logo.png"
                        />
                      </div>
                      <div className="sub-panel-1-width">
                        <Row className="-id">
                          <Col className="id-">ID 123</Col>
                        </Row>
                        <div className="sbk">
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
                        </div>
                        <div className="bal-">
                          <div className="bal-dollars">$ 0</div>
                        </div>
                        <Row></Row>
                      </div>
                    </div>
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
                            <img
                              height="100%"
                              width="80%"
                              src="assets/x3.svg"
                            />
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
                            <img
                              height="100%"
                              width="80%"
                              src="assets/x4.svg"
                            />
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
                  <br />
                  <div className="sub-panel-4">
                    <div className="notification-flex-row">
                      <div className="telegram">
                        <FaTelegram color="white" />
                      </div>
                      <div className="nfication"> Enable notifications</div>
                    </div>
                    <div className="currency">
                      <div>
                        <FiGlobe color="white" />
                      </div>
                      <div className="USD">USD</div>
                      <div className="EUR"> EUR</div>
                      <div className="RUB">RUB</div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="holder-row">
                <div className="holder">
                  <div className="panel2">
                    <div className="pfs">
                      <div className="pf1">
                        <div className="pf1-child-1">Affiliate Link</div>
                      </div>
                      <div className="pf2">
                        <div className="pf2-child-2">
                          <div className="pf-col1"></div>

                          <div className="pf-col">
                            0
                            <img
                              width="40%"
                              height="40%"
                              src="/assets/partners_light.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="affiliate-link-input">
                      <Input id="affiliate-btn" />
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
                      <Row className="smartcontract-address">
                        contract address
                      </Row>
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
                </div>
              </div>
            </div>
          </Container>
          <Container className="wf2-parent">
            <div className="wf2">
              <div className="wf2-child">
                <div className="x3-panel">
                  <div className="x3-panel-child">
                    <div className="logo"> Forsage logo</div>
                    <div className="six-tree-x3-level-1">
                      <div className="tree x3-1 ">tree 1</div>
                      <div className="tree x3-2 ">tree2</div>
                      <div className="tree x3-3 ">tree 3</div>
                      <div className="tree x3-4">tree 4</div>
                    </div>
                    <div className="six-tree-x3-level-2">
                      <div className="tree x4-1">tree1</div>
                      <div className="tree x4-2">tree2</div>
                      <div className="tree x4-3">tree3</div>
                      <div className="tree x4-4">tree4</div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="platforms-details">
                  <div className="eth-cost">
                    <FaEthereum />
                    {"  "}
                    THE COST OF PLATFORMS IN ETH (ETHEREUM)
                  </div>
                  <div className="reopen">
                    {"   "}
                    <MdLoop /> NUMBER OF REOPENS
                  </div>
                </div>
                <div className="partners-platform">
                  <div className="partners-platform-child">
                    <MdGroup color="white" />
                    {"  "}
                    &nbsp; PARTNERS ON THE PLATFORM
                  </div>
                </div>
                <br />
                {/* X4 panel*/}
                <div className="x3-panel">
                  <div className="x3-panel-child">
                    <div className="logo"> Forsage logo</div>
                    <div className="six-tree-x3-level-1">
                      <div className="tree">tree1</div>
                      <div className="tree">tree2</div>
                      <div className="tree">tree3</div>
                      <div className="tree">tree4</div>
                    </div>
                    <div className="six-tree-x3-level-2">
                      <div className="tree">tree1</div>
                      <div className="tree">tree2</div>
                      <div className="tree">tree3</div>
                      <div className="tree">tree4</div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="overflow-details">
                  <div className="overflow-col1">
                    <div className="overflow-child-col-1">
                      <BsCircleFill color="#00b0c2" /> PARTNER INVITED BY YOU
                    </div>
                    <div className="overflow-child-col-2">
                      {" "}
                      <BsCircleFill color="#0080cc" /> OVERFLOW FROM UP
                    </div>
                  </div>
                  <div className="overflow-col2">
                    <div className="overflow-child-col-1">
                      <BsCircleFill color="#92c9da" /> PARTNER INVITED BY YOU
                    </div>
                    <div className="overflow-child-col-2">
                      <BsCircleFill color="#ac9bfb" /> OVERFLOW FROM UP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    );
  }
}
