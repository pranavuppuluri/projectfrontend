import Axios from "axios";
import { Link } from "react-router-dom";

function EmpListRow(props) {
    const { _id, name, email, EmpID } = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://projectbackend-i69c.onrender.com/EmpRoute/delete-employees/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{EmpID}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light me-4" to={"/edit-employees/" + _id}>
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default EmpListRow;
