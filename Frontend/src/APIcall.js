import { useEffect, useState } from "react"

function APIcall(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        async function fetchdata() {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("no data is returned form the server")
                else {
            const jsondata =await response.json();
                    // console.log(jsondata);
                    setData(jsondata);
                };
            }
            catch (error) {

                setError(error);
            }
            finally {
                console.log("API call is complete");
            }
        }
      fetchdata();
    }, [url])
    return [data, error];
}
export default APIcall