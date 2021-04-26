import React, { useState } from 'react';
import './App.css';

import { TopBar } from './components/TopBar';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';

//TODO use firebase API
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({})

export const App = () => {
  const [count, setCount] = useState(9);

  function setNewIdForProduct() {
    setCount(count + 1);

    return count;
  }

  return (
    <>
      <TopBar />
      <MainContent setNewId={setNewIdForProduct} />
      <Footer />
    </>
  );
}
