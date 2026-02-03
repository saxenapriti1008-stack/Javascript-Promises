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


    //Part 2: Fetching Data from an API 

    const fetchAdvice = () => {
    return fetch(`https://api.adviceslip.com/advice`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.slip.advice); // Display the advice
            return data.slip.advice;
        })
        .catch((error) => {
            console.log(`Error fetching advice:`, error);
        });
};

// Example usage

fetchAdvice();

//Combining Both Parts

flipCoin()
    .then((message) => {
        console.log(message);
        return fetchAdvice(); // Fetch advice if you win
    })
    .catch((error) => {
        console.log(error);
    });