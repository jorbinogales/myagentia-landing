import React, { useState } from 'react';

function FaqHomeOne({ className }) {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };
    return (
        <>
            <section className={`appie-faq-area pb-95 ${className || ''}`} style={{paddingTop: '150px', backgroundImage: null}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Respuestas a Preguntas Frecuentes</h3>
                                <p>Si no encuentras una respuesta a tu pregunta recuerda que puedes contactarnos</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(1)}
                                        className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>¿Qué puede hacer el chatbot por mi empresa?
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                         Nuestro chatbot está diseñado para automatizar y 
                                                         optimizar la atención al cliente, proporcionando 
                                                         respuestas rápidas y precisas a preguntas frecuentes, 
                                                         gestionando solicitudes y mejorando la experiencia del 
                                                         cliente, todo de manera eficiente y 24/7.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(2)}
                                        className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>¿Es fácil integrar el chatbot en mi sistema?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        ¡Sí! Nuestra solución de chatbot es altamente 
                                                        compatible con una variedad de plataformas y sistemas.
                                                        Proporcionamos soporte y documentación detallada para
                                                        garantizar una integración rápida y sin problemas con 
                                                        tu infraestructura actual.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(3)}
                                        className={`accrodion ${showQues === 3 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>¿Puedo personalizar las respuestas del chatbot?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Absolutamente. Nuestro chatbot 
                                                        permite personalizar tanto las respuestas 
                                                        como el flujo de conversación, adaptándose a las necesidades 
                                                        específicas de tu negocio. Puedes ajustar las interacciones para 
                                                        que se alineen con tu marca y servicio al cliente.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(4)}
                                        className={`accrodion ${showQues === 4 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>¿El chatbot es capaz de manejar conversaciones complejas o solo preguntas simples?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 4 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Los agentes está basado en inteligencia artificial, lo que le permite manejar 
                                                        una amplia gama de interacciones, desde preguntas simples hasta conversaciones más complejas.
                                                         Además, se puede escalar según las necesidades específicas de tu negocio, 
                                                         y puede derivar casos complejos a agentes humanos si es necesario.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    No encuentras la respuesta?{' '}
                                    <a href="mailto:coffeerecoded@gmail.com">Contactanos</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
