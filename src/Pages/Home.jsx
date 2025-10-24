import React, { useContext } from 'react'
import Header from '../Components/Header'
import MiddleMain from './../MiddleMain';
import ComposePage from './../Components/ComposePage';
import ComposeButton from './../Components/ComposeButton';
import { useAppContext } from '../Context/AppContext';
import toast from 'react-hot-toast';

const home = () => {
    const { openCompose } = useAppContext();


    return (
        <div className="w-screen h-screen relative">

            <div>
                {/* Header  */}
                <Header />

                {/* Middle Section  */}
                <MiddleMain />

                {/* Compose Page Overlay  */}
                {openCompose && (
                    <div className="fixed bottom-5 right-5 z-50">
                        <ComposePage />
                    </div>
                )}

                {/* Compose Button  */}
                <div className="fixed right-5 bottom-5 z-40">
                    <ComposeButton />
                </div>
            </div>
        </div>
    )
}

export default home
