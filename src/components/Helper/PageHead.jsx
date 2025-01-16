import Head from "next/head";
import React from "react";
function PageHead(props) {
    const { title } = props;
    const { metaDes } = props;
    const { favicon } = props;
    return (
        <Head>
            <title>{title || 'myagentia'}</title>
            <meta name="description" content={metaDes||`myagentia – Aplicacion web que permite crear e integrar agentes entrenados con IA para su negocio. Capaz de realizar ventas y solucionar dudas a sus clientes`} />
            <link rel="icon" href="/assets/images/icon.png" />
        </Head>
    );
}

export default PageHead;