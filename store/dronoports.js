export default {
  state: {
    tableData: [
      {
        numerical: "no-table-title",
        address: "address-table-title",
        dronoport: "droneport-table-title",
        postamat: "postamat-table-title",
      },
      [
        {
          address: "г. Одинцово, ул. Северная, 5",
          dronoport: 2,
          postamat: 2,
        },
        {
          address: "г. Одинцово, ул. Северная, 4",
          dronoport: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Северная, 3",
          dronoport: 4,
          postamat: 1,
        },
        {
          address: "г. Москва, ул. Северная, 44",
          dronoport: 4,
          postamat: 2,
        },
        {
          address: "г. Одинцово, ул. Северная, 42",
          dronoport: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Северная, 41",
          dronoport: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Северная, 40",
          dronoport: 4,
          postamat: 1,
        },
        {
          address: "г. Одинцово, ул. Южная, 39",
          dronoport: 4,
          postamat: 1,
        },
        {
          address: "г. Москва, ул. Северная, 38",
          dronoport: 4,
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
    filteredDataDescription(filters) {
      if (!filters) {
        return state.tableData[1];
      }
      let data = state.tableData[1];
      for (const [key, value] in Object.entries(filters)) {
        return data.filter((elem) => {
          return elem[key]
            .toLowerCase()
            .replace(/[\s.,\s]/g, "")
            .includes(value, 0);
        });
      }
    },
  },
};
