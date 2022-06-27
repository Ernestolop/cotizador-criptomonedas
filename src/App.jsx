import {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Formulario from './components/Formulario';
import imagenCriptos from './img/imagen-criptos.png';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor =  styled.div`
  max-width: 900px;
  width: 90%;
  margin-inline: auto;
  @media (min-width: 992px){
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
`

const Heading =  styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-block-start: 5.5rem;
  margin-block-end: 3.625rem;
  font-size: 2.125rem;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }

`

const Imagen =  styled.img`
  max-width: 400px;
  width: 80%;
  margin: 6.25rem auto 0 auto;
  display: block;
`


function App() {

  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCotizacion({});
        setCargando(true);
        const {criptomoneda, moneda} = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCotizacion(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false)
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={imagenCriptos} alt="Imagen criptomonedas" />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario 
        setMonedas={setMonedas}
        />
        {cargando && <Spinner/>}
        {cotizacion.PRICE &&  <Resultado 
        cotizacion={cotizacion}
        />}
      </div>
    </Contenedor>
  )
}

export default App
