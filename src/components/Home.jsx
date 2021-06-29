import React from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <img className="w-full my-2" src={beersImage} alt=""></img>
        <h1 className="text-2xl">
          <Link to="/beers">Beers</Link>
        </h1>
        <p className="my-4 mx-2 justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab et minima
          beatae ut? Explicabo id rem est suscipit molestiae quae temporibus
          totam illo quidem repellat corrupti at, omnis, repudiandae
          exercitationem?
        </p>
      </div>
      <div>
        <img className="w-full my-2" src={randomBeerImage} alt=""></img>
        <h1 className="text-2xl">
          <Link to="/random-beers">Random Beers</Link>
        </h1>
        <p className="my-4 mx-2 justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          architecto sed et nam tempora ullam dignissimos, natus expedita,
          debitis nihil repellat. Ullam sunt earum officiis aliquid incidunt
          totam excepturi quod!
        </p>
      </div>
      <div>
        <img className="w-full my-2" src={newBeerImage} alt=""></img>
        <h1 className="text-2xl">
          <Link to="/new-beer">New Beers</Link>
        </h1>
        <p className="my-4 mx-2 flex justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quia
          quod recusandae non accusantium sunt omnis corporis soluta,
          repudiandae eius veniam culpa deserunt accusamus consequatur ipsa
          similique ea, alias facere.
        </p>
      </div>

      {/* <Link to="/beers">Beers</Link>
      <Link to="/randombeer">find random beer</Link>
      <Link to="/newbeer">add a beer</Link> */}
    </div>
  );
};

export default Home;
