import _ from 'lodash';

export class BlogController {
  constructor() {
    this.message = 'The latest from the blog';

    this.posts = _.times(9, ()=> {
      return {
        author: 'Casidy James',
        title: 'What\'s new in Angular 3'
      };
    });
  }
}


