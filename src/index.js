import React, {useEffect, useContext, useReducer} from 'react'
import './index.css'
import MathJS from "math-expression-evaluator"
import ReactDom from 'react-dom'

const buttons = [
    ['number', '0', 'zero', 96],
    ['number', '1', 'one', 97],
    ['number', '2', 'two', 98],
    ['number', '3', 'three', 99],
    ['number', '4', 'four', 100],
    ['number', '5', 'five', 101],
    ['number', '6', 'six', 102],
    ['number', '7', 'seven', 103],
    ['number', '8', 'eight', 104],
    ['number', '9', 'nine', 105],
    ['dot', '.', 'decimal', 110],
    ['operator', '+', 'add', 107],
    ['operator', '-', 'subtract', 109],
    ['operator', '*', 'multiply', 106],
    ['operator', '/', 'divide', 111],
    ['clear', 'AC', 'clear', 32],
    ['delete', 'DEL', 'delete', 8],
    ['equals', '=', 'equals', 13]
]

const MAX_LENGTH = 12

const defaultValues = {
    calculated: false,
    current: '0',
    dotted: false,
    display: '0'
}

const Reducer = (state, action) => {
    switch (action.type) {
        case 'number':
            if (state.calculated) state = {...defaultValues}
            if (action.value === '0' && state.current === '0') return state;
            if (state.current === '0') return {...state, 
                current: action.value,
                display: state.display.slice(0, -1) + action.value}
            if (state.current.length < MAX_LENGTH) return {...state,
                current: state.current + action.value,
                display: state.display + action.value}
            else return state;
        case 'delete':
            if (state.calculated) state = {...defaultValues}
            return {...state,
                current: state.current.slice(0, -1),
                display: state.display.slice(0, -1)}
        case 'dot':
            if (state.calculated) state = {...defaultValues}
            if (!state.dotted) return {...state,
                current: state.current + action.value,
                display: state.display + action.value,
                dotted: true}
            else return state;
        case 'clear':
            return {...defaultValues}
        case 'operator':
            if (state.calculated) {
                state.display = state.current;
                state.calculated = false;
            }
            if (/\W{2}/.test(state.display.slice(-2))) state.display = state.display.slice(0,-2);
            if (action.value !== '-') if(/[+*/-]/.test(state.display.slice(-1))) state.display = state.display.slice(0,-1);
            return {...state,
                current: '',
                display: state.display + action.value,
                dotted: false
            }
        case 'equals':
            let ans = MathJS.eval(state.display);
            if (ans < Math.pow(10, 20)) ans = Number.parseFloat(ans.toFixed(10));
            return {...state,
                current: '' + ans,
                display: state.display + '=' + ans,
                calculated: true
            }
        default:
            return state;
    }
}

const StateContext = React.createContext()
const DispatchContext = React.createContext()

function Provider({children}) {
    const [state, dispatch] = useReducer(Reducer, {...defaultValues})

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

function Button(props) {
    const dispatch = useContext(DispatchContext)

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return () => {document.removeEventListener('keydown', handleKeyPress)}
    })

    function handleKeyPress(event) {
        if (event.keyCode === buttons[props.index][3]) handleClick();
    }

    function handleClick() {
        dispatch({
            type: buttons[props.index][0],
            value: buttons[props.index][1]
        })
    }
    return (
        <button id={buttons[props.index][2]} onClick={handleClick}>{buttons[props.index][1]}</button>
    )
}

function Display() {
    const state = useContext(StateContext)

    return (
        <div id={"screen"}>
            <div id={"formula"}>{state.display}</div>
            <div id={"display"}>{state.current}</div>
        </div>
    )
}

function Calculator() {
    return(
        <div id={"calculator"}>
            CATAN'S CALCULATOR WITHOUT REDUX
            <Provider>
                <Display/>
                <div id="buttons">
                    <div>
                        <Button index={15}/>
                        <Button index={16}/>
                        <Button index={17}/>
                    </div>
                    <div>
                        <Button index={7}/>
                        <Button index={8}/>
                        <Button index={9}/>
                        <Button index={11}/>
                    </div>
                    <div>
                        <Button index={4}/>
                        <Button index={5}/>
                        <Button index={6}/>
                        <Button index={12}/>
                    </div>
                    <div>
                        <Button index={1}/>
                        <Button index={2}/>
                        <Button index={3}/>
                        <Button index={13}/>
                    </div>
                    <div>
                        <Button index={0}/>
                        <Button index={10}/>
                        <Button index={14}/>
                    </div>
                </div>
            </Provider>
        </div>
    )
}

ReactDom.render(
    <Calculator/>,
    document.getElementById('root')
)