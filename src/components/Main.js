import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className="main-contain">
      <Typography gutterBottom variant="h5" component="h2">
        ¿Qué ofrecemos?
      </Typography>
      <Typography variant="body2" color="textPrimary" component="p">
        La multidisciplinariedad y experiencia en compartir proyectos entre
        distintos especialistas dan a nuestras actuaciones un valor altamente
        operativo, ofreciendo servicios desde una visión global y de calidad.
      </Typography>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Consultoría</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <section className="main-section">
              <Typography variant="body2" color="textPrimary" component="p">
                Aportamos soluciones con una visión experimentada y orientada a
                la obtención de resultados.
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Y lo hacemos desde la proximidad, con los equipos para alcanzar
                resultados excelentes.
              </Typography>

              <Typography variant="body2" color="textPrimary" component="p">
                Con la experiencia de nuestros consultores
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Habituados a trabajar en entornos complejos. Aprovechando la
                experiencia en otras empresas semejantes a la tuya para hacer
                fácil lo difícil. Con los costos óptimos para cada
                circunstancia.
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Con una visión multidisciplinaria
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Innovadora, experimentada y orientada a la obtención de
                resultados eficaces. Estamos preparados para entender tus
                necesidades de consultoría, sean de sistemas de gestión,
                estudios actuariales, investigación de mercados, leasing, BPO,
                recursos humanos, de mejora organizativa, de estrategia, y un
                largo etcétera.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nuestros economistas, contadores, ingenieros, abogados,
                psicólogos, informáticos, y el resto de profesionales, están
                preparados para aportarte las mejores soluciones, con una visión
                multidisciplinar, para qué la solución propuesta funcione con
                eficacia.
              </Typography>
            </section>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Servicio Legal</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <section className="main-section">
              <Typography variant="body2" color="textPrimary" component="p">
                Proporcionamos un servicio de asesoramiento jurídico para
                ayudarle a ejercer sus derechos legales.
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Asesoría y Planeación Fiscal
              </Typography>
              <ul>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Diseño y ejecución de estructuras jurídicas para optimizar
                    el impacto de la carga tributaria.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Opiniones jurídicas sobre la interpretación, aplicación y
                    cumplimiento de las leyes, reglamentos y reglas misceláneas
                    en materia fiscal.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Confirmaciones de criterio ante las autoridades fiscales.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Asesoría, prevención y asistencia legal durante la práctica
                    de auditorías de autoridades fiscales federales y locales.
                  </Typography>
                </li>
              </ul>
            </section>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Servicio Corporativo
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <section className="main-section">
              <Typography variant="body2" color="textPrimary" component="p">
                Ofrecemos asesoría corporativa a empresas nacionales e
                internacionales en el desarrollo e implementación de estrategias
                corporativas en reestructuraciones, fusiones y escisiones,
                elaboración y análisis de contratos, así como auditorías de
                compraventa, Due diligence y contratación mercantil.
              </Typography>

              <ul>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Constitución de sociedades.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Elaboración de contratos con los requerimientos de la
                    empresa.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Asambleas de accionistas y libros corporativos.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Auditorías de instrumentos corporativos y venta de
                    sociedades.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Contratación mercantil.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Asistencia jurídica a los órganos de administración de la
                    sociedad y esquemas de protección patrimonial para socios y
                    accionistas.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Operaciones societarias de todo tipo, (aumentos y
                    reducciones de capital social, cesión global de activos y
                    pasivos, escisiones, fusiones, disoluciones y liquidaciones,
                    entre otros.)
                  </Typography>
                </li>
              </ul>
            </section>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Servicio Administrativo
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <section className="main-section">
              <Typography variant="body2" color="textPrimary" component="p">
                En Consultores Definidos en Conceptos de Alta Dirección
                ofrecemos diversos servicios en materia de administrativa
                incluyendo asesoría con relación a procedimientos y trámites
                ante las diversas autoridades administrativas federales o
                locales.
              </Typography>

              <ul>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Impugnación eficaz en contra de resoluciones de las diversas
                    dependencias y entidades de la Administración Pública
                    Federal y Local.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Interpretación y cumplimiento de contratos de obra pública.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Asesoría en adquisiciones y arrendamientos o servicios
                    contratados con dependencias gubernamentales.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Defensa contra responsabilidades administrativas de los
                    servidores públicos y resoluciones en materia de
                    fiscalización y rendición de cuentas.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Impugnación de infracciones y sanciones administrativas.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Atención a expropiaciones.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Prácticas monopólicas.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Aplicación de NOM's.
                  </Typography>
                </li>
              </ul>
            </section>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Servicio Laboral-Patronal
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <section className="main-section">
              <Typography variant="body2" color="textPrimary" component="p">
                En Consultores Definidos en Conceptos de Alta Dirección
                ofrecemos los siguientes servicios en el área de derecho
                laboral:
              </Typography>

              <Typography variant="body2" color="textPrimary" component="p">
                Derecho individual
              </Typography>

              <ul>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Elaboración, revisión y actualización de contratos
                    individuales de trabajo, requisitos, contratos por tiempo y
                    obra determinada, sus diferencias, su administración,
                    vencimientos, contratos de trabajos especiales, elaboración
                    de documentación laboral obligatoria, reglamento interior de
                    trabajo, contrato colectivo de trabajo, integración de
                    comisiones (blindaje laboral).
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Pago de prestaciones legales y extralegales y su integración
                    al salario.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Litigio en conflictos individuales ante las juntas locales y
                    federales de conciliación y arbitraje, procuraduría de la
                    defensa del trabajo, en cualquier parte del país.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Actualización constante y permanente de criterios emitidos
                    en materia laboral.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Juicios de amparo en materia laboral ante juzgados de
                    distrito y tribunales colegiados de circuito, en cualquier
                    parte de la república.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Despidos injustificados y rescisión de la relación laboral.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Estrategias de coordinación entre las áreas laborales y
                    penales de las empresas.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Coordinación entre las áreas administrativas para
                    perfeccionar la relación laboral con los trabajadores.
                  </Typography>
                </li>
              </ul>
              <Typography variant="body2" color="textPrimary" component="p">
                Derecho Colectivo
              </Typography>

              <ul>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Revisiones salariales y contractuales.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Conflictos de titularidad.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Procedimientos de naturaleza económica: reducción de
                    salarios y prestaciones.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Terminación de las relaciones colectivas de trabajo.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Suspensión temporal de las relaciones colectivas de trabajo.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Huelga.
                  </Typography>
                </li>
              </ul>
            </section>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Finanzas Corporativas
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <section className="main-section">
              <Typography variant="body2" color="textPrimary" component="p">
                Asistimos a las empresas en temas de asesoramiento financiero y
                operaciones corporativas.
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Consultores Definidos en Conceptos de Alta Dirección Corporate
                es una firma de referencia en el sector del asesoramiento
                financiero y las operaciones corporativas. Prestamos apoyo
                integral en las transacciones relacionadas con la compraventa de
                empresas y negocios. Contamos con un equipo multidisciplinar de
                profesionales altamente especializado en operaciones de fusiones
                y adquisiciones, reestructuraciones operativas y financieras,
                valoración de empresas, búsqueda de inversores, etc.
              </Typography>

              <Typography variant="body2" color="textPrimary" component="p">
                Metodología.
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Nuestra colaboración se inicia desde la identificación de la
                necesidad del cliente, la planificación estratégica del proceso,
                el análisis riguroso de la realidad de la empresa, el estudio
                del sector de actividad, la localización de oportunidades de
                inversión/desinversión, la negociación y el asesoramiento en la
                transacción y el cierre final de la misma.
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Apoyo estratégico.
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Asistimos a las empresas desde el mayor de los compromisos
                profesionales conscientes de la importancia estratégica de las
                decisiones corporativas. Garantizamos una confidencialidad y
                discreción absolutas en los procesos en los que participamos.
                Nuestros profesionales del área de Corporate cuentan con la
                experiencia y especialización que la prestación de este tipo de
                servicios exige.
              </Typography>
            </section>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Reestructuración de Deuda
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <section className="main-section">
              <Typography variant="body2" color="textPrimary" component="p">
                Asesoramos a nuestros clientes para lograr una solución global
                para su endeudamiento bancario, en procesos complejos, con
                múltiples entidades financieras y posiciones iniciales en
                ocasiones heterogéneas.
              </Typography>

              <ul>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Análisis y diagnóstico de la situación inicial.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Colaboración en la elaboración del plan de negocio.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Diseño de la propuesta de refinanciación.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Negociación con las entidades financieras.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Cierre de la operación.
                  </Typography>
                </li>
              </ul>
            </section>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Planes de Negocio y Viabilidad
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <section className="main-section">
              <Typography variant="body2" color="textPrimary" component="p">
                Colaboramos con nuestros clientes en la elaboración de planes de
                Negocio y de viabilidad que incluyen:
              </Typography>

              <ul>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Análisis del mercado.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Análisis de la empresa.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Estudio de la competencia.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Proyecciones económico-financieras.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Estimación de los flujos de caja proyectados - necesidades
                    de inversión.
                  </Typography>
                </li>
              </ul>
            </section>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Fusiones y Adquisiciones
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <section className="main-section">
              <Typography variant="body2" color="textPrimary" component="p">
                Asesoramos en todo tipo de operaciones corporativas: compraventa
                de empresas o activos, fusiones, operaciones con fondos de
                capital riesgo (LBOs, MBOs, MBIs, etc.).
              </Typography>

              <ul>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Diseño y estrategia de la operación.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Análisis de mercado.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Análisis de la empresa y aproximación al valor de la misma.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Elaboración del Memorándum Informativo.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Identificación y análisis de compradores/vendedores
                    potenciales.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Dirección, coordinación y asesoramiento financiero integral
                    durante todo el proceso de negociación y cierre.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Asesoramiento en procedimientos de verificación (due
                    diligence).
                  </Typography>
                </li>
              </ul>
            </section>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
