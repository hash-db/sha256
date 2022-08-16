# hash-db/sha256
**This repository serves as a database and API for storing strings hashed by sha-256.**
The directory structure is as follows

    encrypt/<number of characters in string to be hashed>/<string to be hashed>

    decrypt/<string to be hashed>/<string to be hashed>

## hou to use?
With this structure, you can get the data you want with the following command
For example, if you want to know the hash value of the string "AAA"

    curl https://raw.githubusercontent.com/hash-db/sha256/main/encrypt/3/AAA

to get the hash value of the string AAA.
Conversely, if you want to get the hash value of "AAA" from "cb1ad2119d8fafb69566510ee712661f9f14b83385006ef92aec47f523a38358

    curl https://raw.githubusercontent.com/hash-db/sha256/main/decrypt/cb1ad2119d8fafb69566510ee712661f9f14b83385006ef92aec47f523a38358

to obtain it.

This repository still supports only 3-digit alphanumeric characters.
If you are able to calculate more than 4 alphanumeric digits, please make a Pull Request.
This repository is limited by one person's computing resources. Your help is essential.
