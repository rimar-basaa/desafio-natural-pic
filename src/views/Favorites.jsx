import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { SlMagnifier } from "react-icons/sl";

const Favorites = () => {

    const { dataApi } = useContext(ContextAPI);
    const likes = dataApi.filter(like => like.liked == true); 
    
    function go(url) {
        window.open(url);        
    }

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {
            likes.map(item => {
                return (
                    <div className="photo"
                         key={item.id}
                         style={{ backgroundImage: `url(${item.src.medium})` }}
                         onClick={() => go(item.src.original)}>
                            <SlMagnifier className="icon" />
                            <p>Ver Original</p>
                    </div>                    
                )
            })
        } 
      </div>
    </div>
  );
};

export default Favorites;
