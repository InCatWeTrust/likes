import React from 'react';

const Auth = (props) => {
    const { token, getToken } = props;
    console.log(`Token - ${token}`);

    const code = location.search.split('code=')[1];
    
    if (code && !token) {
        const url = 'https://unsplash.com/oauth/token';
    
        const getResourse = async () => {
            const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_id: "010bPX24fabO7QjQIbd9bLcVQjHxcAeOVb6IzCYTNl0",
                client_secret: "aJ5ecEg3pWnsJ_mzbAAntUPX2GKfaVr6lM0TwgDZ8I0",
                redirect_uri: "http://localhost:8080/auth",
                code: code,
                grant_type: "authorization_code",
            }),
            });

            if (response.status === 400) {
                window.location.assign('http://localhost:8080');
            } else if (!response.ok) {
            throw new Error(`Ошибка со статус кодом ${response.status}`)
            }

            const accessToken = await response.json();
            const tokenName = accessToken["access_token"];
    
            getToken(tokenName);
        }
    
        getResourse();
    } 

    return (
        <div></div>
    )
}

export default Auth;