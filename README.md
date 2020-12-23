# Endpoint Documentation

### API Base URL 
`https://unit4-build-week-backend.herokuapp.com`

</br>

### Endpoints

| Request | URL | Description | Requires Auth Token |
|----------|----------|----------|----------|
|POST | /api/auth/register | register a new user | N |
|POST | /api/auth/login | login an existing user | N |
</br>

### Unfinished Endpoints (subject to change)
| Request | URL | Description | Requires Auth Token |
|----------|----------|----------|----------|
|GET | /api/trucks | get all truck objects | Y |
|GET | /api/trucks/reviews | get all reviews | Y |
|GET | /api/trucks/reviews/:id | get reviews by food truck id | Y |
|POST | /api/trucks/reviews/:id | add new review to db | Y |
</br>

---

**Register New User**
----
  Returns json blob about new user.

* **URL**

  *baseURL*/api/auth/register

* **Method:**

  `POST`
  
*  **Request Body**
 
   ```
   {
       "username": "foodieFan",             #required
       "password": "password123",           #required
       "email": "example@example.net",      #required
       "user_type_id": "diner",             #optional
       "current_location_lat": "16.293869", #optional
       "current_location_long": "26.2199",  #optional
   }
   ```

* **Success Response:**

  **Code:** 201 <br />
    **Content:** 
    
    ```
    {
        "user_id": 7,
        "username": "foodieFan",
        "user_type_id": diner,
        "current_location_lat": "16.293869",    # null if not provided
        "current_location_long": "26.2199",     # null if not provided
        "created_at": "2020-12-23 19:56:28",
        "updated_at": "2020-12-23 19:56:28"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Required field(s) Username, Password, or Email missing from req.body" }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`

---

**Login**
----
  Returns json blob containing authentication token.

* **URL**

  *baseURL*/api/auth/login

* **Method:**

  `POST`
  
*  **Request Body**
 
   ```
   {
       "username": "foodieFan",             #required
       "password": "password123",           #required
   }
   ```

* **Success Response:**

  **Code:** 200 <br />
    **Content:** 
    
    ```
    {
        "message": "Welcome to the API, ${username}",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ik..."
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Required field(s) Username, Password, or Email missing from req.body" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Invalid credentials." }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`

