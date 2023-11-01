import { createContext, useState, useEffect } from "react";

export const ContextAPI = createContext();

const ProviderAPI = ({ children}) => {

    const [dataApi, setDataApi] = useState([]);

    const consultarAPI = async () => {
        const url = "../public/photos.json";
        const res = await fetch(url);
        const data = await res.json();
        setDataApi(data.photos);
    };
    useEffect(() => {
        consultarAPI()
    }, []);           

    return (
        <ContextAPI.Provider value={{ dataApi, setDataApi }}>
            {children}
        </ContextAPI.Provider>
    );
};

export default ProviderAPI;