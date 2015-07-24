class AdminController {
  constructor(Posts, $state, Auth) {

    this.post = {
      text: '',
      title: ''
    };

    this.Posts = Posts;
    this.$state = $state;
  }

  // use default params here
  createPost(post = this.post) {
    this.Posts.create(post)
      .then(() => {
        this.post = {};
        this.$state.go('blog');
      });
  }
}


AdminController.$inject = ['Posts', '$state'];

export {AdminController};
