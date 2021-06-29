import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

class Beers extends Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      console.log('data from api: ', res.data);
      this.setState({
        beers: res.data,
      });
    });
    // .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center underline text-2xl my-4">List of Beers</h1>
        <div>
          {this.state.beers.map((beer, index) => {
            return (
              <div
                className="flex justify-center border-2 p-2 shadow-2xl my-4 mx-2 bg-gray-50"
                key={index}
              >
                <div className="flex w-1/3 items-center">
                  <img
                    className="w-12 h-28 p-2 flex justify-center align-center"
                    src={beer.image_url}
                    alt=""
                  />
                </div>
                <div className=" mx-1 w-1/2">
                  <Link to={`/beer/${beer._id}`}>
                    <h1 className="font-bold text-xl my-2">{beer.name}</h1>
                  </Link>

                  <p className="my-2 text-gray-500 font-bold">{beer.tagline}</p>
                  <p>
                    <strong>Created by:</strong> {beer.contributed_by}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
