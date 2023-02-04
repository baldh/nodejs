# Child process 🐣

Child process is a process created by other process. When a new process is launched, operating system can run the child process _concurrently_ via multiprocessing.

Aside from dealing with long running process, child process can also run shell commands. We can use nodejs to run shell commands to structure and operations as nodejs module instead of shell scripts.

## Creating a child process with `exec()`

Developers commonly create child processes to execute commands on their operating system when they need to manipulate the output of their Node.js programs with a shell.

The `exec()` function in Node.js creates a new shell process and executes a command in that shell. The output of the command is kept in a buffer in memory, which you can accept via a callback function passed into `exec()`.

### `exec()`

First argumnent is the command we want to execute. Second argument is a options object and third is a callback function.
The callback function takes the following arguments

- error (Error object)
- stdout (Buffer/ String)
- stderr (Buffer/ String)

### `execFile()`

`child_process` module can also run executable files with `execFile()` function.
The key difference between the execFile() and exec() functions is that the first argument of execFile() is now a path to an executable file instead of a command.

## Creating a child process with `spawn()`

The `spawn()` function runs a command in a process. This function returns data via the stream API.

It’s often a good idea to choose spawn() over exec() or execFile() when the command you want to run can output a large amount of data. With a buffer, as used by exec() and execFile(), all the processed data is stored in the computer’s memory. For large amounts of data, this can degrade system performance. With a stream, the data is processed and transferred in small chunks. Therefore, you can process a large amount of data without using too much memory at any one time.

The first argument of `spawn()` is the command to run. The second argument is an array that contains the arguments for the executed command.

Commands can return data in either the `stdout` stream or the `stderr` stream, so you added listeners for both. You can add listeners by calling the `on()` method of each streams’ objects. The `data` event from the streams gives us the command’s output to that stream. Whenever we get data on either stream, we log it to the console.

We then listen to two other events: the `error` event if the command fails to execute or is interrupted, and the `close` event for when the command has finished execution, thus closing the stream.

When listening to the `close` event, Node.js provides the exit code of the command. An exit code denotes if the command ran successfully or not. When a command runs without errors, it returns the lowest possible value for an exit code: 0. When executed with an error, it returns a non-zero code.
