console.log('app.js is running');

let app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    options: []
}


const onForSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    const remove = e.target.elements.option.remove.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    } else if (remove) {
        app.options = [];
        e.target.elements.option.value = '';
        render();
    }
    
};

const onClickRemove = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
   const randomNum = Math.floor(Math.random() * app.options.length);
   const option = app.options[randomNum];
   alert(option);
};

//JSX - JavaScript XML

const appRoot = document.getElementById('app');
const numbers = [55, 101, 1000];
const render = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && <p> {app.subtitle} </p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
            <button disabled={app.options.length=== 0} onClick = {onMakeDecision}>What should I do</button>
            <button onClick={onClickRemove}>Remove All</button>
            <ol>
               {
                   app.options.map((option) =>  <li key = {option}>{option}</li>)
               } 
            </ol>
            <form onSubmit = {onForSubmit}>
                <input type = "text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

}

render();