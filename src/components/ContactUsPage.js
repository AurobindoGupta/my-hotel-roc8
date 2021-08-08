import { Container, Nav, Navbar } from "react-bootstrap";
import ContactUsForm from "./ContactUSForm";

const ContactUsPage = () => {
  return (
    <div className="contact-us">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">My-Hotel</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="ms-auto">
              <Nav>
                <Nav.Link href="/" className="d-flex justify-content-center">
                  Home
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="/about"
                  className="d-flex justify-content-center"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="/contact-us"
                  className="d-flex justify-content-center"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ContactUsForm/>
    </div>
  );
};
export default ContactUsPage;
