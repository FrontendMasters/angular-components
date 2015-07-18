import _ from 'lodash';

const posts = ($http, API, $q) => {
  let allPosts = [];

  const get = () => {
    return $http.get(`${API.url}/posts`)
      .then(resp => allPosts = resp.data);
  };

  const getOne = (id) => {
    const post = _.find(allPosts, {id});

    if (post) {
      return $q.when(post);
    } else {
      return $http.get(`${API.url}/posts/${id}`)
        .then(({data}) => {
          allPosts.push(data);
          return data;
        });
    }
  };

  const getState = () => {
    return allPosts;
  };

  return {get, getOne, getState};
};

posts.$inject = ['$http', 'API', '$q'];

export {posts};
