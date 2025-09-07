import React from 'react';
import { NavLink } from 'react-router-dom';
import SingleLevelDropdownMenu from './SingleLevelDropdownMenu';
import { useAuth } from '@/utils/auth';
import { FaTag, FaFeather, FaBug, FaPaw, FaStar, FaTractor, FaDragon, FaLizard, FaFish, FaHippo, FaTree, FaComments, FaCart, FaUserCircle, FaEnvelope, FaQuestionCircle, FaBook, FaLifeRing, FaLeaf, FaUserFriends, FaTachometerAlt, FaBoxOpen, FaUserShield } from 'react-icons/fa';

export default function Navbar() {
  const { user } = useAuth();
  const isCustomer = user?.role === 'customer';
  const isAdmin = user?.role === 'admin';

  return (
    <nav className="navbar">
      <div className="nav-menus">
        <NavLink to='/' className="nav-home">
          Home
        </NavLink>

        <SingleLevelDropdownMenu
          buttonLabel='Products'
          menuItems={
            [
              { title: 'All Products', url: '/all-products', icon: <FaTag aria-label='Price Tag' /> },
              { title: 'Birds', url: '/birds', icon: <FaFeather aria-label='Bird Feather' /> },
              { title: 'Bugs', url: '/bugs', icon: <FaBug aria-label='Bug' /> },
              { title: 'Cats & Dogs', url: '/cats-dogs', icon: <FaPaw aria-label='Cat/Dog Paw Print' /> },
              { title: 'Custom Request', url: '/custom-request', icon: <FaStar aria-label='Star' /> },
              { title: 'Farm Life', url: '/farm-life', icon: <FaTractor aria-label='Farm Tractor' /> },
              { title: 'Mythical Creatures', url: '/mythical-creatures', icon: <FaDragon aria-label='Dragon' /> },
              { title: 'Reptiles & Amphibians', url: '/reptiles-amphibians', icon: <FaLizard aria-label='Lizard' /> },
              { title: 'Sea Creatures', url: '/sea-creatures', icon: <FaFish aria-label='Fish' /> },
              { title: 'Wild Animals', url: '/wild-animals', icon: <FaHippo aria-label='Hippo' /> },
              { title: 'Woodland Creatures', url: '/woodland-creatures', icon: <FaTree aria-label='Tree' /> },
            ]}
        />

        {isCustomer && (
          <SingleLevelDropdownMenu
            buttonLabel='Account'
            menuItems={
              [
                { title: 'Messages', url: '/messages', icon: <FaComments aria-label='Chat Bubble' /> },
                { title: 'Orders', url: '/orders', icon: <FaCart aria-label='Shopping Cart' /> },
                { title: 'Profile', url: '/profile', icon: <FaUserCircle aria-label='User Circle' /> },
              ]}
          />
        )}

        <SingleLevelDropdownMenu
          buttonLabel='Information'
          menuItems={
            [
              { title: 'Contact Us', url: '/contact-us', icon: <FaEnvelope aria-label='Letter Envelope' /> },
              { title: 'FAQ', url: '/faq', icon: <FaQuestionCircle aria-label='Question Mark in Circle' /> },
              { title: 'Our Story', url: '/our-story', icon: < FaBook aria-label='Open Book' /> },
              { title: 'Support', url: '/support', icon: <FaLifeRing aria-label='Life Ring' /> },
              { title: 'Sustainability', url: '/sustainability', icon: <FaLeaf aria-label='Tree Leaf' /> },
            ]}
        />

        {isAdmin && (
          <SingleLevelDropdownMenu
            buttonLabel='Admin'
            menuItems={
              [
                { title: 'Customer Management', url: '/customer-management', icon: <FaUserFriends /> },
                { title: 'Dashboard', url: '/dashboard', icon: <FaTachometerAlt /> },
                { title: 'Product Management', url: '/product-management', icon: <FaBoxOpen /> },
                { title: 'Role Management', url: '/role-management', icon: <FaUserShield /> }
              ]}
          />
        )}

      </div>
    </nav>
  );
}
