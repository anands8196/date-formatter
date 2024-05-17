const { formatDate } = require('../src/index');

const date = new Date();
const formattedDate = formatDate(date, 'YYYY-MM-DD HH:mm:ss');

console.log(formattedDate);