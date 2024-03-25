import React from 'react'
import { useTranslation } from 'react-i18next'

function Languages() {

    const [t, i18n] = useTranslation("global")


    return (
        <div>
            <h2>{t("header.message")}</h2>
            <p>{t("home.body")}</p>
            <h4>{t("about.join")}</h4>
        </div>
    )
}

export default Languages