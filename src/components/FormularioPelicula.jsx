import { Form, Button } from "react-bootstrap";
import GrillaPeliculas from "./GrillaPeliculas";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const FormularioPelicula = () => {
  const peliculasLocalstorage = JSON.parse(localStorage.getItem('peliculasKey')) || []
  const [peliculas, setPeliculas] = useState(peliculasLocalstorage)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  
  useEffect(()=>{
    localStorage.setItem('peliculasKey', JSON.stringify(peliculas))
  })

  const posteriorValidacion = (pelicula) => {
    //todo agregar al objeto pelicula un ID unico 
    pelicula.id = crypto.randomUUID() // eusud237467-asdgas2-asfhsd343
    console.log(pelicula);
    reset()
    //almacenar la pelicula creada
    setPeliculas([...peliculas, pelicula])
  };

  return (
    <section>
      <Form className="border p-3" onSubmit={handleSubmit(posteriorValidacion)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre pelicula</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Titanic"
            {...register("nombrePelicula", {
              required: "El nombre de la pelicula es un dato obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre de la pelicula debe contener como minimo 2 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "El nombre de la pelicula debe contener como maximo 100 caracteres",
              },
            })}
          />
         
          <Form.Text className="text-danger">
            {errors.nombrePelicula?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: descripcion de Titanic"
            as="textarea"
            rows={3}
            {...register('descripcion',{
              required: "La descripcion de la pelicula es un dato obligatorio",
              minLength: {
                value: 15,
                message:
                  "La descripcion debe contener como minimo 15 caracteres",
              },
              maxLength: {
                value: 250,
                message:
                  "La descripcion  debe contener como maximo 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Categoria</Form.Label>
          <Form.Select aria-label="Default select example" {...register('categoria',{
            required: "La categoria de la pelicula es un dato obligatorio",
          })}>
            <option value=''>Seleccione una categoria</option>
            <option value="Terror">Terror</option>
            <option value="Comedia">Comedia</option>
            <option value="Aventura">Aventura</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <GrillaPeliculas peliculas={peliculas}></GrillaPeliculas>
    </section>
  );
};

export default FormularioPelicula;
