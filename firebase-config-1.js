/* =========================================================
   CONFIGURAÇÃO DO FIREBASE — ALIANÇA SK
   =========================================================
   1. Vá em https://console.firebase.google.com
   2. Crie um projeto (gratuito).
   3. Em "Configurações do projeto" > "Geral" > "Seus apps",
      clique no ícone </> (Web) e copie os valores abaixo.
   4. Cole aqui substituindo os valores de exemplo.
   ========================================================= */

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// auth e storage só existem se os respectivos scripts do Firebase
// foram carregados na página (index.html não carrega auth/storage,
// admin.html carrega os dois).
const auth = firebase.auth ? firebase.auth() : null;
const storage = firebase.storage ? firebase.storage() : null;
