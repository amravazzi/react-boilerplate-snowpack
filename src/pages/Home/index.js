import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "../../components/text";
import { useLS } from "../../utils/local-storage";
import styles from "./home.module.css";

function Home() {
    const { t, i18n } = useTranslation();
    const { lsSet } = useLS();

    function changeLanguage(lng) {
      i18n.changeLanguage(lng);
      lsSet("lang", lng);
    };

    return (
      <>
        <Text>{t("welcome_message")}</Text>

        <span>{t("change_lang")}: </span>
        <button
          className={styles.button}
          type="button"
          onClick={() => changeLanguage("pt")}
          disabled={i18n.language === "pt"}
        >
          Português do Brasil
        </button>

        <button
          className={styles.button}
          type="button"
          onClick={() => changeLanguage("en")}
          disabled={i18n.language === "en"}
        >
          English
        </button>
      </>
    );
}

export { Home };