import Card from '../Card/Card';
import './style.css';


const CardList = ({goods, onProductLike, currentUser}) => {

    return (

        <div className="cards">
            {
                goods.map(function(item, index){
                    return(
                    <Card key={item._id}{...item} onProductLike={onProductLike} currentUser={currentUser}/>
                    )
                    
                })
            }
        </div>
       
       );
  };
  
// Используй уникальный ключ! 
  export default CardList;