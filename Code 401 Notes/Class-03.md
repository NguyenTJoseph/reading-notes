# FileIO & Exceptions
## Reading and Writing Files

Open file
- ```file = open('dog_breeds.txt')```

Close file
- ```file.close()```

- 'r'	Open for reading (default)
- 'w'	Open for writing, truncating (overwriting) the file first
- 'rb' or 'wb'	Open in binary mode (read/write using byte data)

Read file 
- ```file.read()```

Write file
- .write(string)	This writes the string to the file.
- .writelines(seq)	This writes the sequence to the file. No line endings are appended to each sequence item. It’s up to you to add the appropriate line ending(s).

## Exceptions

- Raise - throw exception anywhere
- Assert - verify if condition is met 
- try - statements are executed until exception
- except - handle exceptions in the try clause
- else - sections that only run when no exceptions are encountered in try clause 
- finally - code thats always runs