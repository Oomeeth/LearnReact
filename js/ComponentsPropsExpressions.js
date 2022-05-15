//Standards:
// 1) All components must act like pure functions with respect to their props - props should not be modified.
// 2) DO NOT create base component class. React encourages composition over inheritance for components.

//This is a valid React Component because it contains a props argument.
/* function FormatName(props)
{
    if(props._user)
    {
        //We can write HTML in React because of JSX
        return <span style={{ color: "red" }}>{props._user.firstName} {props._user.surname}</span>;
    }
    else
    {
        return "Stranger";
    }
} */

//OR

//Also a component. Equivalent to above. Provides more features than functions.
class FormatName extends React.Component
{
    textStyle = {
        color: 'red'
    };

    //React.Component requires render().
    render(){
        //We can write HTML in React because of JSX.
        return <span style={this.textStyle}>{this.props._user.firstName} {this.props._user.surname}</span>;
        //OR
        //return <span style={{ color: "red" }}>{this.props._user.firstName} {this.props._user.surname}</span>;
    }
}

const user = [{
    firstName: "John",
    surname: "Doe"
},
{
    firstName: "Jane",
    surname: "Doe"
}];

//Works with both classes and functions.
const element = (
    //Everything within {} is called an expression.
    //element is called by render. The render function can only have one root node.
    <div>
        <h1>
            Hello <FormatName _user={user[0]} />
        </h1>
        <h1>
            Hello <FormatName _user={user[1]} />
        </h1>
    </div>

);

//OR

/* //Will not work for FormatName class.
const element = (
    <h1> 
        Hello {FormatName(user)}
    </h1>
); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);