import React, {useState,  useEffect } from 'react';
import CardList from '../CardList/CardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sort from '../Sort/Sort';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './style.css';
// import data from '../../assets/data.json'
import SeachInfo from '../InfoSearch/InfoSearch'
import useDebounce from '../hook/useDebounce';
import api from '../tools/api';
import { isLiked } from '../tools/product';

function App () {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const debounceSearchQuery = useDebounce(searchQuery, 150)

  const handleRequest = () => {
    // const filterCards = cards.filter( item => item.name.toUpperCase().includes(searchQuery.toUpperCase()));
    // setCards(filterCards);

    api.search(debounceSearchQuery)
    .then((searchResult)=> {
      setCards(searchResult)
    })
    .catch( err => console.log(err))
  }

useEffect (() => {
  Promise.all([api.getProductList(), api.getUserInfo()])
    .then(([productsData, userData]) => {
      setCurrentUser(userData)
      setCards(productsData.products)
    })
  
},[]);

useEffect(()=>{
  handleRequest()
  console.log("INPUT", debounceSearchQuery);
},[debounceSearchQuery])
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  }

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  }

  function handleUpdateUser(userUpdateData) {
    api.setUserInfo(userUpdateData)
      .then((newUserData) => {
        setCurrentUser(newUserData)
      })
  }

  function handleProductLike(product) {
    const liked = isLiked(product.likes, currentUser._id)
    api.changeLikeProduct(product._id, liked)
      .then((newCard) => {
        const newProducts = cards.map(cardState => {
          console.log('Карточка из стейта', cardState);
          console.log('Карточка c сервера', newCard);
          return cardState._id === newCard._id ? newCard : cardState
        })

        setCards(newProducts);
      })
  }

  return (
  <>
    <Header user={currentUser} onUpdateUser={handleUpdateUser}>
      <>
      <Logo />
      <Search onSubmit={handleFormSubmit} onInput={handleInputChange}/>
      </>
    </Header>
    <main className='content container'>
    <SeachInfo searchCount={cards.length} searchText={searchQuery}/>
     <Sort/>
      <div className='content__cards'>
        <CardList goods={cards} onProductLike={handleProductLike} currentUser={currentUser}/>
      </div>
    </main>
    <Footer/>
  </>
  )
}

export default App;
