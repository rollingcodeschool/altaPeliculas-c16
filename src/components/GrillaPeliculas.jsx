import { Row } from "react-bootstrap";
import CardPelicula from "./CardPelicula";

const GrillaPeliculas = ({peliculas}) => {
  return (
    <Row xs={1} md={2} lg={4} className="mt-4 g-3">
      {
        peliculas.map((pelicula)=> <CardPelicula key={pelicula.id} pelicula={pelicula}></CardPelicula>)
      }
       
    </Row>
  );
};

export default GrillaPeliculas;
