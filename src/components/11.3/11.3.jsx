import React,{useState} from "react";
import './style113.css'
const Ex113 = (props) => {
    const [state,setState]=useState({firstName:'aaa',lastName:'',selectedValue:'',text:''})
    const [display,setDisplay]=useState(true);

    const handleChange = e => {
        
        const { name, value } = e.target;
        console.log(name, value )
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onInputSubmit=(e)=>{
        console.log('is submiited')
      e.preventDefault(); 
      
    }

    
    return (
        <div>
            <form onSubmit={(e)=>{onInputSubmit(e)}} className="form1">

            {display?
            <>
            <label>First Name
            <input type="text" value={state.firstName} onChange={(e)=>{handleChange(e)}} name='firstName' />
            </label>
            <label>Last Name
            <input type="text" value={state.lastName} onChange={(e)=>{handleChange(e)}}  name='lastName'/>
            </label>
            <label >Choose a car: &nbsp;

            <select value={state.selectedValue}  onChange={(e)=>{handleChange(e)}}  name='selectedValue'>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            </label>
            <label >Text Area &nbsp;
            <textarea id="w3review" name="text" rows="4" cols="50" value={state.text} onChange={(e)=>{handleChange(e)}}>
            </textarea>
            </label>
            <button onClick={()=>setDisplay(!display)}>Continue</button>
            </>
             :<div className="review">
                 <p>First Name: {state.firstName}</p>
                 <p>Last Name: {state.lastName}</p>
                 <p>Selected Car: {state.selectedValue}</p>
                 <p>Text About You: {state.text}</p>
                 <button onClick={()=>setDisplay(!display)}>back</button>
                 <input type="submit" value='send survey' />
             </div>}
             </form>
        </div>
    );


}
export default Ex113;