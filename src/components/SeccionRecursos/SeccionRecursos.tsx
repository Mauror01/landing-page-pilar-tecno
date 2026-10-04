import { Col, Container, Row } from "react-bootstrap";
import RecursoCard from "../RecursoCard/RecursoCard";
import TituloSeccion from "../TituloSeccion/TituloSeccion";

const SeccionRecursos = () => {
  return (
    <section id="recursos" className="py-5 bg-light">
      <Container>
        <TituloSeccion
          titulo="Recursos destacados"
          subtitulo="Explorá distintas áreas y seguí aprendiendo con contenidos simples y prácticos."
        />

        <Row className="g-4">
          <Col md={4}>
            <RecursoCard
              titulo="React"
              descripcion="Construcción de interfaces modernas a partir de componentes reutilizables."
              categoria="Frontend"
            />
          </Col>

          <Col md={4}>
            <RecursoCard
              titulo="Node.js"
              descripcion="Desarrollo de APIs y lógica de servidor utilizando JavaScript."
              categoria="Backend"
            />
          </Col>

          <Col md={4}>
            <RecursoCard
              titulo="Análisis de datos"
              descripcion="Herramientas para explorar, interpretar y comunicar información a partir de datos."
              categoria="Data"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SeccionRecursos;