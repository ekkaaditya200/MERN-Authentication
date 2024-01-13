import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      setLoading(true);
      const res =
        await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
      const data = await res.json();
      setLoading(false);
      if (data.success == false) {
        setError(true);
        return;
      }
      navigate('/sign-in');
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7">Sign Up</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder="Username"
          id='username'
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        ></input>

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
        >{loading ? 'Loading' : 'Sign Up'}</button>
        <OAuth></OAuth>
      </form>
      <div className="flex gap-2 mt-5 font-bold">
        <p>Have an account ?</p>
        <Link to='/sign-in'>
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error && 'Somethig went wrong'}</p>
    </div>
  )
}

export default SignUp
