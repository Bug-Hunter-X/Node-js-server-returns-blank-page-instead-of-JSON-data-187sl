# Node.js Server Blank Page Issue

This repository demonstrates a common issue where a Node.js server, intended to return JSON data, instead sends a blank page to the client.  The server starts without errors, but the response body is empty.  The provided solution addresses this problem.

## Bug

The original `server.js` file contains a simple HTTP server that attempts to send a JSON response.  However, due to a subtle error (missing a call to `response.end()` after writing the JSON), the server does not complete the response, resulting in a blank page.

## Solution

The `server-solution.js` file corrects this error by ensuring `response.end()` is called *after* `response.writeHead()` and `JSON.stringify()` are used. This ensures the JSON data is sent to the client.

## Setup

1. Clone the repository.
2. Run `node server.js` to see the original buggy behavior.
3. Run `node server-solution.js` to observe the corrected response.