import { 
  useState, 
  useEffect, 
  useCallback, 
  createContext,
} from 'react';

import PropTypes from 'prop-types';

import Storage from 'utils/Storage';
import { toast } from 'react-toastify';
import AuthApi from 'commons/resources/api/auth';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = Storage.get('@User');
    setUserData(user);
  }, []);

  const signIn = useCallback((payload, history, setIsLoading) => {
    AuthApi.signIn(payload)
      .then(response => {
        const { data } = response;
        const token = data.token;
        const user = data.name;
        Storage.set('@Token', `Bearer ${token}`);
        Storage.set('@User', JSON.stringify(user));
        setUserData(user);
        history.push('/admin');
      })
      .catch(err => {
        const { response } = err;

        const message = response.data.message;
        if(message === 'User or password are incorrect') toast.error('Usuário ou senha incorretos');
        setIsLoading(false);
      });
  }, [])

  const signOut = useCallback(() => {
    Storage.delete('@Token');
    Storage.delete('@User');
    setUserData(null);
    toast.success('Logout realizado com sucesso');
  }, [])

  return (
    <AuthContext.Provider 
      value={{
        signIn,
        signOut,
        userData,
        authenticated: Boolean(userData)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any,
}

export { AuthContext };
export default AuthProvider;