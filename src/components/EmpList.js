import Axios from "axios";
import { useEffect, useState } from "react";
import EmpListRow from "./EmpListRow";

function EmpList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://projectbackend-i69c.onrender.com/EmpRoute")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[]);

    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{_id,name,email,rollNo},{},{},{}]
            return <EmpListRow obj={val}/>
        })
    }
    return (
        <table style={{maxWidth:"60%", margin: "50px auto"}} class="table table-bordered table-striped table-success">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Employee ID</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default EmpList;
