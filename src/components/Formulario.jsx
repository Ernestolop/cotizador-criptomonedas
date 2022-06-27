import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../Hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const Error =  styled.p`
    background-color: #b7322c;
    color: #fff;
    padding: 0.9375rem;
    font-size: 1.375rem;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const InputSubmit =  styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 0.625rem;
    margin-block-start: 1.875rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25rem;
    border-radius: 5px;
    font-weight: 700;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    const [criptomoneda, SelectCriptoMonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos);

    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json()
            
            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                };
                return objeto;
            });

            setCriptos(arrayCriptos);
        };
        consultarApi();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if([moneda,criptomoneda].includes('')){
            setError(true);
            return;
        };
        setError(false);
        setMonedas({moneda, criptomoneda})
    };

  return (
    <>
        {error && <Error>Complete todas las selecciones</Error>}
        <form onSubmit={handleSubmit}>
            <SelectMonedas />
            <SelectCriptoMonedas />
            <InputSubmit type="submit" value='Cotizar' />
        </form>
    </>
  );
};

export default Formulario;