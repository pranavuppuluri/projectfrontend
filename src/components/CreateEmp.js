import { useState } from "react";
import EmpForm from "./EmpForm";
import Axios from "axios";

function CreateEmp()
{
    const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]

    //Declaring a argument function
    const getState = (childData) => { //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {name: arr[0],email:arr[1],EmpID:arr[2]};
        Axios.post("https://projectbackend-i69c.onrender.com/EmpRoute/create-employees",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <EmpForm getState={getState}
                    nameValue=""
                    emailValue=""
                    EmpIDValue="">
                Create Employee
            </EmpForm>
        </form>
    )
}
export default CreateEmp;
