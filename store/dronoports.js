export default {
  state: {
    tableData: [
      {
        numerical: "№",
        address: "Адресс",
        dronopot: "Дронопорт",
        postamat: "Постамат",
      },
      [
        {
          address: "г. Одинцово, ул. Северная, 5",
          dronopot: 2,
          postamat: 2,
        },
        {
          address: "г. Одинцово, ул. Северная, 4",
          dronopot: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Северная, 3",
          dronopot: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Северная, 44",
          dronopot: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Северная, 42",
          dronopot: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Северная, 41",
          dronopot: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Северная, 40",
          dronopot: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Южная, 39",
          dronopot: 4,
          postamat: 1,
        },
        {
          address: "г. Москва, ул. Северная, 38",
          dronopot: 4,
          postamat: 1,
        },
      ],
    ],
  },
  action: {},
  mutation: {},
  getters: {
    getAllDronoport(state) {
      return state.tableData;
    },
    countOfLenght(state) {
      return state.tableData[1].length;
    },
  },
};
