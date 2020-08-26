import React, {Component} from "react";
import Preloader from "../components/common/Preloader/Preloader";



export const Suspense = (Component) =>{
    return (props)=> {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}