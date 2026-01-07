import Form from "./components/Form"
import { useEffect, useReducer,useMemo } from "react"
import { ActivityReducer, initialState } from "./reducers/ActivityReducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"

function App() {
  
    const [state, dispatch] = useReducer(ActivityReducer, initialState)


    useEffect(()=>{
      
      localStorage.setItem('activities',JSON.stringify(state.activities))

    },[state.activities])

    const canRestartApp = () => useMemo(() => state.activities.length,[state.activities])

    console.log(state)

    return (
      <>
        <header className=" bg-lime-600 py-3">

          <div className=" max-w-4xl mx-auto flex justify-between items-center">

            <h1 className=" text-center text-lg font-bold text-white uppercase">
              Contador de calorias
            </h1>

            <button 
              className=" bg-gray-700 text-white rounded-lg p-3 shadow cursor-pointer
              disabled:opacity-35 disabled:cursor-default"
              disabled={!canRestartApp()}
              onClick={() => dispatch({type:'clear-activities'})}
            >
              Reiniciar App
            </button>

          </div>

        </header>

        <section className=" bg-lime-500 py-20 px-5">

          <div className=" max-w-4xl mx-auto">

            <Form
            
              dispatch={dispatch}
              state={state}

            />

          </div>

        </section>


        <section className=" bg-gray-800 py-10">

          <div className="max-w-4xl mx-auto">

            <CalorieTracker
            
              activities={state.activities}

            />

          </div>

        </section>

        <section className=" p-10 mx-auto max-w-4xl">

          <ActivityList

            activities={state.activities}
            dispatch={dispatch}
          
          />

        </section>

      </>
    )
}

export default App
