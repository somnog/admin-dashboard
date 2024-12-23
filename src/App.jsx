import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import MyLayout from './components/layout/layout'
import { Facilitators } from './components/facilitaters/facilitator'
import { Users } from './components/Users/users'
import { Tracks } from './components/Tracks/Tracks'
import { Tracks2 } from './components/Tracks/track2'
import { Test } from './components/test'

function App() {

  return (
  <>
  {/* hi */}
  <Routes>
    <Route path='/dashboard' element={<MyLayout/>}>
    <Route path='Facilitators' element={<Facilitators/>}/>
    <Route path='Users' element={<Users/>}/>
    <Route path='Tracks' element={<Tracks/>}/>
    <Route path='Test' element={<Test/>}/>

    </Route>
  </Routes>
  </>
  )
}

export default App
