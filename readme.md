## Athentication And Autheriziation 
### Athentication  
=> Who am I ?  = sign Up 
### Autherization 
=> what I can Do ? = roll of your in webpage
### API
No Security  (Athentication / Autherization )
##### Basic Auth = unsername + password
###### Challenge of basic auth 
1. for each time user send their username and password 
2. security are evenly exposed 
3. easy to improvate
#### Token Based Authentication 
Register => find login credincial (acess code / acess Token )  => login 
every other activity accestoken expire time 
### Mulifacter Authentication (MFA) 
OTP + Password 
# Creating E-commerce Backend
1. Creating nodejs project 
2. Define the Structure 
   a. Router 
   b. Controller
   c. Model
## Auth 
 1. Admin 
 2. Customer 
### Dependies 
 1. Mongodb => ``` npm install mongoose  ```
 2. Express Js => ```npm install express ```
 3. JWT -> JSON Web Token => ```npm install jsonwebtoken ```
 ###### Saving Password 
 password -> encryption -> save in Data base
 4. Bencryptjs =>  ``` npm install bcryptjs ```

### Creating model
###### userSchema 
 * name 
 * password
 * email
 * userType
 ## Create user 
 ### 