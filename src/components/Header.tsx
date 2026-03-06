import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../localStorage/useAuth';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/public'); 
    };

    return (
        <header className={styles.header}>
            <Link to={isAuthenticated ? "/" : "/public"} className={styles.logo}>
                Sandbox App
            </Link>
            
            <nav>
                <ul className={styles.nav}>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/" className={styles.navLink}>Home</Link></li>
                            <li><Link to="/activity-creation" className={styles.navLink}>Activity Creation</Link></li>
                            <li><Link to="/submission-view" className={styles.navLink}>Submissions</Link></li>
                            <li>
                                <button onClick={handleLogout} className={`${styles.actionBtn} ${styles.logoutBtn}`}>
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/public" className={styles.navLink}>Public Page</Link></li>
                            <li>
                                <Link to="/" className={styles.actionBtn}>
                                    Sign In
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;