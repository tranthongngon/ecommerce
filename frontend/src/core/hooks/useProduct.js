import {useState, useEffect} from 'react';
import carServices from '../../core/services/carServices';

function useProduct() {
    const [dataP, setdataP] = useState([]);
    useEffect(() => {
        const fetchDataProd = async () => {
            await carServices.getCars().then(res => {
                setdataP(res.data);
                console.log(dataP);
            }).catch(err => console.log(err))
        };
        fetchDataProd();
    }, [dataP]);
    
    return [dataP]
}
export default useProduct;