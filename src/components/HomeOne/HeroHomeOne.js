import React, { useState } from 'react';

export default function HeroHomeOne({ className }) {
    const [loading, setLoading ] = useState(false);
    const [email, setEmail] = useState('');
    const [sending, setSending] = useState('');
    const [error, setError ] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setSending('')
        setError('')
        try {
          const response = await fetch('/api/sendemail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
    
          if (response.ok) {
            setSending('Correo enviado exitosamente.');
          } else {
            const errorData = await response.json();
            setError(`Error: ${errorData.error}`);
          }
        } catch (error) {
          console.error('Error al enviar la solicitud:', error);
          setError('Error al enviar la solicitud. Inténtalo más tarde.');
        } finally {
          setEmail('')
          setLoading(false)
        }
      };

    return (
        <>
            <section className={`appie-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>Bienvenido a MyAgentIA</span>
                                <h1 className="appie-title">
                                    Optimiza el soporte con chatbots inteligentes.
                                </h1>
                                <p>
                                    Mejora cada interacción con soluciones rápidas, efectivas y personalizadas para tus clientes.
                                </p>
                                <form onSubmit={handleSubmit}>
                                    {
                                        !loading &&
                                        <div className="input-box">
                                            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="myemail@gmail.com" value={email} required/>
                                            <i className="fal fa-envelope" />
                                            <button type="submit">
                                                <i className="fal fa-arrow-right" />
                                            </button>
                                        </div>
                                    } 
                                    {
                                        loading && <span class="loader" style={{marginTop: '25px'}}></span>
                                    }
                                    {   sending &&  <div class="alert success" style={{maxWidth: '380px'}}>
                                                        <span class="alertText text-white">Correo registrado para la demo🎉</span>
                                                    </div>
                                    }
                                    {   error &&  <div class="alert danger" style={{maxWidth: '380px'}}>
                                                        <span class="alertText text-white">Ocurrio un error durante el envio 😩</span>
                                                  </div>
                                    }
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src='/assets/images/landing/phone.png' alt="" style={{maxWidth: 350}} />
                                </div>
                                <div
                                    className="thumb-2 wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src='/assets/images/feature.png' alt="" style={{maxWidth: 200}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src='/assets/images/shape/shape-2.png' alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src='/assets/images/shape/shape-3.png' alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src='/assets/images/shape/shape-4.png' alt="" />
                </div>
            </section>
        </>
    );
}