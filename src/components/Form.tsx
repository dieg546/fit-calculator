import { useState, type Dispatch } from "react"
import { v4 as uuidv4 } from "uuid"
import { categories } from "../data/Categories"
import type { Actividad } from "../types/Index"
import type { ActivityActions } from "../reducers/ActivityReducer"

type FormProps={

    dispatch: Dispatch<ActivityActions>

}

const initialState: Actividad={

    id: uuidv4(),
    category:1,
    activity:'',
    calories:0

}

export default function Form({dispatch}: FormProps) {

    const [actividad, setActividad] = useState<Actividad>(initialState)


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {

        const isNumberField = ['category','calories'].includes(e.target.id)

        setActividad({

            ...actividad,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value

        })
        console.log(e.target.id)
        console.log(e.target.value)

    }


    const validSubmit = () =>{


        const {activity, calories} = actividad

        return activity.trim() !== '' && calories>0
    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault() // Permite que al mandar el form, no se recargue la pagina.

        dispatch({type:"save-activity",payload:{newActivity: actividad}})

        setActividad({
            ...initialState,
            id: uuidv4()
        })

    }

    return (
        <>

            <form 
                className=" space-y-5 bg-white p-10 rounded shadow-lg"
                onSubmit={handleSubmit}
            >

                <div className=" grid grid-cols-1 gap-3">

                    <label htmlFor="category">Categoria: </label>
                    <select 
                        name="" 
                        id="category" 
                        className=" border border-slate-300 p-4 rounded-lg w-full bg-white"
                        value={actividad.category}
                        onChange={handleChange}
                        >
                        
                        {categories.map(value=>(

                            <option 
                                key={value.id}
                                value={value.id}
                            >
                                {value.name}
                            </option>

                        ))}


                    </select>
                </div>

                <div className=" grid grid-cols-1 gap-3">

                    <label htmlFor="activity" className=" font-bold">Actividad: </label>
                    <input 
                        type="text"
                        id="activity"
                        className="border border-slate-300 p-4 rounded-lg" 
                        placeholder="Ej. Comida, jugos, Ejecicio, ensalda, etc."
                        value={actividad.activity}
                        onChange={handleChange}
                    />
                </div>

                <div className=" grid grid-cols-1 gap-3">

                    <label htmlFor="calories" className=" font-bold">Calorias: </label>
                    <input 
                        type="number"
                        id="calories"
                        className="border border-slate-300 p-4 rounded-lg" 
                        value={actividad.calories}
                        onChange={handleChange}
                    />
                </div>
                

                <input 
                    type="submit" 
                    value={actividad.category===1 ? "Guardar Comida": "Guardar Ejercicio"}
                    className=" w-full rounded-lg text-center p-3 bg-gray-800 text-white hover:bg-gray-600 cursor-pointer
                    disabled:opacity-20"
                    disabled={!validSubmit()}
                />

            </form>
        
        </>
    )
}
