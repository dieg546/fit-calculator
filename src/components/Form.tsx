import { categories } from "../data/Categories"

export default function Form() {
  return (
    <>

        <form 
            className=" space-y-5 bg-white p-10 rounded shadow-lg"
        >

            <div className=" grid grid-cols-1 gap-3">

                <label htmlFor="category">Categoria: </label>
                <select name="" id="category" className=" border border-slate-300 p-4 rounded-lg w-full bg-white">

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
                />
            </div>

            <div className=" grid grid-cols-1 gap-3">

                <label htmlFor="calories" className=" font-bold">Calorias: </label>
                <input 
                    type="number"
                    id="calories"
                    className="border border-slate-300 p-4 rounded-lg" 
                />
            </div>
            

            <input 
                type="submit" 
                value="Guardar data"
                className=" w-full rounded-lg text-center p-3 bg-gray-800 text-white hover:bg-gray-600 cursor-pointer"
            />

        </form>
    
    </>
  )
}
