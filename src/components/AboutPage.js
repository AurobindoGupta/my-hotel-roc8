import { Container, Nav, Navbar } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="aboutpage">
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
      <div classname="container">
        <div className="row">
          <div className="col">
            <img
              src="../images/abt1.jpg"
              className="d-block w-100 rounded "
            ></img>

            <img
              src="../images/abt4.jpg"
              className="d-block w-100 rounded"
            ></img>
            <img
              src="../images/abt5.jpg"
              className="d-block w-100 rounded"
            ></img>
          </div>
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              lobortis risus bibendum lorem molestie elementum. Duis eleifend
              facilisis sodales. Duis eget tempor risus. Suspendisse potenti.
              Suspendisse gravida sollicitudin mauris scelerisque molestie.
              Maecenas accumsan felis tortor. Nunc rhoncus sodales neque nec
              cursus. Quisque eleifend, odio a sagittis dapibus, velit risus
              ultrices neque, eu hendrerit felis nisi ac lectus. Aenean
              vestibulum enim iaculis mollis tristique. Nulla vel sapien nulla.
              Suspendisse vitae finibus nunc. Vivamus leo tellus, convallis non
              augue vitae, posuere elementum tortor. Donec finibus et dolor id
              porttitor. Etiam interdum ut tortor aliquet porta. Duis quis
              cursus metus. Integer fringilla velit ac nisl cursus dictum. Duis
              sagittis erat eget sollicitudin volutpat. Morbi tempor augue vitae
              urna hendrerit, sed malesuada orci blandit. Nullam orci tortor,
              vehicula a commodo at, vestibulum non ex. Suspendisse sit amet
              risus nec lectus luctus finibus vitae at ex. Nam lorem tortor,
              imperdiet in purus a, maximus iaculis turpis. Suspendisse leo
              metus, posuere ut laoreet eget, tincidunt ut lorem. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Aenean massa nibh, sagittis laoreet purus sed,
              efficitur bibendum libero. Proin gravida metus vitae est
              consectetur, ut tempor dolor egestas. Nam vitae convallis turpis,
              a imperdiet elit. Maecenas posuere turpis in vehicula scelerisque.
              In nulla elit, euismod et felis nec, venenatis tincidunt orci.
              Curabitur in augue vitae elit dictum fermentum ac ac nulla. In
              nisl magna, imperdiet eu leo et, placerat eleifend orci. Aenean
              semper eu mi mattis rhoncus. Donec facilisis diam eget metus
              vehicula, vitae dapibus quam tincidunt. Maecenas faucibus, nulla
              ut pellentesque faucibus, elit est suscipit tortor, blandit cursus
              nisi dolor ac justo. Maecenas quis tortor non turpis lobortis
              euismod. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Donec ac pretium mauris. Mauris ac sem nec justo
              lobortis interdum at nec est. Maecenas dolor nisl, luctus eu dui
              ac, sodales efficitur massa. Sed eget bibendum erat. Maecenas
              sagittis mi ac turpis luctus dictum. Mauris maximus mauris vel
              justo maximus pellentesque. Curabitur leo nisl, iaculis vitae ex
              id, facilisis iaculis risus. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Donec quis
              ligula ut felis tempus lacinia quis id libero. Suspendisse eu leo
              porttitor, scelerisque nunc ornare, eleifend purus. Nunc porta
              convallis luctus. Proin semper sodales dolor, sit amet consequat
              erat eleifend vitae. Donec facilisis pretium lorem, vitae eleifend
              massa tempus eu. Mauris rhoncus ex vel tempus aliquam. Integer
              dapibus congue enim, sit amet posuere dui pharetra sit amet.
              Vivamus condimentum nisl a faucibus rhoncus. Quisque malesuada
              semper dolor, ut placerat nulla aliquet nec.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
