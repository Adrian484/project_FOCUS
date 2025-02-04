const state = {
  tasks: [],
  lists: [],
  activityTypes: ['Busywork', 'Charity', 'Cooking', 'DIY', 'Education', 'Music', 'Recreational', 'Relaxation', 'Social']
}

function renderHome() {
    document.querySelector('.page-CSS').innerHTML = `
    <link rel="stylesheet" href="./css/home.css">
    `
    document.querySelector('#page').innerHTML = `
        <h1 class="link" onClick="renderAddTask()">Get Started!</h2>
        <h2 class="link" onClick="renderTaskGenerator()">
            I'm bored... <br>
            Any suggestions?
        </h2>
        <ul class="temporary">
            <li>Tasks:</li>
            <li class="link" onClick="renderAddTask()">Add Task</li>
            <li class="link" onClick="renderList()">Show Tasks</li>
            <li>Lists:</li>
            <li class="link" onClick="renderAddList()">New List</li>
            <li class="link" onClick="renderUserLists()">Show Lists</li>
        </ul>
    `
}

function checkUser() {
    fetch('/api/sessions')
    .then(res => res.json())
    .then(res => {
      if (res.result === 'successful') {
        state.loggedInUser = { id: res.user.user_id, name: res.user.name, email: res.user.email }
          document.querySelector('.user-controls ul').innerHTML = `
              <h3>Welcome back, <span class="link" onClick="renderAccount()">${state.loggedInUser.name}</span>!</h3>
              <span class="button" onClick="logOut()">Log Out</span>
          `
      } else {
          document.querySelector('.user-controls ul').innerHTML = `
                <li class="button" onClick="renderSignUp()">Sign Up</li>
                <li class="button" onClick="renderLogin()">Login</li>
          `
      }
    })
}

checkUser()
