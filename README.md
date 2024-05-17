# Date Formatter test

A simple Node.js library for formatting dates.

## Installation

```bash
npm install date-formatter

```

```
const { formatDate } = require('date-formatter');

const date = new Date();
const formattedDate = formatDate(date, 'YYYY-MM-DD HH:mm:ss');

console.log(formattedDate); // Output example: 2023-05-17 10:30:45
```

Format Options
YYYY: Year (e.g., 2023)
MM: Month (e.g., 05)
DD: Day (e.g., 17)
HH: Hours (e.g., 10)
mm: Minutes (e.g., 30)
ss: Seconds (e.g., 45)
