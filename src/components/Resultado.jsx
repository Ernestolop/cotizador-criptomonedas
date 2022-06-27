import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    margin-block-start: 1.875rem;
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    align-items: center;
    img {
        display: block;
        width: 7.5rem;
    }
`
const Precio = styled.p`
    font-size: 1.5rem;
`
const Parrafo = styled.p`
    font-size: 1.125rem;
`
const Span = styled.span`
    font-weight: 700;
`

const Resultado = ({cotizacion}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion;
  return (
    <Contenedor>
        <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Criptomoneda" />
        <div>
            <Precio>El precio es de: <Span>{PRICE}</Span></Precio>
            <Parrafo>Precio más alto del día: <Span>{HIGHDAY}</Span></Parrafo>
            <Parrafo>Precio más bajo del día: <Span>{LOWDAY}</Span></Parrafo>
            <Parrafo>Variación últimas 24 horas: <Span>{CHANGEPCT24HOUR}</Span></Parrafo>
            <Parrafo>Última actualización: <Span>{LASTUPDATE}</Span></Parrafo>
        </div>
    </Contenedor>
  );
};

export default Resultado;