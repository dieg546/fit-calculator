import type { Actividad } from "../types/Index"

export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity: Actividad}} |
    {type: 'update-activity', payload: {id: Actividad['id']}} | 
    {type: 'delete-activity', paylaod: {id: Actividad['id']}} | 
    {type: 'clear-activities'}

export type ActivityState={

    activities: Actividad[],
    activeId: Actividad['id']

}

const LocalActivity = () : Actividad[]=>{

    const acts = localStorage.getItem('activities')

    return acts ? JSON.parse(acts) : []
}

export const initialState: ActivityState = {

    
    activities: LocalActivity(),
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

    if(action.type === 'delete-activity'){


        return{

            ...state,
            activities: state.activities.filter(Act => Act.id !== action.paylaod.id)

        }

    }

    if(action.type==='clear-activities'){

        return{

            activities:[],
            activeId: ''

        }

    }

    return state

}
