import { useSelector } from "react-redux"

const Profile = () => {
  const { currentUser } = useSelector(state => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-5">
        <img src={currentUser.profilePicture} alt='profile' className="h-24 w-24 self-center rounded-full cursor-pointer mt-2"></img>
        <input defaultValue={currentUser.username} type="text" name="username" id="username" placeholder="Username" className="bg-slate-100 rounded-lg p-3" />
        <input defaultValue={currentUser.email} type="email" name="email" id="email" placeholder="Email" className="bg-slate-100 rounded-lg p-3" />
        <input type="password" name="password" id="password" placeholder="Password" className="bg-slate-100 rounded-lg p-3" />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-5 font-bold">
        <sapan className='text-red-600 cursor-pointer'>Delete Account</sapan>
        <sapan className='text-red-600 cursor-pointer'>Sign Up</sapan>
      </div>
    </div>
  )
}

export default Profile
Profile