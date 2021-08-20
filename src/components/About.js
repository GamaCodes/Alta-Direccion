import React from "react";
import Typography from "@material-ui/core/Typography";

export default function MediaCard() {
  return (
    <div className="about-contain" id="acerca">
      <img className="about-media" src="/cuadro.jpg" alt="media" />
      <section className="about-pa">
        <Typography gutterBottom variant="h5" component="h2">
          ¿Por qué elegirnos?
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Somos una firma de servicios profesionales multidisciplinar cuya
          misión es crear valor y contribuir al desarrollo sostenible de la
          sociedad, las organizaciones y las personas.
        </Typography>

        <Typography variant="body2" color="textPrimary" component="p">
          Estamos cerca de nuestros clientes y nos comprometemos con ellos
          ofreciendo servicios de calidad en auditoría, asesoramiento legal y
          fiscal, consultoría y corporate. Nos caracteriza nuestra flexibilidad
          y disponibilidad permanente.
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          Garantizamos la búsqueda de la excelencia a través de la calificación
          y la experiencia de nuestros equipos profesionales, implementando una
          metodología de trabajo rigurosa y eficiente.
        </Typography>

        <Typography variant="body2" color="textPrimary" component="p">
          Desde 2016, trabajamos con la primordial causa de elevar la calidad de
          cada potencial empresario, pequeñas y medianas empresas para una
          proyección mayor y lograr mayor competitividad. Lo que deriva en
          progreso para nuestro país.
        </Typography>
      </section>
    </div>
  );
}
