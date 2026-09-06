import React, { useState } from 'react';
function LoginPage() {
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer token'
            },
            body: JSON.stringify({})
        });
    };
    return <div>Login</div>;
}
export default LoginPage;
