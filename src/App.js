import React, { useState, useEffect } from 'react';
import Arrived from './components/Arrived';
import AsideMenu from './components/AsideMenu';
import Browse from './components/Browse';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from "./components/Header";
import Hero from "./components/Hero"

function App() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    (async function () {
      const response = await fetch(`https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc`, {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "x-api-key": "e12dae64-e563-4def-b98d-3779f81e31ee"
        }
      })
      const { nodes } = await response.json();
      setItems(nodes);
      console.log(items)
    })();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
