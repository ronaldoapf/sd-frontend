import api from '.'

const baseURL = '/auth'

const AuthApi = {
  signIn(payload){
    return api.post(baseURL, payload);    
  }
} 

export default AuthApi;
