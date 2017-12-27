import { createServer } from 'http';

import { A } from './constants';

const port = 3000;

const requestHandler = (request, response) => {
  console.log(A());
  response.end('Hello Node.js Server!');
};

createServer(requestHandler).listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});

