import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css'
import Home from './components/Home'
import Users from './components/Users'
import Notes from './components/Notes'
import Note from './components/Note'
import Login from './components/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom"




const App = () => {
    const [user, setUser] = useState(null) 
    const [notes, setNotes] = useState([
      {
        id: 1,
        content: 'HTML is easy',
        important: true,
        user: 'Matti Luukkainen'
      },
      {
        id: 2,
        content: 'Browser can execute only Javascript',
        important: false,
        user: 'Matti Luukkainen'
      },
      {
        id: 3,
        content: 'Most important methods of HTTP-protocol are GET and POST',
        important: true,
        user: 'Arto Hellas'
      }
    ])

      const match = useRouteMatch('/notes/:id')
      const note = match 
        ? notes.find(note => note.id === Number(match.params.id))
        : null

  

      const login = (user) => {
        setUser(user)
      }

      const padding = {
        padding: 5
      }


      return (
        <Router>
          <div>
            <Link style={padding} to="/">home</Link>
            <Link style={padding} to="/notes">notes</Link>
            <Link style={padding} to="/users">users</Link>
            {user
              ? <em>{user} logged in</em>
              : <Link style={padding} to="/login">login</Link>
            }
          </div>

          <Switch>
              <Route path="/notes/:id">
                <Note note={note} />
              </Route>
              <Route path="/notes">
                <Notes notes={notes} />
              </Route>
              <Route path="/users">
                {user ? <Users /> : <Redirect to="/login" />}
              </Route>
              <Route path="/login">
                <Login onLogin={login} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
          </Switch>

          <div>
            <i>Note app, Department of Computer Science 2020</i>
          </div>
        </Router>
      )
}

export default App;
