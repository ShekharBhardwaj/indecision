
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.flipVisibility = this.flipVisibility.bind(this);
    };

    flipVisibility() {
        this.setState((prevState) => {
           return {
               visibility: !prevState.visibility
           };
        });
    };

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.flipVisibility}>{this.state.visibility?'Hide':'Show details'}</button>
                {this.state.visibility?<p>Showing some details</p>:undefined}
            </div>
        );
    };

};





ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const elementDiv = document.getElementById('app');

// let visibility = false;

// const toggle = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick= {toggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>

//            {visibility && (<p> Hey these are some details</p>)}
//         </div>
//     );
//     ReactDOM.render(template, elementDiv);
// }

// render();
