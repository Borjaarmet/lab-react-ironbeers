import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

class FormBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: null,
    contributed_by: '',
    isSubmitted: false,
  };

  handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const beerToPost = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };
    console.log(beerToPost);
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', beerToPost)
      .then((res) => {
        console.log('response : ', res.data);
        this.setState({
          isSubmited: true,
        });
      });
  };

  render() {
    if (this.state.isSubmitted) {
      return <Redirect to="/beers" />;
    }
    return (
      <div>
        <Navbar />
        <h2 className="text-center underline font-bold text-3xl my-5">
          Add a new beer
        </h2>
        <div className="flex  justify-center align-center border-2 p-2 shadow-2xl mx-3 mt-6">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                className="text-center border p-1 w-full "
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="tagline">tagline: </label>
              <input
                className="text-center border p-1 my-1 w-full"
                type="text"
                name="tagline"
                id="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">description: </label>
              <input
                className="text-center border p-1 my-1 w-full"
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="first_brewed">first brewed: </label>
              <input
                className="text-center border p-1 my-1 w-full"
                type="text"
                id="first_brewed"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="brewers_tips">brewers tips: </label>
              <input
                className="text-center border p-1  my-1 w-full"
                type="text"
                id="brewers_tips"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="attenuation_level">attenuation level: </label>
              <input
                className="text-center border p-1 my-1 w-full"
                type="number"
                id="attenuation_level"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="contributed_by">contributed by: </label>
              <input
                className="text-center border p-1 my-1 w-full"
                type="text"
                id="contributed_by"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleChange}
              />
            </div>
            <div className="flex justify-center border p-2 bg-blue-300 text-white  my-5">
              <button className="text-center">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormBeer;
