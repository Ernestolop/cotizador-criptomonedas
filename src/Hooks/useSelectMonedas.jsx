import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 1.125rem;
    padding: 0.875rem;
    border-radius: 10px;
`

const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label forHtml="">{label}</Label>
            <Select value={state}
            onChange={e => setState(e.target.value)}
            id="">
                <option value="">--Seleccione--</option>
                {opciones.map(opcion => (
                    <option 
                    value={opcion.id}
                    key={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </Select>
        </>
    );
    return [state, SelectMonedas];
};

export default useSelectMonedas;