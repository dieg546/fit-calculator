import { useMemo } from "react"
import type { Actividad } from "../types/Index"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps={

    activities: Actividad[]

}

export default function CalorieTracker({activities}: CalorieTrackerProps) {

    const caloriesConsumed = useMemo(() => activities.reduce((totalConsumido, Actividad) => {
        return Actividad.category===1 ? 
        totalConsumido += Actividad.calories
        :totalConsumido},0) 
    ,[activities])
    
    const caloriesBurned = useMemo(() => activities.reduce((totalQuemado, Actividad) => {
        return Actividad.category===2 ? 
        totalQuemado += Actividad.calories
        :totalQuemado},0) 
    ,[activities])

    const netCalories = useMemo(()=> caloriesConsumed - caloriesBurned ,[activities])

    return (
        <>

            <h2 className=" text-4xl font-black text-white text-center">
                Resumen de Calorias
            </h2>

            <div className=" flex flex-col md:flex-row md:justify-between gap-5 items-center mt-5 ">

                <CalorieDisplay

                    calories={caloriesConsumed}
                    text="Consumidas"
                
                />

                <CalorieDisplay

                    calories={caloriesBurned}
                    text="Quemadas"
                
                />

                <CalorieDisplay

                    calories={netCalories}
                    text="Diferencia"
                
                />

            </div>

            
        
        </>
    )
}
