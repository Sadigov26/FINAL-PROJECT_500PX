// EmailVerification.jsx

import React, { useState } from 'react';
import { useConfirmEmailMutation } from '../../redux/slices/usersApiSlice';
import { toast } from 'react-toastify';

const EmailVerification = ({ email }) => {
    const [verificationCode, setVerificationCode] = useState('');
    const [confirmEmail, { isLoading }] = useConfirmEmailMutation();

    const handleVerifyEmail = async (e) => {
        e.preventDefault();

        if (!verificationCode) {
            toast.error('Verification code is required');
            return;
        }

        try {
            await confirmEmail({ email, code: verificationCode });
            toast.success('Email verification successful!');
            // You may redirect or perform any necessary action upon successful verification
        } catch (error) {
            toast.error(`Email verification failed: ${error.data?.message || error.message}`);
        }
    };

    return (
        <form onSubmit={handleVerifyEmail}>
            <input
                type="text"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Verify'}
            </button>
        </form>
    );
};

export default EmailVerification;
