import React from "react";
import { useAuth } from "../localStorage/useAuth";
import SignInModal from './SignInModal'

interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({children})=>{
    const {isAuthenticated} = useAuth();

    if (isAuthenticated){
        return <>{children}</>;
    }

    return(
        <>
        <SignInModal/>
        </>
    );
}
export default AuthGuard;