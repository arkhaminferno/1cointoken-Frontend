import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
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
      </Container>
    );
  }
}
