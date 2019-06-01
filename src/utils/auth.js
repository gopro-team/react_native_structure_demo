import { getItem, setItem, KEYS } from 'utils/storage';


class AccessToken {
  constructor() {
    this.accessToken = null;
  }

  async setAccessToken(token) {
    await setItem(KEYS.ACCESS_TOKEN, token);
    this.accessToken = token;
  }

  getAccessToken() {
    return this.accessToken;
  }

  async updateAccessToken() {
    const token = await getItem(KEYS.ACCESS_TOKEN);
    this.accessToken = token;
    return token;
  }

  deleteAccessToken() {
    this.accessToken = null;
    setItem(KEYS.ACCESS_TOKEN, '');
  }
}

const Auth = new AccessToken();
export default Auth;
