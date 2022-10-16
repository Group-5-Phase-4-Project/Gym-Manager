# Just Gym It Management System
This app is designed to help gym enthusiasts have access to gym services online. It makes use of authentication/authorization to ensure that the user logs into the site and stays logged in via user ID in the session hash.

## Setup

Some starter code in place for Rails API backend and React frontend to set up, run:

```Terminal
$ bundle install
$ rails db:migrate db:seed
$ npm install --prefix client
```
It will also be helpful to see what's happening during the request/response cycle by running the
app in the browser. You can run the Rails server with:
```Terminal
$ rails s
```
And you can run React in another terminal with:
```Terminal
$ npm start --prefix client
```

## Application Content
The application contains:

### 1. Login Page

![Screenshot from 2022-10-17 01-08-28](https://user-images.githubusercontent.com/73560150/196060758-2b367c51-4a5d-4c81-b613-22cda83e641b.png)

### 2. Signup Page

![signup](https://user-images.githubusercontent.com/86743519/195870068-8fa56079-248f-4b32-a26e-f2323242983c.png)

The Login and Signup pages take in the user's details and route to the home page.
They both contain a random quote generator.

### 3. Home Page
![Screenshot from 2022-10-17 01-08-46](https://user-images.githubusercontent.com/73560150/196060791-f87dda12-de00-46a5-8920-a70e736a82ff.png)

The home page contains a welcome message for the user.

### 4. Programs Page 
![Screenshot from 2022-10-17 01-08-53](https://user-images.githubusercontent.com/73560150/196060827-3ef4c793-45a5-4c95-8306-038e797e4577.png)

The programs page displays all the available fitness programs. Each panel displays a program's name, duration, and description.

### 5. Trainers Page

![Screenshot from 2022-10-17 01-08-58](https://user-images.githubusercontent.com/73560150/196060909-784f2303-e5eb-4ca7-9880-d651ff112d05.png)
The Trainers page displays all the gym's trainers and their details. A user can view a trainer's image, name, specialization, bio, and the number of trainers assigned to them.

### 6. Reviews Page
![Screenshot from 2022-10-17 01-09-40](https://user-images.githubusercontent.com/73560150/196060968-9ed81408-910c-4b6f-b032-073ecfdbe334.png)

This page displays the reviews of different trainees. It contains a form that allows the user to post a review. There is also a delete button that allows a user to delete a post

### Logout
The logged-in or signed-in user is able to log out of the application. The logout option routes back to the Login Page.

## License

This project is licensed under [MIT](https://opensource.org/licenses/MIT) license.

Give a ⭐️ if this project helped you!

# Just Gym-It
