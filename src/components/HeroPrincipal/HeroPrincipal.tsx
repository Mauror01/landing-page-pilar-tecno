import { Button, Col, Container, Row } from "react-bootstrap";

const HeroPrincipal = () => {
  return (
    <section id="inicio" className="py-5">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={7}>
            <p className="text-uppercase fw-semibold mb-2">Nexo Tech</p>

            <h1 className="display-4 fw-bold">
              Aprendé. Construí. Compartí.
            </h1>

            <p className="lead">
              Recursos simples para seguir creciendo en tecnología y poner en
              práctica lo que aprendés.
            </p>

            <Button variant="primary" href="#recursos">
              Explorar recursos
            </Button>
          </Col>

          <Col md={5}>
            <div className="border rounded-4 p-4 shadow-sm">
              <h2 className="h4">Tu espacio para seguir aprendiendo</h2>

              <p className="mb-0">
                Frontend, backend y datos reunidos en un mismo lugar.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroPrincipal;