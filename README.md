# CS348 Course Project
## Folder structure
```
.
├── client                  # Root folder for clinet (frontend UI) 
│   └── README.md           # Instruction on starting the client
├── query                   # Folder MySQL queries
│   └── README.md           # Instruction on setting up sample data
├── server                  # Root folder for server (backend)
│   └── README.md           # Instruction on starting the server
├── dataset                 # Root folder for dataset generation scripts
│   └── README.md           # Instruction on how to generate production dataset (a generated copy exists in the query folder)
├── notes                   # Notes and images from meeting and discussions
├── TODO.md
└── README.md
```

## Setting up the project
- Follow the `README.md` in each of the folder to setup the corredponding part
- `client` for the frontend UI
- `server` for the backend server
- `query` for MySQL database, initialization of tables and sample data.

## Currently Supported Feature
- R6: 
  - Listing of product
  - Listing of category
- R7:
  - Filter product by category
  - Filter product by price range
  - Filter product by rating
  - Order product by rating
  - Order product by price
- R8:
  - Deletion of product for admin
  - Deletion of comment for user
- R9:
  - Rating of a product would update if a comment is deleted
