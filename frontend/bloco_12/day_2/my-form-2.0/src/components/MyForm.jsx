import React, { Component } from 'react';

class MyForm extends Component {
  constructor() {
    super();

    this.state = {
      allUFs: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchUFs = this.fetchUFs.bind(this);
  }

  componentDidMount() {
    this.fetchUFs();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  async fetchUFs() {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
    );
    const ufData = await response.json();

    this.setState({ allUFs: ufData });
  }

  render() {
    const { allUFs } = this.state;
    return (
      <form action='#' onSubmit={this.handleSubmit}>
        <fieldset>
          <input
            type='text'
            name='fname'
            id='fname'
            placeholder='Nome'
            required
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='E-mail'
            required
          />
          <input type='text' name='cpf' id='cpf' placeholder='CPF' required />
          <input
            type='text'
            name='address'
            id='address'
            placeholder='Endereço'
            required
          />
          <input
            type='text'
            name='city'
            id='city'
            placeholder='Cidade'
            required
          />
          <select name='uf' id='uf' required>
            <option value=''>Escolha seu Estado</option>
            {allUFs.map(({ id, sigla, nome }) => {
              return (
                <option key={id} value={sigla}>
                  {nome}
                </option>
              );
            })}
          </select>
          <div>
            <label>
              <input
                type='radio'
                name='homeType'
                id='home'
                value='Casa'
                required
                defaultChecked
              />
              Casa
            </label>
            <label>
              <input
                type='radio'
                name='homeType'
                id='apartment'
                value='Apartamento'
              />
              Apartamento
            </label>
          </div>
        </fieldset>
        <fieldset>
          <textarea
            name='resumeJob'
            id=''
            cols='30'
            rows='10'
            placeholder='Resumo do currículo'
            maxLength='1000'
            required
          />
          <textarea
            type='text'
            name='office'
            id='office'
            placeholder='Cargo'
            required
            maxLength='40'
          />
          <textarea
            type='text'
            name='jobDescription'
            id='jobDescription'
            required
            maxLength='500'
          />
        </fieldset>
        <button type='submit'>Criar currículo</button>
        <button type='button'>Limpar</button>
      </form>
    );
  }
}

export default MyForm;
