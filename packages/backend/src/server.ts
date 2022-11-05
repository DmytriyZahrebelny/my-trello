import express from 'express';

import { App } from './app';
import { getLogger } from './lib/logger';

interface Post {
  author: string;
  content: string;
  title: string;
}

const loger = getLogger({ name: 'test' });

class PostsController {
  public path = '/posts';
  public router = express.Router();

  private posts: Post[] = [
    {
      author: 'Marcin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    },
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
  }

  getAllPosts = (request: express.Request, response: express.Response) => {
    loger.info('sucssess');
    response.send(this.posts);
  };
}

export const post = new PostsController();

const app = new App([post], 4000);

app.listen();
