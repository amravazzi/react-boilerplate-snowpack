import React, { useEffect } from "react";
import { useFetch } from "../../utils/fetch"

function Home() {
    const {fetchData, response, isLoading} = useFetch("/todos/1");
    const {
      fetchData: fetch,
      response: res,
      isLoading: il,
    } = useFetch("/users");

    useEffect(() => {
      fetchData();
      fetch();
    }, []);

    return (
      <>
        <ul>
          <li>
            {isLoading ? (
              <h2>Carregando ToDo #1...</h2>
            ) : (
              <p>{response && JSON.stringify(response)}</p>
            )}
          </li>
          <li>
            {il ? (
              <h2>Carregando usuários...</h2>
            ) : (
              <p>{res && JSON.stringify(res)}</p>
            )}
          </li>
        </ul>
      </>
    );
}

export { Home };