import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

//const MessagesPage = lazy(() => import('./pages/accounts/MessagesPage'));
//const OrdersPage = lazy(() => import('./pages/accounts/OrdersPage'));
//const ProfilePage = lazy(() => import('./pages/accounts/ProfilePage'));

//const CustomerManagementPage = lazy(() => import('./pages/admin/CustomerManagementPage'));
//const DashboardPage = lazy(() => import('./pages/admin/DashboardPage'));
//const ProductManagementPage = lazy(() => import('./pages/admin/ProductManagementPage'));
//const RoleManagementPage = lazy(() => import('./pages/admin/RoleManagementPage'))

//const ContactUsPage = lazy(() => import('./pages/info/ContactUsPage'));
//const FAQPage = lazy(() => import('./pages/info/FAQ-Page'));
//const OurStoryPage = lazy(() => import('./pages/info/OurStoryPage'));
//const SupportPage = lazy(() => import('./pages/info/SupportPage'));
//const SustainabilityPage = lazy(() => import('./pages/info/SustainabilityPage'));

//const AllProductsPage = lazy(() => import('./pages/products/AllProductsPage'));
//const BirdsPage = lazy(() => import('./pages/products/BirdsPage'));
//const BugsPage = lazy(() => import('./pages/products/BugsPage'));
//const CatsDogsPage = lazy(() => import('./pages/products/CatsDogsPage'));
//const CustomRequestsPage = lazy(() => import('./pages/products/CustomRequestsPage'));
//const FarmLifePage = lazy(() => import('./pages/products/FarmLifePage'));
//const MythicalCreaturesPage = lazy(() => import('./pages/products/MythicalCreaturesPage'));
//const ReptilesAmphibiansPage = lazy(() => import('./pages/products/ReptilesAmphibiansPage'));
//const SeaCreaturesPage = lazy(() => import('./pages/products/SeaCreaturesPage'));
//const WildAnimalsPage = lazy(() => import('./pages/products/WildAnimalsPage'));
//const WoodlandCreaturesPage = lazy(() => import('./pages/products/WoodlandCreaturesPage'));

//const accountRoutes =
 // [
  //  { path: 'messages', element: <MessagesPage /> },
  //  { path: 'orders', element: <OrdersPage /> },
  //  { path: 'profile', element: <ProfilePage /> }
//  ];

//const adminRoutes =
 // [
  //  { path: 'customer-management', element: <CustomerManagementPage /> },
 //   { path: 'dashboard', element: <DashboardPage /> },
 //   { path: 'product-management', element: <ProductManagementPage /> },
  //  { path: 'role-management', element: <RoleManagementPage /> }
//  ];

//const infoRoutes =
 // [
   // { path: 'contact-us', element: <ContactUsPage /> },
   // { path: 'faq', element: <FAQPage /> },
   // { path: 'our-story', element: <OurStoryPage /> },
    //{ path: 'support', element: <SupportPage /> },
    //{ path: 'sustainability', element: <SustainabilityPage /> }
  //];

//const productsRoutes =
  //[
   // { path: 'all-products', element: <AllProductsPage /> },
   // { path: 'birds', element: <BirdsPage /> },
   // { path: 'bugs', element: <BugsPage /> },
   // { path: 'cats-dogs', element: <CatsDogsPage /> },
   // { path: 'custom-requests', element: <CustomRequestsPage /> },
   // { path: 'farm-life', element: <FarmLifePage /> },
   // { path: 'mythical-creatures', element: <MythicalCreaturesPage /> },    
   // { path: 'reptiles-amphibians', element: <ReptilesAmphibiansPage /> },
    //{ path: 'sea-creatures', element: <SeaCreaturesPage /> },
    //{ path: 'wild-animals', element: <WildAnimalsPage /> },
    //{ path: 'woodland-creatures', element: <WoodlandCreaturesPage /> }
  //];

export const router = createBrowserRouter([
  {
    path: '/',  
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);


