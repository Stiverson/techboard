import './formulario-de-evento.estilos.css'
import { TituloFormulario } from "../TituloFormulario"
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Label } from '../Label'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'

export function FormularioDeEvento () {
    return(
        <form className='form-evento'>
           <TituloFormulario> 
            Preencha para criar um evento: 
           </TituloFormulario>
            <div className='campos'>
                <CampoDeFormulario>
                <Label htmlFor='nomeEvento'>
                    Qual é o nome do evento?
                </Label>
                <CampoDeEntrada
                type='text'
                id='nomeEvento'
                placeholder='Summer dev Hits'
                name="nomeEvento"
                />
            </CampoDeFormulario>
            <CampoDeFormulario>
                <Label htmlFor='dataEvento'>
                    Data Do Evento
                </Label>
                <CampoDeEntrada
                type='date'
                id='dataEvento'
                name="dataEvento"
                />
            </CampoDeFormulario>
                        <CampoDeFormulario>
                <Label htmlFor='dataEvento'>
                    Tema Do Evento
                </Label>
            <ListaSuspensa/>
            </CampoDeFormulario>
            </div>
            <div className='actions'>
                <Botao>
                    Criar Evento
                </Botao>
            </div>
        </form>
    )
}  
