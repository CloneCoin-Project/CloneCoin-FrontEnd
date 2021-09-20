import Client from '@apis/rest';

const bithumbServices = {
  async fetchTickerAll() {
    const tickerList = await Client.publicInstance.get(
      `${Client.path.bithumbPublciApi}/ALL_KRW`,
    );
    return tickerList["data"];
  },
};

export default bithumbServices;
