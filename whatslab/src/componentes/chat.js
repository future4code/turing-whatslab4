import React from 'react'

export class Chat extends React.Component {
  state = {
    usuario: '',
    mensagem: ''
  }

  onChangeUsuario = (event) => {
    this.setState({usuario: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({mensagem: event.target.value})
  }

  onClickBotaoPegaMensagens = () => {
    console.log(this.state.usuario)
    this.setState({ usuario: "" })
  }

  render(){
    return(
      <div className='Chat'>
        <div className='saida'>
          <p><strong></strong></p>
          <p></p>
        </div>
        <div className='entrada'>
          <input 
            onChange={this.onChangeUsuario} 
            value={this.state.usuario} 
            placeholder='Usuário'>
          </input>
          <input 
            onChange={this.onChangeMensagem} 
            value={this.state.mensagem} 
            placeholder='Mensagem'>
          </input>
          <button onClick={this.onClickBotaoPegaMensagens}>Enviar</button>
        </div>
      </div>
    )
  }
}