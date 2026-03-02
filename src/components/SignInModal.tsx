import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../localStorage/useAuth"; 
import styles from "./SignInModal.module.css"; 

const SignInModal: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isOpen, setIsOpen] = useState(true);

    const handleMockLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        login();
        setIsOpen(false); 
        navigate('/');
    };

    const handleDismiss = () => {
        setIsOpen(false);
        navigate('/public'); 
        
    };

    if (!isOpen) return null;

    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button 
                    className={styles.closeButton} 
                    onClick={handleDismiss} 
                >
                    <IoClose size={24} />
                </button>

                <div className={styles.content}>
                    <h2 className={styles.title}>Log in</h2>

                    <form action="#" method="POST">
                        <div className={styles.inputGroup}>
                            <input 
                                type="text" 
                                id="username" 
                                placeholder="Mobile number, username or email" 
                                className={styles.label} 
                                required
                                autoFocus 
                            />
                            <input
                                type="password" 
                                id="password" 
                                placeholder="Password" 
                                className={styles.label} 
                                required
                            />
                        </div>
                    </form>

                    <div className={styles.buttonGroup}>
                        <button 
                            className={styles.login}
                            onClick={handleMockLogin}      
                        >
                            Log in
                        </button>
                        <button className={styles.NewAccount}>
                            Create new account
                        </button>
                    </div>

                </div>
            </div>
        </div>    
    );
}

export default SignInModal;