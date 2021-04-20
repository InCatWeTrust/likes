import React from 'react';
import Unsplash from 'unsplash-js';

// const code = location.search.split('code=')[1];

// if (code) {
//   const url = 'https://unsplash.com/oauth/token';

//   const getResourse = async () => {
//     const response = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         "client_id": "010bPX24fabO7QjQIbd9bLcVQjHxcAeOVb6IzCYTNl0",
//         "client_secret": "aJ5ecEg3pWnsJ_mzbAAntUPX2GKfaVr6lM0TwgDZ8I0",
//         "redirect_uri": "http://localhost:8080/auth",
//         "code": code,
//         "grant_type": "authorization_code"
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Ошибка со статус кодом ${response.status}`)
//     }

//     console.log(response);
//   }

//   getResourse();
// }

// console.log(code);

// const Code = () => {
//   return (
//       <div></div>
//   )
// }

// export default Code;

// let res = await ('https://unsplash.com/oauth/token', {
//         headers: {
//             clientId: "",
//             clientSecret: "",
//             redirectUri: "",
//             code: code,
//             grant_type: "authorization_code"
//         }
//     }) .then(res =>
//         res.json())
//         .then(console.log(res))