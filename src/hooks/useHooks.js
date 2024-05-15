import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useHooks(currency) {

  const [data, setData] = useState('')

    async function getUser() {
        try {
           const response = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=cur_live_rF23XJo19jWNmr86nb0jKjq29gjNBNnLtAudH9XA&base_currency=${currency}`);
          setData(response.data.data)
        } catch (error) {
          console.error(error);
        }
      }

     useEffect(() => {
        getUser()
    },[currency])

    return data
}
