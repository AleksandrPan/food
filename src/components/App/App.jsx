import React, {useState,  useEffect } from 'react';
import CardList from '../CardList/CardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sort from '../Sort/Sort';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './style.css';
import data from '../../assets/data.json'
import SeachInfo from '../InfoSearch/InfoSearch'


function App () {
  const [cards, setCards] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRequest = () => {
    const filterCards = data.filter( item => item.name.toUpperCase().includes(searchQuery.toUpperCase()));
    setCards(filterCards);
  }

  useEffect(()=>{
    handleRequest()
    console.log("INPUT", searchQuery);
  },[searchQuery])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  }

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  }

  return (
  <>
    <Header>
      <>
      <Logo />
      <Search onSubmit={handleFormSubmit} onInput={handleInputChange}/>
      </>
    </Header>
    <main className='content container'>
    <SeachInfo searchCount={cards.length} searchText={searchQuery}/>
     <Sort/>
      <div className='content__cards'>
        <CardList goods={cards}/>
      </div>
    </main>
    <Footer/>
  </>
  )
}

export default App;
