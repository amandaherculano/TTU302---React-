import React from 'react'
import  {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
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
                        <div className="card">
                            {/* cabeçalho do cartão */}
                            <div className="card-header text-muted">22/04/2021</div>
                                {/* corpo do cartão */}
                                <div className="card-body d-flex">
                                    {/*d-flex: agrupar de forma dinamica os itens dentro do container*/}
                                    <div className="d-flex align-items-center">
                                        {/* ícone do produto: fas usando o font awesome, fa-hdd qual icone quer usar */}
                                        <i className="fas fa-hdd fa-2x"></i>
                                    </div>
                                    {/* flex-grow 1: tomar espaço remanescente */}
                                    <div className="flex-grow-1 ms-2 border">
                                        <h4 className="text-center">SSD</h4>
                                        <p className="text-center">SSD Kingston A400 - SATA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* linha para o segundo pedido pedido*/}
                <div className="row">
                    {/* controle de colunas para responsividade*/}
                    <div className="col-sm-8 col-md-6 m-2">
                        {/* cartão */}
                        <div className="card">
                            {/* cabeçalho do cartão */}
                            <div className="card-header text-muted">20/04/2021</div>
                            {/* corpo do cartão */}
                            <div className="card-body d-flex">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-book fa-2x"></i>
                                </div>
                                {/* flex-grow 1: tomar espaço remanescente */}
                                <div className="flex-grow-1 ms-2 border">
                                    <h4 className="text-center">Livro</h4>
                                    <p className="text-center">Concrete Mathematics - Donald Knuth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* controle de colunas para responsividade*/}
                    <div className="col-sm-8 col-md-6 m-2">
                        {/* cartão */}
                        <div className="card">
                            {/* cabeçalho do cartão */}
                            <div className="card-header text-muted">25/12/2021</div>
                            {/* corpo do cartão */}
                            <div className="card-body d-flex">
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-laptop fa-2x"></i>
                                </div>
                                {/* flex-grow 1: tomar espaço remanescente */}
                                <div className="flex-grow-1 ms-2 border">
                                    <h4 className="text-center">Notebook</h4>
                                    <p className="text-center">Dell Inspiron 15 - 8GB RAM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    );
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)