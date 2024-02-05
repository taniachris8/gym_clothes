import React from "react";
import { useEffect } from "react";
import "../App.css";
import "./css/AccountPage.css";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useUser } from "../contexts/UserContext";

function AccountPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const handleLogout = () => {
    // Clear the user cookie and redirect to the login page
    Cookies.remove("user");
    Cookies.remove("cart");
    navigate("/login");
  };

  return (
    <>
      <Banner
        title={`Welcome ${user?.firstName}`}
        text="We are happy to see you!"
        src="images/brabra5.jpg"
      />

      <div className="custom-tab-container">
        <h3 className="tab-container-title">My Account</h3>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="account-tabs">
                  <Nav.Link eventKey="overview">Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item className="account-tabs">
                  <Nav.Link eventKey="orders">Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item className="account-tabs">
                  <Nav.Link eventKey="profile">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item className="account-tabs">
                  <Nav.Link eventKey="address">Address Book</Nav.Link>
                </Nav.Item>
                <Nav.Item className="account-tabs">
                  <Nav.Link eventKey="wishlist">Wishlist</Nav.Link>
                </Nav.Item>
                <Nav.Item className="account-tabs">
                  <Nav.Link eventKey="log-out">Log out</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="overview-container">
                <Tab.Pane eventKey="overview" className="account-tabs-overview">
                  <p>Hi {user ? user.firstName : "Guest"}!</p>
                  <p>
                    Welcome to your Account. This is where you can view your
                    orders and edit your contact details.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="orders" className="account-tabs-overview">
                  You have not placed an order yet.
                </Tab.Pane>
                <Tab.Pane eventKey="profile" className="account-tabs-overview">
                  Second tab content
                </Tab.Pane>
                <Tab.Pane eventKey="address" className="account-tabs-overview">
                  Shipping Address
                </Tab.Pane>
                <Tab.Pane eventKey="wishlist" className="account-tabs-overview">
                  Build your wishlist to save all your favourite must-have items
                  for later. Once you are ready to shop, simply add each item
                  from your wishlist to your cart.
                </Tab.Pane>
                <Tab.Pane eventKey="log-out" className="account-tabs-overview">
                  <Button variant="primary" onClick={handleLogout}>
                    Logout
                  </Button>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <Footer />
    </>
  );
}
export default AccountPage;
