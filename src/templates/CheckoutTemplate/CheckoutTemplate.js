import { Fragment, useEffect } from "react";
import { Route ,Redirect} from "react-router-dom";
import { USER_LOGIN } from "../../util/setting/config";



 const CheckoutTemplate = (props) =>{//path, exact, Component
    const {Component, ...restProps} = props;

    useEffect(()=>{
        window.scrollTo(0,0);
    })

    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to='/login'/>
    }

    return <Route {...restProps} render={(propsPoute)=>{//props.loaction, props.history, props.match

        return<Fragment>

            <Component {...propsPoute}/>

            
        </Fragment>

    }}/>
}

export default CheckoutTemplate;