
import './style.css';
import {ReactComponent as SearchPicIcon} from '../../assets/img/ic-search.svg'
import {ReactComponent as SearchCloseIcon} from '../../assets/img/ic-close-input.svg'

function Search({onSubmit, onInput}) {
  const handleInput = (e) => {
    onInput(e.target.value)
  }
  return (
   <form className="search" onSubmit={onSubmit}>
        <input type="text" className='search__input' placeholder='Поиск' onInput={handleInput}/>
        <button className='search__button'>
            <SearchPicIcon/>
            {false && <SearchCloseIcon/>}
        </button>
   </form>
  )
}

export default Search;