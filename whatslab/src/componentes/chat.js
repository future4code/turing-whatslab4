import React from 'react'

export class Chat extends React.Component {
  state = {
    usuario: " ",
    mensagem: ""
  }

  onChangeUsuario = event => {
    this.setState({usuario: event.target.value})
  }

  onClickBotaoPegaMensagens = () => {
    console.log(this.state.usuario)
    this.setState({ usuario: "" })
  }

}