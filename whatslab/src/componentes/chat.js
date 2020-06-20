import React from 'react';
import styled from 'styled-components';

const DivPai = styled.div `
  margin: 0 auto;
  width: 30.2%;
  border: solid 1px black; 
  height: 100vh; 
`
const InputUser = styled.input`
  width: 40%;
`
const InputMsg = styled.input`
  width: 100%;
`
const Enviar = styled.button`
  width: 20%;
`
const CaixaEntrada = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
`
const CaixaSaida = styled.div`
  bottom: 0;
  position: fixed;
  padding: 20px;
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
    this.setState({valorUsuario: ''});
    this.setState({valorMensagem: ''});
  };

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
        <CaixaSaida>
          <div>{renderizaChat}</div>
        </CaixaSaida>
        <CaixaEntrada>
          <InputUser 
            onChange={this.onChangeUsuario} 
            value={this.state.usuario} 
            placeholder='Usuário'>
          </InputUser>
          <InputMsg 
            onChange={this.onChangeMensagem} 
            value={this.state.mensagem} 
            placeholder='Mensagem'>
          </InputMsg>
          <Enviar onClick={this.onClickBotaoPegaMensagens}>Enviar</Enviar>
        </CaixaEntrada>
      </DivPai>
    );
  };
};