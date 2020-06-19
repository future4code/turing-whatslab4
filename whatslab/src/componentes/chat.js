import React from 'react'

export class Chat extends React.Component {
  state = {
    chat:[
      {
      usuario: '',
      mensagem: ''
      }
    ],
    valorUsuario: "",
    valorMensagem:""
  }


  onClickBotaoPegaMensagens = () => {
    const newChat = {
      usuario: this.state.valorUsuario,
      mensagem: this.state.valorMensagem
    }
    const novoChat = [...this.state.chat, newChat]

    this.setState({chat: novoChat })
  
  }
  onChangeUsuario = (event) => {
    this.setState({valorUsuario: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({valorMensagem: event.target.value})
  }

  render(){
    const renderizaChat = this.state.chat.map((msg)=>{
      return (
      <p>{msg.usuario}: {msg.mensagem}</p>
      )
    })
    return(
      <div className='Chat'>
        <div className='saida'>
          <div>{renderizaChat}</div>
        </div>
        <div className='entrada'>
          <input onChange={this.onChangeUsuario} value={this.state.usuario} placeholder='Usuário'></input>
          <input onChange={this.onChangeMensagem} value={this.state.mensagem} placeholder='Mensagem'></input>
          <button onClick={this.onClickBotaoPegaMensagens}>Enviar</button>
        </div>
      </div>
    )
  }
}