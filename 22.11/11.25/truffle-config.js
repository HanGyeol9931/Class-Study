module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      // port: 9005,
      port: 8545, // 가나쉬 네트워크 주소
      network_id: "*",
      websockets: true,
    },
  },

  mocha: {},

  compilers: {
    solc: {
      version: "0.8.17",
    },
  },
};
