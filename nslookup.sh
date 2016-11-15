#author: Steve Vazquez
#date: Nov. 3, 2016
#!/bin/bash

# Read the file in parameter and fill the array named "array"
getArray() {
    array=() # Create array
    while IFS= read -r line # Read a line
    do
        array+=("$line") # Append line to the array
    done < "$1"
}

#erase file if exists
>records_output.txt

# Print the file (print each element of the array)
getArray "records.txt"
for e in "${array[@]}"
do
    nslookup "$e" >> records_output.txt
done
