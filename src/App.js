import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, NotFound, Movie } from './pages';
import Menu from './Menu'
import Sidebar from './Sidebar'
import Button from './Button'


class App extends Component {
  homeMenu = [
    {
      url: "/",
      name: "HOME"
    },
    {
      url: "/about",
      name: "ABOUT"
    },
    {
      url: "/movies",
      name: "MOVIE"
    },
  ]
  state = {
    open: false,
    movies:[] 
  }
  showSidebar = () => {
    this.setState({ open: !this.state.open })
  }

  //api사용
  componentDidMount(){ 
    fetch('https://yts.mx/api/v2/list_movies.json?limit=6')
    .then( res => res.json())
    .then( result => { 
      const {data: {movies}} = result 
      this.setState({movies}) 
    }) 
  }

  render(){
    const { open,movies } = this.state
    const { homeMenu } = this
    return (
      <div className="App">
        <Button handleClick={this.showSidebar}>Menu</Button>
        <Sidebar open={open}>
          <Menu menus={homeMenu}></Menu>
        </Sidebar>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="/movies" element={<Movie movies={movies}/>}>
            <Route path=":movieId" element={<Movie/>} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;