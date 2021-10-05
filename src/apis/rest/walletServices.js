import Client from '@apis/rest/client';

const walletServices = {
  async fetchAllLeader() {
    const res = await Client.publicInstance.get(
      `${Client.path.cloneCoinApi}/walletread/leaders`,
    );

    return res.data;
  },

  async fetchLeaderInfo({ leaderId }) {
    const res = await Client.publicInstance.get(
      `${Client.path.cloneCoinApi}/walletread/leaderCoin?leaderId=${leaderId}`,
    );

    return res.data;
  },

  async fetchLeaderYield({ leaderId, period }) {
    const res = await Client.publicInstance.get(
      `${Client.path.cloneCoinApi}/walletread/leader?leaderId=${leaderId}&period=${period}`,
    );

    return res.data;
  },
};

export default walletServices;
