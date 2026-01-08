import './formulario-de-evento.estilos.css'
import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Label } from '../Label'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'

export function FormularioDeEvento({ temas }) {
    return (
        <form className="form-evento">
            <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="capa">Qual é o nome do evento?</Label>
                    <CampoDeEntrada type="text" id="capa" placeholder="Summer dev Hits" name="capa" />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="nomeEvento">Qual é o endereço da imagem de capa?</Label>
                    <CampoDeEntrada type="text" id="nomeEvento" placeholder="http://..." name="nomeEvento" />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="dataEvento">Data Do Evento</Label>
                    <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
                </CampoDeFormulario>
                <CampoDeFormulario>
                    <Label htmlFor="tema">Tema Do Evento</Label>
                    <ListaSuspensa id="tema" name="tema" itens={temas} />
                </CampoDeFormulario>
            </div>
            <div className="actions">
                <Botao>Criar Evento</Botao>
            </div>
        </form>
    )
}
