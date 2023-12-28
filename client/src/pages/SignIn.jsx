import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInStart, signInFailure, signInSuccess } from "../redux/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";
const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signInStart())
            const res =
                await fetch('/api/auth/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
            const data = await res.json();
            if (data.success == false) {
                dispatch(signInFailure(data));
                return;
            }
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            dispatch(signInFailure(error));
        }
    }

    return (
        <div className="p-10 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-bold my-7">Sign In</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder="Email"
                    id='email'
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                ></input>

                <input
                    type='password'
                    placeholder="Password"
                    id='password'
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                ></input>

                <button disabled={loading}
                    className="bg-slate-600 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80"
                >{loading ? 'Loading' : 'Sign In'}</button>
                <OAuth></OAuth>
            </form>
            <div className="flex gap-2 mt-5 font-bold">
                <p>Don&apos;t have an account ?</p>
                <Link to='/sign-up'>
                    <span className="text-blue-500">Sign Up</span>
                </Link>
            </div>
            <p className="text-red-700 mt-5">{error ? error.message || 'Somethig went wrong' : ""}</p>
        </div>
    )
}

export default SignIn
