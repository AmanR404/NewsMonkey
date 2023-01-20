import './App.css';
import Navbar from './Components/Navbar';
import Newsbox from './Components/Newsbox';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Newsbox key="/" country="in"/>} />
        <Route exact path='/science' element={<Newsbox key="/science" country="in" category="science"/>} />
        <Route exact path='/sports' element={<Newsbox key="/sports" country="in" category="sports"/>} />
        <Route exact path='/technology' element={<Newsbox key="/technology" country="in" category="technology"/>} />
        <Route exact path='/business' element={<Newsbox  key="/business" country="in" category="business"/>} />
        <Route exact path='/entertainment' element={<Newsbox  key="/entertainment" country="in" category="entertainment"/>} />
        <Route exact path='/health' element={<Newsbox key="/health" country="in" category="health"/>} />
      </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
