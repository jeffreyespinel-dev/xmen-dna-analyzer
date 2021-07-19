# X-Men DNA Analyzer

### Use
#### Analyze DNA endpoint:
This endpoint was built for the purpose of analyzing and identifying if a DNA belongs to a human or a mutant.

| Request Options  | Value | Comments |
| ------------- | ------------- | ------------- |
| Path  | `{{domain}}:3000/mutant/` |  |
| Method  | `POST` |
| Body  | `dna`: string[] | This attribute has to contain all DNA nitrogenous bases.|

Example:
```
POST/ URL:'54.161.241.127:3000/mutant/'
Body: {
    "dna": [
        "ATGCGA",
        "CAGTGC",
        "TTATGT",
        "AGAAGG",
        "CCCCTA",
        "TCACTG"
    ]
}
``` 

#### Get DNA Stats:
This endpoint was built with the purpose of returning the statistics of the different DNAs analyzed.

| Request Options  | Value | 
| ------------- | ------------- |
| Path  | `{{domain}}:3000/stats/` | 
| Method  | `GET` |

Example:
```
GET/ URL:'54.161.241.127:3000/stats/'
``` 

> You can see the API Documentation [here](https://documenter.getpostman.com/view/12550407/TzmChtL9) to know different way to call a request. 

### Run API Locally:
This API is running on an AWS server. However you can be run locally.

System Requirements:
* Node Version 12 or later

Run the service locally:
```
$ npm start
```

## Running unit tests
Run `npm test` to execute the unit tests via [JEST](https://jestjs.io/).

## Running unit tests coverage
Run `npm run test:cover` to generate the unit tests coverage reports via [JEST](https://jestjs.io/). This report can be found in `$appDirectory/coverage/index.html`.