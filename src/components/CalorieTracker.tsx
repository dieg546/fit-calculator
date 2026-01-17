import { useMemo } from "react"
import type { Actividad } from "../types/Index"
import CalorieDisplay from "./CalorieDisplay"

import { useActivity } from "../hooks/useActivity"

export default function CalorieTracker() {

    const {state} = useActivity()
    
    const caloriesConsumed = useMemo(() => state.activities.reduce((totalConsumido, Actividad) => {
        return Actividad.category===1 ? 
        totalConsumido += Actividad.calories
        :totalConsumido},0) 
    ,[state.activities])
    
    const caloriesBurned = useMemo(() => state.activities.reduce((totalQuemado, Actividad) => {
        return Actividad.category===2 ? 
        totalQuemado += Actividad.calories
        :totalQuemado},0) 
    ,[state.activities])

    const netCalories = useMemo(()=> caloriesConsumed - caloriesBurned ,[state.activities])

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
