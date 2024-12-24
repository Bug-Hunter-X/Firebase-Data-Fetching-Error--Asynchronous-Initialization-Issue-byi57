# Firebase Data Fetching Error: Asynchronous Initialization
This repository demonstrates a common error in Firebase applications: attempting to access data before it's fully initialized.  The issue occurs because Firebase operations are asynchronous; you can't assume data is available immediately after calling a function like `get()`.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem
The code in `bug.js` tries to access document data before the Firebase promise resolves. This results in errors or unexpected behavior, often due to undefined or null values.

## Solution
The `bugSolution.js` file demonstrates how to correctly handle asynchronous operations using Promises or async/await.  This ensures the code waits for the data to be available before accessing it.

## How to reproduce
1. Clone this repository.
2. Install necessary dependencies (Firebase SDK: `npm install firebase`).
3. Initialize Firebase using your own config.
4. Run `bug.js` and observe the error.
5. Run `bugSolution.js` and see the corrected behavior.