//Part 1: Creating Your Own Promise

const flipCoin = () => {
    return new Promise<string>((resolve, reject) => {
        let result = Math.random();
        if (result > 0.5) {
            resolve("You win!");
        } else {
            reject("You lose!");
        }
    });
};

// Example usage

flipCoin()
    .then((message) => console.log(message))
    .catch((error) => console.log(error));


    