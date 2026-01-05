import type { Actividad } from "../types/Index"

export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity: Actividad}}

type ActivityState={

    activities: Actividad[]

}

export const initialState: ActivityState = {

    activities: []

}

export const ActivityReducer = (

        state: ActivityState = initialState,
        action: ActivityActions

    ) =>{

    if(action.type === 'save-activity'){
        // console.log(action.payload.newActivity)

        return{

            ...state,
            activities: [...state.activities, action.payload.newActivity]

        }

    }

    return state

}
