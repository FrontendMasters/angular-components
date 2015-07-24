import _ from 'lodash';

const tag = 'ngblog-token';

const saveToken = (token)=> {
  window.localStorage.setItem(tag, token);
}

const auth = ($http, API, $q) => {
  let user = {};
  const signin = (data)=> {
    return $http({
      data,
      url: `${API.root}/auth/signin`,
      method: 'POST'
    })
    .then(({data: {token}}) => {
      saveToken(token);
    });
  };

  const signup = (data)=> {
    return $http({
      data,
      method: 'POST',
      url: `${API.url}/users`
    })
    .then(({data: {token}}) => {
      saveToken(token);
    });
  };

  const getUser = ()=> {
    return user;
  };

  const isAuth = ()=> {
    return !!window.localStorage.getItem('ngblog-token');
  }

  return {signin, signup, getUser, isAuth};
};

auth.$inject = ['$http', 'API', '$q'];

export {auth};
