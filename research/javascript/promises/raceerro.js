const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("ERRO"), 500);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("OK"), 1000);
});

Promise.race([p1, p2])
    .then(console.log)
    .catch(console.log);