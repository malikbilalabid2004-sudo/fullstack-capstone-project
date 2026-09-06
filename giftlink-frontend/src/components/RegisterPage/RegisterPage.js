import React, { useState } from 'react';
function RegisterPage() {
    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        });
    };
    return <div>Register</div>;
}
export default RegisterPage;
