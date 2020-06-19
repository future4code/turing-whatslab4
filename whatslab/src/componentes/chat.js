import React from 'react'

export class Chat extends React.Component {
  state = {
    remetente: " ",
    usuario: " ",
  }

  onChangeRemetente = event => {
    this.setState({remetente: event.target.value})
  }

  onChangeUsuario = event => {
    this.setState({usuario: event.target.value})
  }

  onClickBotaoPegaMensagens = () => {
    console.log(this.state.remetente)
    console.log(this.state.usuario)
    this.setState({ remetente: "", usuario: "" })
  }

}