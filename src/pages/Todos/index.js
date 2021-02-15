import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFetch } from "../../utils/fetch";
import { useParams } from "react-router-dom";

function Todos() {
  const { t } = useTranslation();
  let { todo = 1 } = useParams();
  const { fetchData, response, isLoading } = useFetch(`/todos/${todo}`);
  const {
    fetchData: fetch,
    response: res,
    isLoading: il,
  } = useFetch("/users");

  useEffect(() => {
    fetchData();
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ul>
        <li>
          {isLoading ? (
            <h2>{t("laoding_todo", { todo: todo })}</h2>
          ) : (
            <p>{response && JSON.stringify(response)}</p>
          )}
        </li>
        <li>
          {il ? (
            <h2>{t("laoding_users")}</h2>
          ) : (
            <p>{res && JSON.stringify(res)}</p>
          )}
        </li>
      </ul>
    </>
  );
}

export { Todos };