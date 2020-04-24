const inquirer = require("inquirer")
const axios = require("axios")
const fs = require("fs")

inquirer.prompt ([
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your current location?",
    name: "location"
  },
  {
    type: "input",
    message: "Give us a short bio about yourself:",
    choices: [],
    name: "bio"
  },
  {
    type: "input",
    message: "What is your LinkedIn URL?",
    name: "linkedin"
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "github"
  }
]).then(response => {
  let html = response.name + "\n"
  html += response.location + "\n"
  html+= response.bio + "\n"
  html += response.linkedin + "\n"
  html += response.github + "\n"

  fs.writeFile("index.html", html, function(error) {
    if (error) {
      return console.log(error)
    }
    console.log("HTML written")
  }
  });