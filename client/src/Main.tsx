import react { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';//need to update
import App from './App';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import MessagePage from '/pages/account/MessagePage';
import OrderPage from './pages/account/OrdersPage';
import ProfilePage from './pages/account/ProfilePage';

import CustomerManagementPage from './pages/admin/CustomerManagementPage';
import DashboardPage from './pages/admin/DashboardPage';
import ProductManagementPage from './pages/admin/ProductManagementPage'
import RoleManagementPage from './pages/admin/RoleManagementPage';

import ContactUsPage from './pages/info/ContactUsPage';
import FAQPage from './pages/info/FAQ-Page';
import OurStoryPage from './pages/info/OurStoryPage';
import SupportPage from './pages/info/SupportPage';
import SustainabilityPage from './pages/info/SustainabilityPage';

import AllProductsPage from './pages/products/AllProductsPage';
import BirdsPage from './pages/products/BirdsPage';
import BugsPage from './pages/products/BugsPage';
import CatsDogPage from './pages/products/CatsDogsPage';
import CustomRequestPage from './pages/products/CustomRequestPage';
import FarmLifePage from './pages/products/FarmLifePage';
import MythicalCreaturesPage from './pages/products/MythicalCreaturesPage';
import ReptileAmphibiansPage from './pages/products/ReptileAmphibiansPage';
import SeaCreaturesPage from './pages/products/SeaCreaturesPage';
import WildAnimalsPage from './pages/products/WildAnimalsPage';
import WoodlandCreaturesPage from './pages/products/WoodlandCreaturesPage'

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

const MessagesPage = lazy(() => import('./pages/account/MessagesPage'));
const OrdersPage = lazy(() => import('./pages/account/OrdersPage'));
const ProfilePage = lazy(() => import('./pages/account/ProfilePage'));

const CustomerManagementPage = lazy(() => import('./pages/admin/CustomerManagementPage'));
const DashboardPage = lazy(() => import('./pages/admin/DashboardPage'));
const ProductManagementPage = lazy(() => import('./pages/admin/ProductManagementPage'));
const RoleManagementPage = lazy(() => import('./pages/admin/RoleManagementPage'))

const ContactUsPage = lazy(() => import('./pages/info/ContactUsPage'));
const FAQPage = lazy(() => import('./pages/info/FAQ-Page'));
const OurStoryPage = lazy(() => import('./pages/info/OurStoryPage'));
const SupportPage = lazy(() => import('./pages/info/SupportPage'));
const SustainabilityPage = lazy(() => import('./pages/info/SustainabilityPage'));

const AllProductsPage = lazy(() => import('./pages/products/AllProductsPage'));
const BirdsPage = lazy(() => import('./pages/products/BirdsPage'));
const BugsPage = lazy(() => import('./pages/products/BugsPage'));
const CatsDogsPage = lazy(() => import('./pages/products/CatsDogsPage'));
const CustomRequestsPage = lazy(() => import('./pages/products/CustomRequestPage'));
const FarmLifePage = lazy(() => import('./pages/products/FarmLifePage'));
const MythicalCreaturesPage = lazy(() => import('./pages/products/MythicalCreaturesPage'));
const ReptileAmphibiansPages = lazy(() => import('./pages/products/ReptilesAmphibiansPages'));
const SeaCreaturesPage = lazy(() => import('./pages/products/SeaCreaturesPage'));
const WildAnimalsPage = lazy(() => import('./pages/products/WildAnimalsPage'));
const WoodlandCreaturesPage = lazy(() => import('./pages/products/WoodlandCreaturesPage'));

const accountRoutes =
  [
    { path: '/messages', element: <MessagesPage /> },
    { path: '/orders', element: <OrdersPage /> },
    { path: '/profile', element: <ProfilePage /> }
  ];

const adminRoutes =
  [
    { path: '/customer-management', element: <CustomerManagementPage /> },
    { path: '/dashboard', element: <DashboardPage /> },
    { path: '/product-management', element: <ProductManagementPage /> },
    { path: '/role-management', element: <RoleManagementPage /> }
  ];

const infoRoutes =
  [
    { path: '/contact-us', element: <ContactUsPage /> },
    { path: '/faq', element: <FAQPage /> },
    { path: '/our-story', element: <OurStoryPage /> },
    { path: '/support', element: <SupportPage /> },
    { path: '/sustainability', element: <SustainabilityPage /> }
  ];

const productsRoutes =
  [
    { path: '/all-products', element: <AllProductsPage /> },
    { path: '/birds', element: <BirdsPage /> },
    { path: '/bugs', element: <BugsPage /> },
    { path: '/cats-dogs', element: <CatsDogsPage /> },
    { path: '/custom-requests', element: <CustomRequestPage /> },
    { path: '/farm-life', element: <FarmLifePage /> },
    { path: '/mythical-creatures', element: <MythicalCreaturesPage /> },    
    { path: '/reptiles-amphibians', element: <ReptilesAmphibiansPage /> },
    { path: '/sea-creatures', element: <SeaCreaturesPage /> },
    { path: '/wild-animals', element: <WildAnimalsPage /> },
    { path: '/woodland-creatures', element: <WoodlandCreaturesPage /> }
  ];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignUpPage /> },
      ...accountRoutes,
      ...adminRoutes,
      ...infoRoutes,
      ...productsRoutes,
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}