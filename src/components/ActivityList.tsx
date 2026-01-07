import { useMemo, type Dispatch } from "react"
import type { Actividad } from "../types/Index"
import { categories } from "../data/Categories"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid"
import type { ActivityActions } from "../reducers/ActivityReducer"

type ActivityProps={

    activities: Actividad[]
    dispatch: Dispatch<ActivityActions>

}

export default function ActivityList({activities,dispatch}: ActivityProps) {

    const categoryName = useMemo(() => 
        (category: Actividad['category']) => categories.map(cat => cat.id === category? cat.name : '')
    ,[activities])


    const handleClickPencil= (idActivity: Actividad['id']) =>{

        dispatch({type: 'update-activity',payload: {id: idActivity}})

    }

    const handleClickDelete = (idToDelete:Actividad['id']) =>{

        console.log("Eliminando la actividad. "+idToDelete)

        dispatch({type: 'delete-activity',paylaod:{id:idToDelete}})

    }

    const emptyList = useMemo(()=> activities.length===0,[activities])

    return (
        <>
        
            <h2 className=" text-4xl font-bold text-slate-600 text-center">

                Comida y Actividades

            </h2>

            {  emptyList ? 

                <p className=" py-5 text-center font-black text-2xl">No hay Actividades aun</p>:

                activities.map(activity=>(

                    <div 
                        className="px-5 py-10 bg-slate-100 mt-5 flex justify-between"
                        key={activity.id}
                    >

                        <div className="space-y-2 relative">

                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                                ${activity.category===1 ? 'bg-lime-500' : "bg-orange-500"}`
                            }>
                                {categoryName(activity.category)}
                            </p>

                            <p className="text-2xl font-bold pt-5">
                                {activity.activity}
                            </p>

                            <p className="font-black text-4xl text-lime-500">
                                {activity.calories}
                                <span> Calorias</span>

                            </p>

                        </div>

                        <div className=" flex gap-5 items center">

                            <button
                                onClick={() => handleClickPencil(activity.id)}
                            >
                                <PencilSquareIcon

                                    className="h-8 w-8 text-gray-800 cursor-pointer"

                                />
                                
                            </button>
                            
                            <button
                                onClick={() => handleClickDelete(activity.id)}
                            >
                                <TrashIcon

                                    className="h-8 w-8 text-red-500 cursor-pointer"

                                />
                                
                            </button>

                        </div>

                    </div>

                ))}


        </>
    )
}
