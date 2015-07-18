import _ from 'lodash';

class BlogController {
  constructor(Posts) {
    this.message = 'The latest from the blog';

    this.Posts = Posts;
    this.getPosts();

    this.search = '';
  }

  getPosts() {
    this.Posts.get()
      .then(() => {
        this.posts = this.Posts.getState();
      });
  }
}

BlogController.$inject = ['Posts'];

export {BlogController};
