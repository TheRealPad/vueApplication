# Core

The core part handle the state of the application and api calls to handle the data

this part is divided in 4 parts:
- core
- services
- utils
- watchers

## Core

This part contains the element that will be called in the client part, it's where the logic is made, where we handle the state of the application by changing the data of this specific action by using the api call
it return a state and a function, the state contain the data, if applicable and the request state (pending, sucess, failure). The state can be a list of state for specific cases.

## Services

This part contains all api call, these function take a HttpClient and return a function that do the api call using the given http client. That's the only place in the code where you can make api calls.

## Utils

Contains all functions that can be used for any core functionalities

## Watchers

These functions are used if we want a functionality to react to another function call.

For example the functionality to retrieve all task must have a watcher for the one that create task, so you can update the list of task already retrieved without having to make an other api call.
