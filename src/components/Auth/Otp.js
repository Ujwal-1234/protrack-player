import React, { useState } from 'react'

export default function Otp() {
    const [code, setCode] = useState('')
    const [email, setEmail] = useState('***@gmail.com')
    const handleVerification = () => {
        // Call the API to verify the OTP
        // If valid, redirect to the Home page
        // If invalid, display an error message
    }
    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-gray-100">
            <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
                <h2 className="text-2xl font-bold mb-4">Verification</h2>
                <p className=' m-2'>Enter the code</p>
                <p className=' m-2'> Sent to {email}</p>
                <input
                type="email"
                placeholder="OTP"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
                />
                <button onClick={handleVerification} className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
            </div>
        </div>
    )
}
