import Client from '@apis/rest/client';

const userServices = {
  async signIn({ userId, password }) {
    const res = await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/user/login`,
      {
        username: userId,
        password,
      },
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
    await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/user/leader`,
      {
        userId: ID,
        apiKey,
        secretKey,
      },
    );
    return;
  },

  async getDescription({ userId }) {
    const res = await Client.publicInstance.get(
      `${Client.path.cloneCoinApi}/user/users/${userId}`,
    );
    const { description } = res.data;
    return description ? description : '';
  },

  async postDescription({ userId, description }) {
    const res = await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/user/description`,
      {
        userId,
        description,
      },
    );
    return description;
  },

  async fetchMyFollower({ leaderId }) {
	// (리더) 팔로우 받고 있는 목록 불러오기
    const res = await Client.publicInstance.get(
      `${Client.path.cloneCoinApi}/user/followers?leaderId=${leaderId}`,
    );
    return res.data;
  },

  async fetchMyFollowing({ userId }) {
	// (일반) 펄로우 하고 있는 목록 불러오기
    const res = await Client.publicInstance.get(
      `${Client.path.cloneCoinApi}/user/followings?userId=${userId}`,
    );
    return res.data;
  },

  async startFollow({ userId, leaderId }) {
    await Client.publicInstance.post(
      `${Client.path.cloneCoinApi}/user/follow`,
      {
        userId,
        leaderId,
      },
    );
    return;
  },

  async deleteFollow({ userId, leaderId }) {
    await Client.publicInstance.delete(
      `${Client.path.cloneCoinApi}/user/follow`,
      {
        userId,
        leaderId,
      },
    );
    return;
  }
};

export default userServices;
