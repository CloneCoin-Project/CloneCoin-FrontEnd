import Client from '@apis/rest/client';

const bithumbServices = {
  async fetchTickerAll() {
    const tickerList = await Client.publicInstance.get(
      `${Client.path.bithumbPublicApi}/ALL_KRW`,
    );
    return tickerList["data"];
  },
};

export default bithumbServices;
