
class AdminController {
  constructor(Posts, $state) {
    this.post = {
      author: 'You',
      text: '',
      title: ''
    };
    this.Posts = Posts;
    this.$state = $state;
  }

  // TODO: define createPost here to
  // take in a post or default to a post
  // and post it. User $state to redirect
  // back to /blog when the post is created
  createPost(post = this.post) {

  }
}

AdminController.$inject = ['Posts', '$state'];

