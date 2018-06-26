function fetchTextByPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("es8");
        }, 2000);
    });
};

async function sayHello() {
    const externalFetchedText = await fetchTextByPromise();
    console.log(`Hello, ${externalFetchedText}`);
};
console.log(1);
sayHello();
console.log(2);