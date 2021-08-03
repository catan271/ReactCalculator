import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {createStore} from "redux";
import {Provider, connect} from "react-redux";
import MathJS from "math-expression-evaluator";

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

//redux
const MAX_LENGTH = 12;

const defaultValues = {
    calculated: false,
    current: '0',
    dotted: false,
    display: '0'
};

const actionCreator = (index) => ({
    type: buttons[index][0],
    value: buttons[index][1]
});

const Reducer = (state = Object.assign({}, defaultValues), action) => {
    switch (action.type) {
        case 'number':
            if (state.calculated) state = Object.assign({}, defaultValues);
            if (action.value == '0' && state.current=='0') return state;
            if (state.current == '0') return Object.assign({}, state, {
                current: action.value,
                display: state.display.slice(0, -1) + action.value,});
            if (state.current.length < MAX_LENGTH) return Object.assign({}, state, {
                current: state.current + action.value,
                display: state.display + action.value});
            else return state;
        case 'delete':
            if (state.calculated) state = Object.assign({}, defaultValues);
            return Object.assign({}, state, {
                current: state.current.slice(0, -1),
                display: state.display.slice(0, -1)});
        case 'dot':
            if (state.calculated) state = Object.assign({}, defaultValues);
            if (!state.dotted) return Object.assign({}, state, {
                current: state.current + action.value,
                display: state.display + action.value,
                dotted: true});
            else return state;
        case 'clear':
            return Object.assign({}, defaultValues);
        case 'operator':
            if (state.calculated) {
                state.display = state.current;
                state.calculated = false;
            }
            if (/\W{2}/.test(state.display.slice(-2))) state.display = state.display.slice(0,-2);
            if (action.value != '-') if(/[+*/-]/.test(state.display.slice(-1))) state.display = state.display.slice(0,-1);
            return Object.assign({}, state,{
                current: '',
                display: state.display + action.value,
                dotted: false
            });
        case 'equals':
            let ans = MathJS.eval(state.display);
            if (ans < Math.pow(10, 20)) ans = Number.parseFloat(ans.toFixed(10));
            return Object.assign({}, state, {
                current: '' + ans,
                display: state.display + '=' + ans,
                calculated: true
            })
        default:
            return state;
    }
};

const store = createStore(Reducer);

//React
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleClick() {
        store.dispatch(actionCreator(this.props.index));
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }
    handleKeyPress(event) {
        if (event.keyCode == buttons[this.props.index][3]) this.handleClick();
    }
    render() {
        return (
            <button id={buttons[this.props.index][2]} onClick={this.handleClick}>
                {buttons[this.props.index][1]}
            </button>
        );
    }
}

class Display extends React.Component {
    render() {
        return(
            <div id={"screen"}>
                <div id={"formula"}>{this.props.values.display}</div>
                <div id={"display"}>{this.props.values.current}</div>
            </div>
        )
    }
}

//react-redux
const mapStateToProps = (state) =>  {return {values: Object.assign({}, state)}};
const mapDispatchToProps = (dispatch) => {
    return {send: (index) => {dispatch(actionCreator(index))}};
}

const DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(Display);

class Calculator extends React.Component {
    render() {
        return (
            <div id={"calculator"}>
                CATAN'S CALCULATOR
                <Provider store={store}>
                    <DisplayContainer/>
                </Provider>
                <div id={'buttons'}>
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
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
)