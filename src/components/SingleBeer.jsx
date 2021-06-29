import axios from 'axios';
import React, { Component } from 'react';
import Navbar from './Navbar';

class SingleBeer extends Component {
  state = {
    beer: '',
  };
  componentDidMount() {
    console.log('props: ', this.props);
    const id = this.props.match.params.id;
    console.log(id);
    axios.get('https://ih-beers-api2.herokuapp.com/beers/' + id).then((res) => {
      console.log('response: ', res);
      console.log('state', this.state.beer);
      this.setState({
        beer: res.data,
      });
      console.log('state', this.state.beer);
    });
  }
  render() {
    if (!this.state.beer) {
      return 'loading...';
    }
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <h1 className="text-center underline font-bold text-3xl my-5">
          This is single Beer
        </h1>
        <div className="flex flex-col justify-center border-2 p-3 shadow-2xl my-4 mx-3 bg-gray-50">
          <div className="flex justify-between ">
            <img
              className="w-20 h-50 "
              src={this.state.beer.image_url}
              alt=""
            />
            <div className="w-1/2">
              <h2 className="text-4xl font-bold my-3">
                {this.state.beer.name}
              </h2>
              <p className="my-2 text-gray-500 font-bold">
                {this.state.beer.tagline}
              </p>
              <p className="my-2 font-bold">
                <strong>First brewed: </strong>
                {this.state.beer.first_brewed}
              </p>
              <p>
                <strong>Attenuation level: </strong>
                {this.state.beer.attenuation_level}
              </p>
            </div>
          </div>

          <div>
            <p className="text-justify my-3">{this.state.beer.description}</p>
            <p>Contributed by: {this.state.beer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
