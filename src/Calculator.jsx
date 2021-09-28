import React, { Component } from 'react'
import Display from './components/Display'
import Button from './components/Button'
export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num1: '',
            num2: '',
            op: '',
            result: ''
        }
    }

    handleNumber = number => {

        if (this.state.result === this.state.num1){
            this.clean()
        }

        this.state.op === '' || this.state.num1 === ''
        ? this.setState(state => ({num1: state.num1 + number}))
        : this.setState(state => ({num2: state.num2 + number}))
    }

    handleOperation = op => {
        this.setState({op})
    }

    clean = ()=> {
        this.setState(
            {
                num1: '',
                op: '',
                num2: '',
                result: ''
            }
        )
    }

    tryResolve = ()=> {
        let n1 = Number(this.state.num1)
        let n2 = Number(this.state.num2)
        let result

        switch (this.state.op) {
            case '+':
                result = String(n1+n2)
                this.setState({result: result, num1: result, num2: '', op: ''})
                break;
            case '-':
                result = String(n1-n2)
                this.setState({result: n1-n2, num1: result, num2: '', op: ''})
                break;
            case 'x':
                result = String(n1*n2)
                this.setState({result: n1*n2, num1: result, num2: '', op: ''})
                break;
            case '/':
                result = String(n1/n2)
                this.setState({result: result, num1: result, num2: '', op: ''})
                break;
        
            default:
                break;
        }
    }

    changeSing = ()=> {

        this.state.op === ''
        ? this.setState(state => ({num1: String(Number(state.num1 * -1))}))
        : this.setState(state => ({num2: String(Number(state.num2 * -1))}))
    }

    doPercentage = ()=> {

        let num1 = Number(this.state.num1);
        
        if (this.state.op === ''){
            this.setState(()=> (
                    {
                        result: String(num1/100),
                        num1: String(num1/100)
                    }
                )
            )
        }else{
            this.tryResolve()
            this.setState(state=> {
                return(
                    {
                        result: String(Number(state.result/100)),
                        num1: String(Number(state.num1/100))
                    }
                )
            })
        }
    }

    render() {
        const num1 = this.state.num1
        const num2 = this.state.num2
        const op = this.state.op
        const result = this.state.result
        var displayNumber

        if (result !== ''){
            displayNumber = result
        }else {
            if (op !== '' && num2 !== ''){
                displayNumber = num2
            }else if(num1){
                displayNumber = num1
            }else{
                displayNumber = 0;
            }
        }
        
        return (
            <div className="calculator">
                <Display number={displayNumber}/>
                <div className="btn-container">
                    <Button className="btn" value="AC" onButtonPress={this.clean}></Button>
                    <Button className="btn" value="+/-" onButtonPress={this.changeSing}></Button>
                    <Button className="btn" value="%" onButtonPress={this.doPercentage}></Button>
                    <Button className="btn operation" value="/" onButtonPress={this.handleOperation}></Button>
                    <Button className="btn" value="7" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn" value="8" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn" value="9" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn operation" value="+" onButtonPress={this.handleOperation}></Button>
                    <Button className="btn" value="6" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn" value="5" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn" value="4" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn operation" value="-" onButtonPress={this.handleOperation}></Button>
                    <Button className="btn" value="3" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn" value="2" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn" value="1" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn operation" value="x" onButtonPress={this.handleOperation}></Button>
                    <Button className="btn zero-btn" value="0" onButtonPress={this.handleNumber}></Button>
                    <Button className="btn" value="." onButtonPress={this.handleNumber}></Button>
                    <Button className="btn operation" value="=" onButtonPress={this.tryResolve}></Button>
                </div>
            </div>
        )
    }
}
