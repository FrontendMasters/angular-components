import _ from 'lodash';

const posts = ($http, API, $q) => {
  let allPosts = [];

  const get = () => {
    return $http.get(`${API.url}/posts`)
      .then(({data}) => {
        allPosts = data.map(post => {
          post.slug = post.title.replace(/\s+/g, '-');
          return post;
        });
      });
  };

  const getOne = (query) => {

    const post = _.find(allPosts, query);

    if (post) {
      return $q.when(post);
    } else {
      let url = `${API.url}/posts`;

      if (query.id) {
        url += `${query.id}`
      } else if (query.title) {
        url += `?title=${query.title}`
      }

      return $http.get(url)
        .then(({data}) => {
          return data[0];
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
