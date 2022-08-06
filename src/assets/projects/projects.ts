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
];

const func = projects[0].functionalities[0];
export type Functionality = typeof func;
