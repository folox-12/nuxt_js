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
          id: 1,
          address: "г. Одинцово, ул. Северная, 5",
          dronoport: 2,
          postamat: 2,
          infrastructure: [
            {
              name: "droneport",
              company: "Hive",
              type: "М300",
              id: "312312414",
              link: "/Droneport",
            },
            {
              name: "droneport",
              company: "Hive",
              type: "М300",
              id: "312312414",
              link: "/Droneport",
            },
            {
              name: "postamat",
              company: "Ozon",
              type: "Box",
              id: "312312414",
              link: "/Postamat",
            },
            {
              name: "postamat",
              company: "Ozon",
              type: "Box",
              id: "312312414",
              link: "/Postamat",
            },
          ],
        },
        {
          id: 2,
          address: "г. Одинцово, ул. Северная, 4",
          dronoport: 4,
          postamat: 1,
          infrastructure: [
            {
              name: "droneport",
              company: "Hive",
              type: "М300",
              id: "312312414",
              link: "/Droneport",
            },
            {
              name: "camera",
              company: "AHD",
              type: "C201HD",
              id: "312312414",
              link: "/Camera",
            },
            {
              name: "motion-sensors",
              company: "Ajax",
              type: "MonionProtect",
              id: "312312414",
              link: "/Sensor",
            },
            {
              name: "protection",
              company: "Wall",
              type: "WallOne",
              id: "312312414",
              link: "/Wall",
            },
            {
              name: "lights",
              company: "FERON",
              type: "SP3040",
              id: "312312414",
              link: "/Light",
            },
            {
              name: "postamat",
              company: "Ozon",
              type: "Box",
              id: "312312414",
              link: "/Postamat",
            },
          ],
        },
        {
          id: 3,
          address: "г. Одинцово, ул. Северная, 3",
          dronoport: 4,
          postamat: 1,
        },
        {
          id: 4,
          address: "г. Москва, ул. Северная, 44",
          dronoport: 4,
          postamat: 2,
        },
        {
          id: 5,
          address: "г. Одинцово, ул. Северная, 42",
          dronoport: 4,
          postamat: 1,
        },
        {
          id: 6,
          address: "г. Одинцово, ул. Северная, 41",
          dronoport: 4,
          postamat: 1,
        },
        {
          id: 7,
          address: "г. Одинцово, ул. Северная, 40",
          dronoport: 4,
          postamat: 1,
        },
        {
          id: 8,
          address: "г. Одинцово, ул. Южная, 39",
          dronoport: 4,
          postamat: 1,
        },
        {
          id: 9,
          address: "г. Москва, ул. Северная, 38",
          dronoport: 4,
          postamat: 1,
        },
      ],
    ],
    infrastructureDir: [
      {
        name: "Droneport",
        link: "/Droneport",
      },
      {
        name: "Postamat",
        link: "/Postamat",
      },
      {
        name: "Camera",
        link: "/Camera",
      },
    ],
  },
  actions: {
    addDroneport: ({ commit }, array) => commit("addDroneport", array),
    addPlatform: ({ commit }, platformData) =>
      commit("addPlatform", platformData),
    deleteDroneport: ({ commit }, array) => commit("deleteDroneport", array),
    deletePlatform: ({ commit }, idPlatform) =>
      commit("deletePlatform", idPlatform),
    EditIdfrustructureActions: ({ commit }, array) =>
      commit("EditIdfrustructureMutations", array),
    ClearinputTableInfrusActions: ({ commit }, array) =>
      commit("ClearinputTableInfrusMutations", array),
  },
  mutations: {
    ClearinputTableInfrusMutations: (state, array) => {
      state.tableData[1][array[1] - 1].infrastructure[array[0]].id = "";
    },
    addDroneport: (state, array) => {
      state.tableData[1][array[0] - 1].infrastructure.push(array[1]);
    },
    EditIdfrustructureMutations: (state, array) => {
      state.tableData[1][array[2] - 1].infrastructure[array[1]].id = array[0];
    },

    addPlatform: (state, platformData) => {
      let length = state.tableData[1].length;
      state.tableData[1].push({
        id: length + 1,
        dronoport: platformData.dronoport,
        address: platformData.address,
        postamat: platformData.postamat,
        infrastructure: [],
      });
    },
    deleteDroneport: (state, array) => {
      state.tableData[1][array[0] - 1].infrastructure.splice(array[1], 1);
      localStorage.setItem(
        "tableInfrastructure",
        JSON.stringify(state.tableData[1][array[0] - 1].infrastructure)
      );
    },
    deletePlatform: (state, idDelete) => {
      let platformsData = state.tableData[1];
      for (let i = 0; i < platformsData.length; i++) {
        let platform = platformsData[i];
        if (platform.id == idDelete) platformsData.splice(i, 1);
      }
    },
  },
  getters: {
    getAllDronoport(state) {
      return state.tableData;
    },
    /*
    countOfLenght(state) {
       return state.tableData[1].length;
    },
    */
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
    getLenght: (state) => {
      return state.tableData[1].length;
    },
    getInfrByPlatformId: (state) => (id) => {
      return state.tableData[1].find((el) => el.id === id).infrastructure;
    },
    getPlatformInfoById: (state) => (id) => {
      return state.tableData[1].find((el) => el.id === id);
    },
  },
};
