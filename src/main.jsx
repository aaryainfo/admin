import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './style.css'
import './style1.css'
import './common.css'
import './admin.css'
import"bootstrap/dist/css/bootstrap.min.css"
import"bootstrap/dist/js/bootstrap.js"
import { BrowserRouter } from 'react-router-dom'


import global_En from "./Translations/En/global.json"
import global_Pl from "./Translations/Pl/global.json"


import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

 i18next.init({
  interpolation : {escapeValue:false},
  lng : "En",
  resources:{
    En:{
      global:global_En,
    },
    Pl:{
      global:global_Pl,
    }
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
   <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>
  </BrowserRouter>

 
)
