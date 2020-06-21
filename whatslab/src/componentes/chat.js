import React from 'react';
import styled from 'styled-components';

const DivPai = styled.div`
  width: 37.5%;
  border-radius: 25px;
  border: 5px solid #303438;
  background: #303438;
  margin: 0 auto;
  height: 98.3vh;
  box-shadow: 3px 3px 5px black;
`
const DivFilho = styled.div `
  width: 85%;  
  background: #bed4eb;
  padding: 20px;
  height: 87vh;
  margin: 0 auto;
  margin-top: 13px;
`
const Caixa = styled.input`
  height: 20px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 2px 2px 3px gray;
  outline: 0;
  width: ${props =>{
    if (props.largura === 'media'){
      return '18%'
    }else if (props.largura === 'grande'){
      return '58%'
    }
  }};
`
const Enviar = styled.button`
  box-shadow: 2px 2px 3px gray;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 14%;
  outline: 0;
`
const CaixaEntrada = styled.div`
  position: fixed;
  bottom: 37px;
  display: flex;
  justify-content: space-between;
  width: 32%;
`
const CaixaSaida = styled.div`
  bottom: 63px;
  position: fixed;
`

export class Chat extends React.Component {
  state = {
    chat:[
      {
      usuario: '',
      mensagem: ''
      }
    ],
    valorUsuario: '',
     valorMensagem: ''
  };

  onClickBotaoPegaMensagens = () => {
    const newChat = {
      usuario: this.state.valorUsuario,
      mensagem: this.state.valorMensagem
    };
    const novoChat = [...this.state.chat, newChat];
    this.setState({chat: novoChat });
    this.setState({valorUsuario: '', valorMensagem: ''});
  };

  enviaMensagem = (event) => {
   if(event.key === 'Enter'){
    this.onClickBotaoPegaMensagens()
   }
  }

  onChangeUsuario = (event) => {
    this.setState({valorUsuario: event.target.value});
  };

  onChangeMensagem = (event) => {
    this.setState({valorMensagem: event.target.value});
  };

  render(){
    const renderizaChat = this.state.chat.map((msg)=>{
      return (
      <p><strong>{msg.usuario}</strong>: {msg.mensagem}</p>
      )
    
    })
    return(
    <DivPai>
      <DivFilho>
        <CaixaSaida>
          <div>{renderizaChat}</div>
        </CaixaSaida>
        <CaixaEntrada>
          <Caixa 
            largura={'media'}
            onChange={this.onChangeUsuario}
            value={this.state.usuario} 
            placeholder='Usuário'>
          </Caixa>
          <Caixa 
            largura={'grande'}
            onChange={this.onChangeMensagem} 
            onKeyPress={this.enviaMensagem}
            value={this.state.mensagem} 
            placeholder='Mensagem'>
          </Caixa>
          <Enviar onClick={this.onClickBotaoPegaMensagens}>Enviar</Enviar>
        </CaixaEntrada>
      </DivFilho>
    </DivPai>  
    );
  };
};