import React from 'react'
import  {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'


const App = () => {

    // instruções para App não de interface ( de interface deve estar dentro de return), para o componente Feedback
    const textoOK = "Já chegou"
    const textoNOK = "Ainda não chegou"
    const funcaoOK = () => alert ("Agradecemos a confirmação!") // alerta na tela, funcao de callback () mesmo que nao tenha parâmetro, e depois a arrow function 
    // funcao alert ja vem do java script 
    const funcaoNOK = () => alert ("Verificaremos o ocorrido!")
const componenteFeedback = <Feedback textoOK={textoOK} funcaoOK={funcaoOK} textoNOK={textoNOK} funcaoNOK={funcaoNOK}/>; // guarda as instancias do feedback

    // JSX = Syntax sugar para escrever código JavaScript bruto, tradutor babel
    return (
        // container principal
        //container por padrão considerea o breakpoint, sm que representa a tela pequena
        //mt margem top, mb margem bottom
        // duas unidades de medida do bootstrap, conforme tamanho da tela
        <div className="container border rounded mt-2">

            {/* linha para o título */}
            <div className="row border-bottom m-2">
                {/*h1: tamanho maior e em negrito*/}
                {/*display-5: espaço de 5 das 12 colunas que divide a tela*/}
                
                <h1 className="display-5 text-center">Seus pedidos</h1>

                {/* linha para o primeiro pedido pedido*/}
                <div className="row">
                
                    {/* controle de colunas para responsividade*/}
                    {/*sm é aproximadamente 570px de largura, então se a tela for menor que isso, a coluna ocupará toda a largura disponível, se chegou ocupa 8 espaços (col-sm-8)*/}
                    {/*md é aproximadamente 720px de largura, então se a tela for menor que isso, a coluna ocupará toda a largura disponível, se chegou ocupa 6 espaços (col-md-6)*/}
                    <div className="col-sm-8 col-md-6 m-2">
                    <Cartao cabecalho="22/04/2021">
                        <Pedido icone="fas fa-hdd fa-2x" titulo="SSD" descricao="SSD Kingston A400 - SATA"/>
                        {componenteFeedback}
                    </Cartao>
                    </div>
                </div>
            
                {/* linha para o segundo pedido pedido*/}
                <div className="row">
                    {/* controle de colunas para responsividade*/}
                    <div className="col-sm-8 col-md-6 m-2">
                        {/* cabeçalho do cartão */}
                        <Cartao cabecalho="20/04/2021">
                            <Pedido icone="fas fa-book fa-2x" titulo="Livro" descricao="Concrete Mathematics - Donald Knuth" />
                        </Cartao>
                        {componenteFeedback}
                    </div>
                </div>
                <div className="row">
                    {/* controle de colunas para responsividade*/}
                    <div className="col-sm-8 col-md-6 m-2">
                        {/* cartão */}
                        <Cartao cabecalho="21/01/2021">
                            <Pedido icone="fas fa-laptop fa-2x" titulo="Notebook"
                                descricao="Notebook Dell Inspiron 15 - 8GB RAM" />
                        </Cartao>
                        {componenteFeedback}
                    </div>
                </div>
            </div> 
        </div>
    );
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)