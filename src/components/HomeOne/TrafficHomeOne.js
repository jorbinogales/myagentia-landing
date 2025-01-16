import React from "react";

function TrafficHomeOne({ className }) {
  return (
    <section className={`appie-traffic-area pt-140 pb-180 ${className || ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="appie-traffic-title">
              <h3 className="title">Pantalla de reportes avanzados.</h3>
              <br></br>
              <p>
                Obtén información clave de tus agentes y clientes, realiza un seguimiento del rendimiento y toma decisiones basadas en datos en tiempo real.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="appie-traffic-service mb-30">
                  <div className="icon">
                    <i className="fal fa-check" />
                  </div>
                  <h5 className="title">Diseñado Cuidadosamente</h5>
                  <p>Desarrollado para cubrir las necesidades de tu negocio con funciones intuitivas y eficientes.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="appie-traffic-service item-2 mb-30">
                  <div className="icon">
                    <i className="fal fa-check" />
                  </div>
                  <h5 className="title">Elige Tu Aplicación</h5>
                  <p>Integra nuestras soluciones con las herramientas que ya utilizas, sin complicaciones.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="appie-traffic-service item-3">
                  <div className="icon">
                    <i className="fal fa-check" />
                  </div>
                  <h5 className="title"> Sincronización Perfecta</h5>
                  <p>Mantén toda tu información actualizada con sincronización fluida en tiempo real..</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="appie-traffic-service item-4">
                  <div className="icon">
                    <i className="fal fa-check" />
                  </div>
                  <h5 className="title">Interacción Intuitiva</h5>
                  <p>Ofrecemos una experiencia simple y eficiente para mejorar la comunicación con tus clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="traffic-thumb ">
        <img
          className="wow animated fadeInRight"
          data-wow-duration="2000ms"
          data-wow-delay="200ms"
          src="/assets/images/tablet.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default TrafficHomeOne;
