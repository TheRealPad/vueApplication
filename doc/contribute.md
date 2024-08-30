# Project contribution

This document will contain all the information about how to contribute to the project.

How to work on each specific parts of the application are explain here:

- [client](client.md)
- [core](core.md)
- [server](server.md)

## Naming convention

All variables and function are using **camelCase**

A variable name should be only about the element it's handling and easy to understand

A function name must contain a verb and the element it handles (ex: retrieveUser, deleteAccount...)

**If you can't find a good name for your variable/function, maybe you don't need it or it's doing too many things 😉**

## Commit

For commit, we use [commitlint.io](https://commitlint.io/)

## Add a new feature

To add a new feature, you need to follow these steps:

- Create a new Issue on Github
- Give a meaningfull name and a good description (the more information you give,the best it is)
- Assign TheRealPad to the issue
- Create a new branch in the issue from **develop**
- Do your work on your branch (don't forget to test it)
- When it's finish, create a new pull request from your branch to develop and assign TheRealPad as a reviewer 
