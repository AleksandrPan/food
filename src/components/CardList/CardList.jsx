import Card from '../Card/Card';
import './style.css';


const CardList = ({goods}) => {

    return (

        <div className="cards">
            {
                goods.map(function(item, index){
                    return(
                    <Card key={index}{...item}/>
                    )
                    
                })
            }
        </div>
       
       );
  };
  
// Используй уникальный ключ! 
  export default CardList;