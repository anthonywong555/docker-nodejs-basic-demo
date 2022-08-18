const app = require('express')();
const fs = require('fs-extra');

fs.outputFile(`/output/log-${(new Date()).valueOf()}`, 'Learn Node FS Module', (err) => {
    if (err) throw err;
    console.log('File is created successfully.')
})

app.get('/', (req, res) => {
    res.json({ message: 'Docker is easy 🐳' });
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));