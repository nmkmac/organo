import React from "react";
import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, time }) => {
  return (
    colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={corPrimaria}
              key={colaborador.nome + colaborador.cargo}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              time={colaborador.time}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
