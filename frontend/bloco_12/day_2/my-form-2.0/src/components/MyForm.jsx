import React, { Component } from 'react';
import Curriculum from './Curriculum';

class MyForm extends Component {
  constructor() {
    super();

    this.state = {
      allUFs: [],
      fname: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
      homeType: 'casa',
      resumeJob: '',
      office: '',
      jobDescription: '',
      submitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchUFs = this.fetchUFs.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleCPF = this.handleCPF.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleUF = this.handleUF.bind(this);
    this.handleHomeType = this.handleHomeType.bind(this);
    this.handleResumeJob = this.handleResumeJob.bind(this);
    this.handleOffice = this.handleOffice.bind(this);
    this.handleJobDescription = this.handleJobDescription.bind(this);
    this.clearCurriculum = this.clearCurriculum.bind(this);
  }

  componentDidMount() {
    this.fetchUFs();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  async fetchUFs() {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
    );
    const ufData = await response.json();

    this.setState({ allUFs: ufData });
  }

  handleName({ target }) {
    this.setState({ fname: target.value.toUpperCase() });
  }

  handleEmail({ target }) {
    this.setState({ email: target.value });
  }

  handleCPF({ target }) {
    this.setState({ cpf: target.value });
  }

  handleAddress({ target }) {
    let { value } = target;
    // source: https://metring.com.br/javascript-substituir-caracteres-especiais
    value = value
      .normalize('NFD')
      .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

    this.setState({ address: value });
  }

  handleCity({ target }) {
    const { value } = target;
    this.setState({ city: value });

    setTimeout(() => {
      if (Number(value[0]) >= 0 && Number(value[0]) <= 9) {
        this.setState({ city: '' });
      }
    }, 500);
  }

  handleUF({ target }) {
    const { value } = target;
    this.setState({ uf: value });
  }

  handleHomeType({ target }) {
    const { value } = target;
    this.setState({ homeType: value });
  }

  handleResumeJob({ target }) {
    const { value } = target;
    this.setState({ resumeJob: value });
  }

  handleOffice({ target }) {
    const { value } = target;
    this.setState({ office: value });
  }

  handleJobDescription({ target }) {
    const { value } = target;
    this.setState({ jobDescription: value });
  }

  clearCurriculum() {
    this.setState({
      fname: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
      homeType: 'casa',
      resumeJob: '',
      office: '',
      jobDescription: '',
      submitted: false,
    });
  }

  render() {
    const {
      allUFs,
      fname,
      email,
      cpf,
      address,
      city,
      resumeJob,
      office,
      jobDescription,
      submitted,
    } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              type='text'
              name='fname'
              id='fname'
              value={fname}
              placeholder='Nome'
              maxLength='40'
              required
              onChange={this.handleName}
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='E-mail'
              maxLength='50'
              required
              onChange={this.handleEmail}
              value={email}
            />
            <input
              type='text'
              name='cpf'
              id='cpf'
              placeholder='CPF'
              maxLength='11'
              required
              onChange={this.handleCPF}
              value={cpf}
            />
            <input
              type='text'
              name='address'
              id='address'
              placeholder='Endereço'
              maxLength='200'
              required
              onChange={this.handleAddress}
              value={address}
            />
            <input
              type='text'
              name='city'
              id='city'
              placeholder='Cidade'
              maxLength='28'
              required
              onChange={this.handleCity}
              value={city}
            />
            <select name='uf' id='uf' required onChange={this.handleUF}>
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
                  value='casa'
                  required
                  defaultChecked
                  onChange={this.handleHomeType}
                />
                Casa
              </label>
              <label>
                <input
                  type='radio'
                  name='homeType'
                  id='apartment'
                  value='apartamento'
                  onChange={this.handleHomeType}
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
              onChange={this.handleResumeJob}
              value={resumeJob}
            />
            <textarea
              type='text'
              name='office'
              id='office'
              placeholder='Cargo'
              required
              maxLength='40'
              onChange={this.handleOffice}
              onMouseEnter={() =>
                alert('Preencha com cuidado esta informação.')
              }
              value={office}
            />
            <textarea
              type='text'
              name='jobDescription'
              id='jobDescription'
              placeholder='Descrição do cargo'
              required
              maxLength='500'
              onChange={this.handleJobDescription}
              value={jobDescription}
            />
          </fieldset>
          <button type='submit'>Criar currículo</button>
          <button type='button' onClick={this.clearCurriculum}>
            Limpar
          </button>
        </form>
        {submitted && <Curriculum data={this.state} />}
      </>
    );
  }
}

export default MyForm;
