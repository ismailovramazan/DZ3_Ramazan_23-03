import { useSelector, useDispatch } from 'react-redux';
import {updateUser} from "./Actions.jsx";

const User =  ()  =>  {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {name, value} = event.target;
        dispatch(updateUser({...user, [name]: value}));
    };

    return (
        <div>
            <h1>User Details</h1>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={user.age}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Gender:
                    <select name="gender" value={user.gender} onChange={handleChange}>
                        <option value="men">Men</option>
                        <option value="girl">Girl</option>
                    </select>
                </label>
            </form>
            <div>
                <h2>User Details:</h2>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
            </div>
        </div>
    );
}
export default User
