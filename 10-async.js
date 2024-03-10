const { readFile, writeFile } = require('fs');
readFile('./content/second.txt', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-sync.txt', `Here is the result congratulations: ${first} & ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result)
        }
        );
    })
});



