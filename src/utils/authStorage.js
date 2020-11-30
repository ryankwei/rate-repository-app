import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    return await AsyncStorage.getItem(`${this.namespace}:accessToken`);
    //return rawToken ? rawToken : '';
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;