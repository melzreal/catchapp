# catchapp
JavaScript / Node Project to fulfill throughout the attendance of the WomenTechMakers courses. 

CatchApp will be a project to make an app that allows users to catchup with things they need to do. Instead of shoving them all in the calendar, basically have an organiser that reminds you there are people you want to catchup with and tasks to do.

# Initial Structure:

Classes:

User
Groups

Friends
Tasks
Todos

Tables
Same as above, plus a many-to-many GroupUsers table


A user has_many friends, tasks and todos
A user can belong_to many groups via GroupUsers
Groups have many users via GroupUsers