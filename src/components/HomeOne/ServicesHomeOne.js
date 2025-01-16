import React from 'react';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                Agentes 24/7 <br /> para  tus clientes
                            </h3>
                            <p>Optimiza la atención al cliente con nuestros chatbots avanzados, diseñados para ofrecer un servicio eficiente y personalizado.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/1.png' alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">Aprendizaje</h4>
                            <p>Proporciona información a tus agentes en cualquier momento.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/2.png' alt="" />
                                <span>2</span>
                            </div>
                            <h4 className="appie-title">Resultados</h4>
                            <p>Analiza la satisfacción de tus clientes en base a las respuestas</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/3.png' alt="" />
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">Seguridad</h4>
                            <p>El aprendizaje de tus Agentes IA siempre sera confidencial y seguro</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/4.png' alt="" />
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">Soporte</h4>
                            <p>Mejoras y mantenimientos para tus bots en cualquier momento</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
