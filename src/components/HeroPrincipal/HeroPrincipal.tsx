import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Personalizador from "../Personalizador/Personalizador";

const HeroPrincipal = () => {
    const [colorElegido, setColorElegido] = useState("#0d6efd");
    
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

            <div className="d-flex gap-2 flex-wrap">
                <Button
                    href="#recursos"
                    style={{
                        backgroundColor: colorElegido,
                        borderColor: colorElegido,
                    }}
                >
                Explorar recursos
                </Button>

                <Personalizador
                    colorElegido={colorElegido}
                    onCambiarColor={setColorElegido}
                />
                </div>
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