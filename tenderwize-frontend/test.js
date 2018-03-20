//const express = require('express');
//const app = express();

const p = new Promise((resolve, reject) => {
    resolve(2)
})

async function hello() {
    const q = await p;
    return q;
}

hello().then((v) => console.log(2))