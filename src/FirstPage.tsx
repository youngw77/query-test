import React from 'react';
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
    const navigate = useNavigate();

    const handleTest = () => {
        navigate('/test');
    }

    return (
        <div>
            <div>
                first page
            </div>
            <button onClick={handleTest}>test Page</button>
        </div>
    );
};

export default FirstPage;