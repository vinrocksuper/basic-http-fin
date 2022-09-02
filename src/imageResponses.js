const fs = require('fs');

const spongeGar = fs.readFileSync(`${__dirname}/../media/sponge.jpg`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(spongeGar);
  response.end();
};

module.exports = {
  getImage,
};
