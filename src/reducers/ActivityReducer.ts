import { Activity } from "react"
import type { Actividad } from "../types/Index"

export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity: Actividad}} |
    {type: 'update-activity',payload: {id: Actividad['id']}}

export type ActivityState={

    activities: Actividad[],
    activeId: Actividad['id']

}

export const initialState: ActivityState = {

    activities: [],
    activeId: ''

}

export const ActivityReducer = (

        state: ActivityState = initialState,
        action: ActivityActions

    ) =>{

    if(action.type === 'save-activity'){

        let updatedActivity : Actividad[] = []

        if(state.activeId){

            updatedActivity = state.activities.map(act => act.id === state.activeId ? action.payload.newActivity : act)

        }else{

            updatedActivity = [...state.activities, action.payload.newActivity]

        }

        return{

            ...state,
            activities: updatedActivity,
            activeId:''

        }

    }

    if(action.type === 'update-activity'){

        return{

            ...state, 
            activeId: action.payload.id

        }

    }

    return state

}
