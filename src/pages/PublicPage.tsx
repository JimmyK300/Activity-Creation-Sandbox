import React from 'react';
import SignInModal from '../components/SignInModal';
const  PublicPage: React.FC = () =>{
    return(
        <div className="public-page-content">
            <SignInModal/>
            <h1>This is Public Page</h1>
        </div>


    )
}
export default PublicPage



