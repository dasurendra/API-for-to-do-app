# Not to do task list api

This is the backend project build with Node,Express and M ongo DB for React frontend application

## How to run

-clone the project
-run `npm install`
-run `npm start`
-Make sure you have install nodemon before staring tha pplication.If you dont have install nodemo then run `npm i -g nodemon

## APIs

All the api will foloow the `{rootUrl}/api/v1` patterns

| #   | Method   | Path  | Description                                                                                                          |
| --- | -------- | ----- | -------------------------------------------------------------------------------------------------------------------- |
| 1.  | `GET`    | `_id` | `@_id`is oprional parameter,if task id is sent,it will return single task other wise it will return all the the task |
| 2.  | `POST`   | `/`   | Expects task object stores task in the databas and return the stored data or null if unable to store the             |
| 3.  | `PATCH`  | `/`   | Expects id and the instruction on what to update in the database                                                     |
| 4.  | `DELETE` | `/`   | Expects id and deletes data from the dtabase and return sucess or unsucess information                               |
