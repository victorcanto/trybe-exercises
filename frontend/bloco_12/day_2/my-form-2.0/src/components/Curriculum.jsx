import React, { Component } from 'react';

class Curriculum extends Component {
  render() {
    const {
      fname,
      email,
      cpf,
      address,
      city,
      resumeJob,
      office,
      jobDescription,
      uf,
      homeType,
    } = this.props.data;
    return (
      <div>
        <h1>{fname}</h1>
        <h3>CPF: {cpf}</h3>
        <h4>{email}</h4>
        <span>
         {address} - {city} - {uf} - {homeType}
        </span>
        <h2>Resumo</h2>
        <p>{resumeJob}</p>
        <h3>{office}</h3>
        <h4>{jobDescription}</h4>
      </div>
    );
  }
}

export default Curriculum;
