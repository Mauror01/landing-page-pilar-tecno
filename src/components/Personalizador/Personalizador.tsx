import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface PersonalizadorProps {
  colorElegido: string;
  onCambiarColor: (color: string) => void;
}

const Personalizador = ({
  colorElegido,
  onCambiarColor,
}: PersonalizadorProps) => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <Button
        variant="outline-primary"
        onClick={() => setMostrarModal(true)}
      >
        Personalizar experiencia
      </Button>

      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Elegí un color</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Label>Color de preferencia</Form.Label>

          <Form.Control
            type="color"
            value={colorElegido}
            onChange={(event) => onCambiarColor(event.target.value)}
          />

          <p className="mt-3 mb-0">
            Color seleccionado: <strong>{colorElegido}</strong>
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setMostrarModal(false)}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Personalizador;