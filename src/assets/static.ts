export const card = {
  title: "DevOps e Kubernetes: O portal de entrada em grandes corporações",
  text:
    "Entender de DevOps e tecnologias como Docker e Kubernetes já se tornou um pré-requisito em grandes organizações. Nesse vídeo você verá como colocar configurar o Kubernetes para rodar nosso estudo de caso.",
};

export const row = [
  {
    title: "Tenha um dos perfis mais desejados do mercado",
    host: "Wesley Williams",
  },
  {
    title: "Ambiente de desenvolvimento e validação de models",
    host: "Wesley Williams",
  },
];

let guid = () => {
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const students = [
  {
    id: guid(),
    name: 'Gamora Zen Whoberi Ben Titan',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'Albert Gaines',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'Edith Freiberg',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'Meggan Braddock',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'Stephen Vincent Strange',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'James Buchanan',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'Norrin Radd',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'Samuel Thomas',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'Steven Grant',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'Anna Marie LeBeau',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },
  {
    id: guid(),
    name: 'Robert Reynolds',
    phone: '(85) 9 9767-7067',
    cpf: '123.456.789-10'
  },


]