import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import IconHeart from "./IconHeart";

const Gallery = () => {

    const { dataApi, setDataApi } = useContext(ContextAPI);  

    function myLike(e) {

        const newDataApi = dataApi.map(data => {
            if (data.id == e.target.id) {
                if (data.liked == false) {
                    return {
                        ...data,
                        liked: true
                    }
                } else {
                    return {
                        ...data,
                        liked: false
                    }
                };                
            };
            return data
        });
        setDataApi(newDataApi);        
    };    

  return (
    <div className="gallery grid-columns-5 p-3">
        {
            dataApi.map(item => {
                return (
                    <div className="photo"
                         key={item.id}
                         id={item.id}
                         style={{ backgroundImage: `url(${item.src.medium})`}}
                         onClick={myLike}>
                        <IconHeart filled={item.liked} />                                                
                        <p>{item.alt}</p>
                    </div>                    
                )
            })
        }        
    </div>
  );
};

export default Gallery;
