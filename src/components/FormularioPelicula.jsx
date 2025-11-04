import { Form, Button } from "react-bootstrap";
import GrillaPeliculas from "./GrillaPeliculas";

const FormularioPelicula = () => {
  return (
    <section>
      <Form className="border p-3">
        <Form.Group className="mb-3">
          <Form.Label>Nombre pelicula</Form.Label>
          <Form.Control type="text" placeholder="Ej: Titanic" />
          <Form.Text className="text-danger">
            Error al cargar pelicula
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: descripcion de Titanic"
            as="textarea"
            rows={3}
          />
          <Form.Text className="text-danger">
            Error al cargar pelicula
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Categoria</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Seleccione una categoria</option>
            <option value="Terror">Terror</option>
            <option value="Comedia">Comedia</option>
            <option value="Aventura">Aventura</option>
          </Form.Select>
          <Form.Text className="text-danger">
            Error al cargar pelicula
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <GrillaPeliculas></GrillaPeliculas>
    </section>
  );
};

export default FormularioPelicula;
