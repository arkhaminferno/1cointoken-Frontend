import React, { Component } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { Nav, NavItem, NavLink, Input } from "reactstrap";
import { FaTelegram, FaEye } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
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
          <Col lg="3" mb="4" xs="3" className="wf1">
            <div className="panel1">
              <div className="sub-panel1">
                <Row>
                  <Col>lgog</Col>
                  <Col>
                    <Row>
                      <Col>id123</Col>
                    </Row>
                    <Row>
                      <Col>1234</Col>
                      <Col>logo</Col>
                    </Row>
                    <Row>
                      <Col>$ 0</Col>
                    </Row>
                    <Row></Row>
                  </Col>
                </Row>
              </div>

              <div className="sub-panel2">
                <Row>
                  <Col>
                    <div className="balance-display">
                      <Button>safasf</Button>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="sub-panel3">
                <Col>
                  <Row>forsage x3</Row>
                  <Row>0$</Row>
                </Col>
              </div>
              <div className="sub-child-panel3">
                <Row>
                  <Col></Col>
                  <Col>
                    <Button>123</Button>
                  </Col>
                </Row>
              </div>

              <div className="sub-panel4">
                <Col>
                  <Row>forsage x4</Row>
                  <Row>0$</Row>
                </Col>
              </div>
              <div className="sub-child-panel4">
                <Row>
                  <Col></Col>
                  <Col>
                    <Button>123</Button>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <FaTelegram />
                    </Col>
                    <Col>Enable </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FiGlobe />
                </Col>
                <Col>USD</Col>
                <Col>EUR</Col>
                <Col>RUB</Col>
              </Row>
            </div>
            <br />
            <div className="panel2">
              <Col>
                <Row>
                  <Col>Affiliate</Col>
                  <Col>
                    <Row>
                      <Col>0</Col>
                      <Col>peoplelogo</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Input>knl</Input>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <Button>35</Button>
                  </Col>
                </Row>
              </Col>
            </div>
            <br />
            <div className="panel3">
              <Col>
                <Row className="eth-wallet-address">ethereum wallet</Row>
                <Row className="eth-wallet-address">0x1652s</Row>
              </Col>
            </div>
            <div className="sub-panel3">
              <Row>
                <Col>
                  <Button>etherscan</Button>
                </Col>
                <Col>
                  <Button>COPY</Button>
                </Col>
              </Row>
            </div>
            <br />
            <div className="panel4">
              <Col>
                <Row className="smartcontract-address">contract address</Row>
                <Row className="smartcontract-address">0x1652s</Row>
              </Col>
            </div>
            <div className="sub-panel4">
              <Row>
                <Col>
                  <Button>etherscan</Button>
                </Col>
                <Col>
                  <Button>COPY</Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="9" xs="9" className="wf2">
            fun
          </Col>
        </Row>
      </Container>
    );
  }
}
