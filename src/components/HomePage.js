import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="Home">
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

      <Carousel indicators={true}>
        <Carousel.Item>
          <img src="../images/ht1.jpg" className=" d-block w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/ht2.jpg" className=" w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/ht3.jpg" className=" w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/ht4.jpg" className=" w-100" alt="" />
        </Carousel.Item>
      </Carousel>

      <Container className="cardContainer d-flex ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../images/r1.jpg" />
          <Card.Body>
            <Card.Title>Room Type I</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../images/r1.jpg" />
          <Card.Body>
            <Card.Title>Room Type II</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../images/r1.jpg" />
          <Card.Body>
            <Card.Title>Room Type III</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../images/r1.jpg" />
          <Card.Body>
            <Card.Title>Room Type IV</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
export default Home;
