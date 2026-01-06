import './botao-estilos.css'

export function Botao ({children}){
    return(
        <button className='btn-estilo'>
            {children}
        </button>
    )
}