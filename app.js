const fs = require('fs');

// Asynchronous function to read a file and process its contents
function readFileAndProcess(filename, callback) {
    // Read the file asynchronously
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            // Handle the error if the file reading fails
            return callback(`Error reading file: ${err.message}`);
        }

        // Process the file contents
        const processedData = data.toUpperCase();

        // Introduce another asynchronous operation for control flow
        simulateAsyncOperation(processedData, callback);
    });
}

// Simulate another asynchronous operation
function simulateAsyncOperation(data, callback) {
    setTimeout(() => {
        // Simulating a condition that might cause an error
        if (data.includes('ERROR')) {
            return callback('Processing error: The data contains the word "ERROR".');
        }

        // If no error, return the processed data
        callback(null, `Processed Data: ${data}`);
    }, 1000);
}

// Execute the function with a callback
readFileAndProcess('sample.txt', (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
