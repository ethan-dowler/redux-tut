import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    Hello. See Users <Link to="/users">here</Link>.
  </div>
);

export default Home;
