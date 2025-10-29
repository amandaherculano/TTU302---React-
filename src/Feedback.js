// para ver que podemos enviar uma função como prop

import React from 'react';
const Feedback = props => {
 return (
    <div className="d-flex justify-content-evenly m-2">
        {/* justify content evenly justificar o conteudo que esta dentro da div */}
        <button
            // personalizando o botão com bootstrap
            type="button" // tipo do botão padrão 
            onClick={props.funcaoOK} //propriedade onClick para chamar a função passada como prop
            className="btn btn-primary">
            {props.textoOK}
        </button>
        <button
            type="button"
            onClick={props.funcaoNOK}
            className="btn btn-danger" // btn-danger botão vermelho
            >  
            {props.textoNOK}
        </button>
    </div>
 )
}
export default Feedback;