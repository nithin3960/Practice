import { useEffect, useState } from "react"

function APIupdate(url) {
    const [dataup, serDataup] = useState([]);
    const [errorup, setErrorup] = useState(null);
    useEffect(() => {
        async function updateData() {
            try {
                response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: 1,
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }),
                });
                if (!response.ok)
                    console.log('data has not returned and updated');
                else {
                    const dataUpdated = await response.json();
                    console.log(dataUpdated);
                    setErrorup(dataUpdated);
                }

            } catch (er) {
                setErrorup(er);
                console.log(er);
            }
        }
    }, [url])

    return [dataup, errorup];

    updateData();
}
export default APIupdate