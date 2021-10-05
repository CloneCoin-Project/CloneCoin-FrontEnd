import Client from '@apis/rest/client';

const userServices = {
  async signIn({ userId, password }) {
    const req = {
      username: userId,
      password,
    };

    const res = await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/user/login`,
      req,
    );

    const { id, username, email, name, role } = res.data;
    return { ID: id, userId: username, userName: name, email, status: role };
  },

  async signUp({ userId, userName, password, email }) {
    await Client.publicInstance.post(`${Client.path.cloneCoinApi}/user/users`, {
      username: userId,
      name: userName,
      password,
      email,
      role: 'normal',
    });

    return;
  },

  async leaderRegister({ ID, apiKey, secretKey }) {
    const res = await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/user/leader`,
      {
        userId: ID,
        apiKey,
        secretKey,
      },
    );
    console.log(res.data);
    return;
  },
};

export default userServices;
