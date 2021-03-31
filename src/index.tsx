import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

createServer({
  models: {
    topic: Model,
    question: Model,
    reply: Model,
  },

  seeds(server) {
    server.db.loadData({
      topics: [
        {
          id: 1,
          text: 'Framework front-end React.js',
          createdAt: new Date('2021-02-12 09:00:00')
        }
      ],
      questions: [
        {
          id: 1,
          topic_id: 1,
          text: 'Qual o melhor framework front-end react.js, vue ou angular?',
          createdAt: new Date('2021-02-12 09:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/topics', () => {
      return this.schema.all('topic');
    });

    this.get('/questions', () => {
      return this.schema.all('question');
    });

    this.get('/replys', () => {
      return this.schema.all('reply');
    });

    this.post('/topics', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('topic', data);
    });

    this.post('/questions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('question', data);
    });

    this.post('/replys', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('reply', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


