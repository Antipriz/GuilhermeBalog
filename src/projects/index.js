import ticTacToe from './tic-tac-toe.png'
import minesweeper from './minesweeper.png'
import genius from './genius.png'
import todolist from './todolist.png'
import keyboard from './js-music-keyboard.png'
import hello from './my-hello-worlds.png'

import capivara from './capivara-chat.png'
import dev from './dev-radar.png'
import portfolio from './portfolio-generator.png'
import api from './api.png'


const projects = {
    web: [
        {
            name: "Tic Tac Toe",
            description: "My implementation of Tic Tac Toe game.",
            languages: "JavaScript, HTML, CSS",
            homepage: "https://guilhermebalog.github.io/tic-tac-toe",
            repo_url: "https://github.com/GuilhermeBalog/tic-tac-toe",
            image: ticTacToe,
        
        },
        {
            name: "Minesweeper",
            description: "Web version of the classic Minesweeper.",
            languages: "JavaScript, HTML, CSS",
            homepage: "https://guilhermebalog.github.io/minesweeper",
            repo_url: "https://github.com/GuilhermeBalog/minesweeper",
            image: minesweeper,
        
        },
        {
            name: "Genius",
            description: "Digital version of Genius!",
            languages: "JavaScript, HTML, CSS",
            homepage: "https://guilhermebalog.github.io/genius",
            repo_url: "https://github.com/GuilhermeBalog/genius",
            image: genius,
        
        },
        {
            name: "Music Keyboard",
            description: "A music keyboard made in with the Tone.js framework.",
            languages: "JavaScript, HTML, CSS",
            homepage: "https://guilhermebalog.github.io/js-music-keyboard",
            repo_url: "https://github.com/GuilhermeBalog/js-music-keyboard",
            image: keyboard,
        
        },
        {
            name: "To Do List",
            description: "A simple To-do list app, made with pure Javascript.",
            languages: "JavaScript, HTML, CSS",
            homepage: "https://guilhermebalog.github.io/TodoList",
            repo_url: "https://github.com/GuilhermeBalog/TodoList",
            image: todolist,
        
        },
        {
            name: "Hello Worlds",
            description: "This is a web page with all languages that I know.",
            languages: "JavaScript, HTML, CSS",
            homepage: "https://guilhermebalog.github.io/my-hello-worlds",
            repo_url: "https://github.com/GuilhermeBalog/my-hello-worlds",
            image: hello,
        
        },
    ],
    
    node: [
        {
            name: "Capivara Chat",
            description: "Chat aplication made with Node.js and websockets.",
            languages: "Node.js, HTML, CSS",
            homepage: "https://capivarachat.herokuapp.com",
            repo_url: "https://github.com/GuilhermeBalog/capivara-chat",
            image: capivara,
        
        },
        {
            name: "Dev Radar",
            description: "Full Stack App to help you finding devs near you.",
            languages: "Node.js, ReactJS, React Native",
            homepage: "https://github.com/GuilhermeBalog/dev-radar",
            repo_url: "https://github.com/GuilhermeBalog/dev-radar",
            image: dev,
        
        },
        {
            name: "Portfolio Generator",
            description: "Generate a portfolio (like this site) from your Github repositories.",
            languages: "Node.js, ReactJS, React Native",
            homepage: "https://balogportfoliogenerator.herokuapp.com",
            repo_url: "https://github.com/GuilhermeBalog/portfolio-generator",
            image: portfolio,
        
        },
        {
            name: "University Cafeteria Menu",
            description: "API that uses Webscraping to serve the menu of University of São Paulo's Cafeteria.",
            languages: "Node.js, Pupeteer.js",
            homepage: "https://ru-scraping.herokuapp.com",
            repo_url: "https://github.com/GuilhermeBalog/ru-scraping",
            image: api,
        
        }
    ]
}

export default projects 

