import { createContext, useReducer, type ReactNode } from "react";
import { ActivityReducer, initialState, type ActivityActions, type ActivityState } from "../reducers/ActivityReducer";

type ActivityProviderProps={

    children: ReactNode

}

type ActivityContextProps={

    state: ActivityState,
    dispatch: React.Dispatch<ActivityActions>

}

export const ActivityContext = createContext<ActivityContextProps>({} as ActivityContextProps)

export const ActivityProvider = ({children}: ActivityProviderProps)=>{

    const [state, dispatch] = useReducer(ActivityReducer,initialState)

    return(
        <ActivityContext.Provider

            value={{
                state,
                dispatch
            }}

        >
            {children}
        </ActivityContext.Provider>
    )

}