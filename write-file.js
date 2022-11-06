const fs = require('fs');

for (let i=0; i<100; i++) {
  // fs.writeFileSync(`${i * 2}.txt`, 'Hello, world!', 'utf8');
  fs.unlinkSync(`${i * 2}.txt`);
}
