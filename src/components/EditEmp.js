import { useParams } from "react-router-dom";
import EmpForm from "./EmpForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditEmp() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ name: "", email: "", EmpID: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://projectbackend-i69c.onrender.com/EmpRoute/update-employees/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, email, EmpID } = res.data;
                    setInitialValue({ name, email, EmpID });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { name: newData[0], email: newData[1], EmpID: newData[2] };
        Axios.put("https://projectbackend-i69c.onrender.com/EmpRoute/update-employees/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <EmpForm getState={getState}
                nameValue={initialValue.name}
                emailValue={initialValue.email}
                EmpIDValue={initialValue.EmpID}>
                    Update Employee
            </EmpForm>
        </form>
    )
}
export default EditEmp;
