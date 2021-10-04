import Client from '@apis/rest/client';

const userServices = {
  async signIn({ userId, password }) {
    // const data = await Client.publicInstance.get(
    //   `${Client.path.bithumbPublicApi}/ALL_KRW`,
    // );
    const data = {
      userId: 1,
      userName: '진수',
      status: '리더',
      email: 'admin@binary01.me',
    };
    return { data };
  },
  async signUp({ userId, userName, password, email }) {
    const data = {
      username: userId,
      name: userName,
      password,
      email,
      role: 'normal',
    };

    // const res = await Client.publicInstance.post(
    //   `${Client.path.bithumbPublicApi}/ALL_KRW`,
    //   data,
    // );

    const res = {
      userId,
      userName,
      password,
      email,
      status: 'normal',
    };

    return res;
  },
};

export default userServices;
