import { useEffect, useState } from "react";

function EmpForm(props)
{
    const [name,setName] = useState(props.nameValue);
    const [email,setEmail] = useState(props.emailValue);
    const [EmpID,setEmpID] = useState(props.EmpIDValue);

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setEmpID(props.EmpIDValue);
    },[props.nameValue,props.emailValue,props.EmpIDValue]);
   
    const arr = [name,email,EmpID];  //[Raj,raj@gmail.com,1]
   
    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your name" />
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" />
            <input defaultValue={props.EmpIDValue} onChange={(event)=>setEmpID(event.target.value)} class="form-control my-3" placeholder="Enter your Employee ID" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default EmpForm;
