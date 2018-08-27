class Counter extends React.Component {
    
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count,
            myName: 'Shekhar'
        }
    }


    componentDidMount() {

        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if(!isNaN(count)){
            this.setState((prevState) => ({count: localStorage.getItem('count')}));
        }
        

    }
    componentDidUpdate(prevProps, prevSate) {
        if(prevSate.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    componentDidUpdate
    handleAddOne(){
      this.setState((prevState) => {
          return {
              count: prevState.count+1,
              myName: 'Jessica'
          }
      });
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count-1,
                myName: 'Monica'
            }
        });
    }

    handleReset(){
       this.setState(() => {
           return {
               count: 0,
               myName: 'Shekhar'
           }
       });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count === 16?this.state.myName:this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));





// let count = 0;
// const addOne = () => {
//     count ++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count --;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }


// const renderCounterApp = () => {
//     const templateTwo = (

//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>reset</button>
//         </div>


//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();