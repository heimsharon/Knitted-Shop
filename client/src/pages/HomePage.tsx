import React { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '..assets/styles/homepage.css'

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Title>Welcome to the Crochet Mushroom Shop</Title>
      <p> Find a crochet item to cherish</p>
    </HomeContainer>
  )
};
