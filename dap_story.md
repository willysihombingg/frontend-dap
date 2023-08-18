<!-- User Story -->
Admin :
As a admin , i want to create a new user, so that i can see a new user on the users page
As a admin, i want to read user, so that i can see my list user on the users page
As a admin, i want to delete user, so that i didn't see that user on the user list

Student :
As a student, i want to create a new activity, so that i can see a new activity on the activity page
As a student, i want to read activity, so that i can see my list activity on the activity page
As a student, i want to delete activity, so that i didn't see that activity on the activity list

Buddy : 
As a buddy, i want to read activity, so that i can see my list activity on the activity page
As a buddy, i want to verify activity, so that i know that activity already verified

<!-- Acceptance Criteria -->
Admin :
Given login page when admin input valid email and valid password, then will redirect to users page
Given users page when admin create a new data users and input name, email , role , division, password, then get new data users import on the users page 
Given users page, when admin delete a data users, then i didn't see that user on the user list

Buddy :
Given login page when buddy input valid email and valid password, then will redirect to activity page
Given activity page, buddy when verify activity, buddy selected a user and choose date, then buddy click button verified and redirect page to activity page

Student : 
Given login page when student input valid email and valid password, then will redirect to activity page
Given activity page, student when input create a new data activity, student choose date and input activity and time, then get a new data activity on the activity page
Given activity page, when student delete activity, student choose date, then i didn't see that activity on the activity list


