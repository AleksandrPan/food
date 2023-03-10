
import './style.css';


function Header({children, user, onUpdateUser}) {

  // const handleClickButtonEdit = (e)=> {
  //   e.preventDefault();
  //   onUpdateUser({name: 'Алекс', about: 'Студент'})
  // }

  return (
    <header className='header'>
      <div className="container">
        {/* {user?.email && <span>{user?.email}</span>}
        {user?.name && <span>{user?.name}</span>} */}

        {/* <button className='btn' >Изменить</button> */}
        <div className="header__wrapper">
          {children}
        </div>
      </div>
    </header>
  )
}

export default Header;
