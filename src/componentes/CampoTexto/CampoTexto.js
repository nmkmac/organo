import React from "react";
import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, obrigatorio, aoAlterar, valor }) => {
  const aoDigitar = (evento) => {
    aoAlterar(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitar}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CampoTexto;
