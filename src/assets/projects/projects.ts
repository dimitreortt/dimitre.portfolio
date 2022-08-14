export type ProjectType = typeof projects[0];

export const projects = [
  {
    name: "Primosia Instrumentos Musicais",
    description:
      "  Mauris dapibus vestibulum urna id fermentum. Proin ultrices ultricielacinia. Nullam sem erat, convallis eget finibus vel, elementum rhoncus orci. Mauris ut felis a magna lacinia aliquet. Mauris non pulvinar nisi. Curabitu vehicula rutrum maximus. Donec sit amet dui eu mauris laoreet lacinia. Ut ac tristique elit. Proin eros risus,varius nec volutpat a, mattis et diam. Quisque suscipit tincidunt dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    functionalities: [
      {
        name: "Functionaly 1",
        description:
          " Lorem ipsum dolor sit amet, consectetur.  Ut ac tristique elit. Proin eros risus,varius nec volutpat a, mattis et diam. Quisque suscipit tincidunt dolor.",
        imageUrl:
          "https://img.freepik.com/premium-vector/light-blue-project-management-concept_23-2147782704.jpg?w=2000",
      },
      {
        name: "Functionaly 2",
        description:
          " Lorem ipsum dolor sit amet, consectetur.  Ut ac tristique elit. Proin eros risus,varius nec volutpat a, mattis et diam. Quisque suscipit tincidunt dolor.",
        imageUrl:
          "https://img.freepik.com/premium-vector/light-blue-project-management-concept_23-2147782704.jpg?w=2000",
      },
    ],
  },
  {
    name: "Integração TMS - Guardião Tec",
    description:
      "Neste projeto o objetivo era criar uma plataforma para se cadastrar dados de veículos, itinerários, fichas técnicas, motoristas e o vínculo entre estas entidades. A plataforma é responsável por captar os dados de rastreamento dos veículos gerados constantemente, formatar os dados cadastrados e os dados captados e então integrá-los com os Web Services dos Correios. No frontend, além de serem criadas páginas e formulários para se cadastrar os dados, também foi criado um dashboard onde é possível conferir os resultados das integrações além de dados dos usuários adicionados.",
    functionalities: [
      {
        name: "Cadastro de Motorista",
        description:
          "Cadastrar nome, número da cnh, arquivo do documento e contato de um motorista responsável por um itinerário.",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/guardiaotec-tms.appspot.com/o/project-images%2Fdriver-page.png?alt=media&token=26616cb7-fab9-4642-947e-99c153cbda73",
      },
    ],
  },
];

const func = projects[0].functionalities[0];
export type Functionality = typeof func;
