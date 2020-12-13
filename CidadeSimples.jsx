import React, {Component} from 'react'

const cidadeS=['Fortaleza','Quixadá','Juazeiro','Limoeiro']

export default class CidadeSimples extends Component{

    constructor(props){
        super(props)
        this.state={for: 0, qui: 0, jua: 0, lim: 0, maior: 0, menor: 0}
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.for !== this.state.for ||
           prevState.qui !== this.state.qui ||
           prevState.jua !== this.state.jua ||
           prevState.lim !== this.state.lim){
    
            const cidades=[this.state.for, this.state.qui, this.state.jua, this.state.lim]
            let localMaior=this.state.maior
            for (let i=0;i<cidades.length;i++){
                if (cidades[i]>localMaior)
                    localMaior=cidades[i]
            }
            this.setState({maior:localMaior})

            let localMenor=this.state.maior
            for (let i=0;i<cidades.length;i++){
                if (cidades[i]<localMenor)
                    localMenor=cidades[i]
            }
            this.setState({menor:localMenor})
        }
    }

    maisVotos(){
        let saida = ''
        const cidades = [this.state.for, this.state.qui, this.state.jua, this.state.lim]
        for (let i = 0; i < cidades.length; i++){
            if(cidades[i]===this.state.maior) saida+=cidadeS[i]+' '
        }
        return saida
    }

    menosVotos(){
        let saida = ''
        const cidades = [this.state.for, this.state.qui, this.state.jua, this.state.lim]
        for (let i = 0; i < cidades.length; i++){
            if(cidades[i]===this.state.menor) saida+=cidadeS[i]+' '
        }
        return saida
    }

    render() {

        return (
            <div>
                <h2>Fortaleza: {this.state.for}</h2>
                <h2>Quixadá: {this.state.qui}</h2>
                <h2>Juazeiro: {this.state.jua}</h2>
                <h2>Limoeiro: {this.state.lim}</h2>
                <h4>Maior: {this.state.maior} : {this.maisVotos()}</h4>
                <h4>Menor: {this.state.menor} : {this.menosVotos()}</h4>
                <button onClick={() => this.setState({ for: this.state.for + 1 })} >Fortaleza</button>
                <button onClick={() => this.setState({ qui: this.state.qui + 1 })}>Quixadá</button>
                <button onClick={() => this.setState({ jua: this.state.jua + 1 })}>Juazeiro</button>
                <button onClick={() => this.setState({ lim: this.state.lim + 1 })}>Limoeiro</button>
            </div>
        )
    }
}