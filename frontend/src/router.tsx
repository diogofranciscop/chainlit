import getRouterBasename from '@/lib/router';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import LandingPage from './pages/Landing';
import AuthCallback from 'pages/AuthCallback';
import Element from 'pages/Element';
import Env from 'pages/Env';
import FormsPage from 'pages/Forms';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Thread from 'pages/Thread';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/landing',
      element: <LandingPage />
    },
    {
      path: '/forms',
      element: <FormsPage />
    },
    {
      path: '/env',
      element: <Env />
    },
    {
      path: '/thread/:id?',
      element: <Thread />
    },
    {
      path: '/element/:id',
      element: <Element />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/login/callback',
      element: <AuthCallback />
    },
    {
      path: '*',
      element: <Navigate replace to="/" />
    }
  ],
  { basename: getRouterBasename() }
);
