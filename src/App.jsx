import React, { useState } from 'react';
import './App.scss';
// Contextos
import { ThemeContext, themes } from './contexts/ThemeContext';

// Componentes
import Counter from './components/Counter';
import Toolbar from './components/Toolbar';
import UseEffectApiRequest from './components/UseEffectApiRequest';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseCallbackComponent from './components/UseCallbackComponent';
import UseRefComponent from './components/UseRefComponent';
import SizeListener from './components/SizeListener';
import UseImperativeHandleComponent from './components/UseImperativeHandleComponent';


function App() {
  const [state, setState] = useState(themes.light);

  return (
    <div className="App">
      <ThemeContext.Provider value={state}>
        MyApp
        <h6>useContext</h6>
        <button onClick={() => setState(state === themes.light ? themes.dark : themes.light)}>Cambiar el tema</button>
        <Toolbar />
        <hr/>
        <h6>useState</h6>
        <Counter></Counter>
        <hr/>
        <h6>useEffect</h6>
        <UseEffectComponent></UseEffectComponent>
        <UseEffectApiRequest></UseEffectApiRequest>
        <SizeListener></SizeListener>
        <hr/>
        <h6>useReducer</h6>
        <UseReducerComponent></UseReducerComponent>
        <hr/>
        <h6>useCallback</h6>
        <UseCallbackComponent></UseCallbackComponent>
        <hr/>
        <h6>useRef</h6>
        <UseRefComponent></UseRefComponent>
        <hr/>
        <h6>useImperativeHandle</h6>
        <UseImperativeHandleComponent></UseImperativeHandleComponent>
        <hr/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
