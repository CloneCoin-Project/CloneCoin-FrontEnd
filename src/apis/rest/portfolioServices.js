import Client from '@apis/rest/client';

const portfolioServices = {
  async fetchMyportfolio({ userId }) {
    const res = await Client.publicInstance.get(
      `${Client.path.cloneCoinApi}/portfolio/${userId}`,
    );
    return res.data;
  },

  async fetchMyportfolioProfit({ userId, period }) {
    const res = await Client.publicInstance.get(
      `${Client.path.cloneCoinApi}/portfolio/user?userId=${userId}&period=${period}`,
    );
    return res.data;
  },

  async fetchMyportfolioRatio({userId}) {
    const res = await Client.publicInstance.get(
      `${Client.path.cloneCoinApi}/portfolio/copy/ratio/${userId}`,
    );
    return res.data;
  },

  async fetchMyCopyCoin({ userId }) {
    const res = await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/portfolio/coin`,
      {
        userId,
      },
    );
    return res.data;
  },

  async StartCopy({ userId, leaderId, leaderName, amount }) {
    const res = await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/portfolio/copy`,
      {
        userId,
        leaderId,
        leaderName,
        amount,
      },
    );
    return res.data;
  },
};

export default portfolioServices;
