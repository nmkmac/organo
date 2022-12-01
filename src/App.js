import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([
    {
      nome: "Anna Luiza",
      cargo: "Instrutora",
      imagem:
        "https://i.pinimg.com/236x/0f/99/37/0f99373db20d92ebe87b5432f6cc0edd.jpg",
      time: "Programação",
      key: 'fixo-1',
    },
    {
      nome: "Maria Lima",
      cargo: "Designer",
      imagem:
        "https://i.pinimg.com/236x/aa/31/6a/aa316a00c999c6348bd9c2c72e9223e0.jpg",
      time: "UX e Design",
      key: 'fixo-2',
    },
    {
      nome: "Liz Duarte",
      cargo: "Aperfeiçoamento",
      imagem:
        "https://i.pinimg.com/236x/ed/37/62/ed37627a3462d0f11ea6cf39f3960ed5.jpg",
      time: "Front End",
      key: 'fixo-3',
    },
    {
      nome: "Paula Martins",
      cargo: "Programadora",
      imagem:
        "https://i.pinimg.com/236x/33/fd/53/33fd534ca44e186b6ab49e721ef26a26.jpg",
      time: "Mobile",
      key: 'fixo-4',
    },
    {
      nome: "Eliana Pinheiro",
      cargo: "Senior",
      imagem:
        "https://i.pinimg.com/236x/f0/4d/d9/f04dd90889bf8fa6f2b3e90ba2a0277c.jpg",
      time: "Devops",
      key: 'fixo-5',
    },
    {
      nome: "Mirian Freny",
      cargo: "Desenvolvedora",
      imagem:
        "https://i.pinimg.com/236x/f0/4d/d9/f04dd90889bf8fa6f2b3e90ba2a0277c.jpg",
      time: "Mobile",
      key: 'fixo-6',
    },
  ]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
