import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import apiKey from './config';

//App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import InvalidRoute from './components/InvalidRoute';

const myApiKey = apiKey;

class App extends Component {

  state={
    imgs:[],
    river:[],
    mountain:[],
    ocean:[],
    topic: '',
    loading: true
  }

  //search the fixed 3 topics for Navlink 
  componentDidMount(){
    this.searchRiver();
    this.searchMountain();
    this.searchOcean();
  }

  //change loading state each time performSearch function is called
  changeLoadingStatus() {
    this.setState({ loading: true });
  }
  
  //search the images, fetch the data and store the data to the imgs state
  performSearch = ( query ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myApiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( this.changeLoadingStatus() )
      .then( response => this.setState({ imgs: response.data.photos.photo, topic: query, loading: false }))
      .catch( error => {console.log('error fetching and parsing data', error)})
  }

  //fetching data for the 3 fixed topic for Navlinks
  searchRiver = ( query = 'river' ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myApiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => this.setState({ river: response.data.photos.photo }))
      .catch( error => {console.log('error fetching and parsing data', error)})
  }

  searchMountain = (query = 'mountain') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myApiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => this.setState({ mountain: response.data.photos.photo }))
      .catch( error => {console.log('error fetching and parsing data', error)})
  }

  searchOcean = (query = 'ocean') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${myApiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( response => this.setState({ ocean: response.data.photos.photo, loading: false }))
      .catch( error => {console.log('error fetching and parsing data', error)})
  }

  // renders DOM element 
  render(){
    return (
      <BrowserRouter>
        <div className="container">
        <SearchForm query={this.state.topic} onSearch={this.performSearch} imgs={this.state.imgs} />
        <Nav />
        {/* loading message shows on the browser */}
        {
          (this.state.loading)
          ?<p>Loading...</p>
          :<Switch>
            <Route exact path="/" render={ () => <Redirect to="/river" /> } />
            <Route exact path="/river" render={ () => <PhotoContainer imgs={this.state.river} query='river' /> } />
            <Route exact path="/mountain" render={ () => <PhotoContainer imgs={this.state.mountain} query='mountain' /> } />
            <Route exact path="/ocean" render={ () => <PhotoContainer imgs={this.state.ocean} query='ocean' /> } />
            <Route exact path="/search/:topic" render={ () => <PhotoContainer imgs={this.state.imgs} query={this.state.topic} loading={this.state.loading} /> } />
            <Route component={InvalidRoute} />
          </Switch>
        }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
