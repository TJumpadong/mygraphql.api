const http = require('http');
const util = require('util');
const querystring = require('querystring');

const executeQuery = (graphQlQuery) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: `/graphql?query=${encodeURIComponent(graphQlQuery)}`,
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      const data = JSON.parse(chunk);
      console.log('---------JSON Response---------');
      console.log(util.inspect(data, { showHidden: true, depth: 10 }));
    });

    res.on('end', () => {
      //console.log('responsed');
    });
  });

  req.on('error', (e) => {
    console.log(e.message);
  });

  req.end();
}

module.exports = {
  executeQuery
};


// const graphQlQuery = `
//   query {
//     star(name: "${starName}") {
//       _id
//       name
//     }
//   }
// `;

// var postData = querystring.stringify({
//   name: 'Tape',
//   email: 'tapelovemusic@gmail.com'
// });

// const options = {
//   hostname: 'localhost',
//   port: 3000,
//   path: '/',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': Buffer.byteLength(postData)
//   }
// };

// const req = http.request(options, (res) => {
//   res.setEncoding('utf8');

//   res.on('data', (data) => {
//     console.log('reqest data');
//     console.log(JSON.parse(data));
//   });

//   res.on('end', () => {
//     console.log('no response');
//   });
// });


// req.on('error', (e) => {
//   console.log(e.message);
// });


// req.write(postData);
// req.end();