import Client from '@apis/rest/client';

const userServices = {
  async signIn({ userId, password }) {
    const res = await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/user/login`,
      { usename: userId, password },
    );

    console.log(res);
    return res.data;
  },

  async signUp({ userId, userName, password, email }) {
    const res = await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/user/users`,
      { usename: userId, name: userName, password, email, role: 'normal' },
    );

    console.log(res);

    return;
  },
};

export default userServices;
