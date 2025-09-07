import React { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '..assets/styles/homepage.css'

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Crocheted Mushroom Shop</h1>
      <p> Find a crochet item to cherish</p>
    </HomeContainer>
  )
};
