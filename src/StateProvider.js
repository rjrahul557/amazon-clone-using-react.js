//setup data layer
//we need to keep track of basket  
import React,{createContext,useContext,useReducer} from "react";

//this is data layer
export const stateContext = createContext();

//build a provider->this allow access of datalayer to app
export const StateProvider = ({reducer,initialState,children}) =>(
    <stateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext)
     
