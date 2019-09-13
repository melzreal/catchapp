//initial groups. Q? Should these not be declared as ES6 functions instead?
//and are we to use var throughout the course or const/let?

var User = class {
  constructor(name) {
    this.name = name
  }
}

var Group = class {
  constructor(name) {
    this.name = name
  }
}

var Friends = class {
  constructor(friend) {
    this.friend = friend
  }
}

//tasks are everyday things that need to be done - like changing your sheets
var Tasks = class {
  constructor(taskname) {
    this.taskname = taskname
   
  }
}

//todos are things you aim to do eventually, like buy a new pillowcase
var Todos = class {
  constructor(todos) {
    this.todos = todos
    this.description = null
  }
}


