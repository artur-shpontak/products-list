import React from 'react';
import './App.css';

import { TopBar } from './components/TopBar';
import { MainContent } from './components/MainContent/MainContent';
import { Footer } from './components/Footer/Footer';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({})

export const App = () => {
  return (
    <>
      <TopBar />
      <MainContent />
      <Footer />
    </>
  );
}
