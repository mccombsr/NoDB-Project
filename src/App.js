import React, { Component } from 'react';
import './reset.css';
import './App.css';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import SearchButton from './Components/SearchButton';
import CriticReviewBox from './Components/CriticReviewBox';
import UserReviewBox from './Components/UserReviewBox';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      apiKey: 'e9e29e07fd294b58ac0ad40d95ac12bc',
      search: '',
    }
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="NavBar">
          <SearchBar className='SearchBar'/>
        </div>
        <main>
          <CriticReviewBox />
          <UserReviewBox />
        </main>
      </div>
    );
  }
}

export default App;
