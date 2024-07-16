import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
export const metadata = {
  title: "Login",
};

function Login() {
  return (
    <div className="pt-6 px-6 pb-6  max-[400px] rounded-lg dark:bg-black-1 bg-white-1 flex flex-col gap-4">
      <h1 className="font-bold text-orange-1 text-2xl">Podcaster.</h1>
      <p className="text-xs">to continue to Podcastr</p>
      <div className="social-auths flex items-center gap-2">
        <button className="p-3 border-[2px] border-black-5 rounded-md">
          <FaGoogle size={24} />
        </button>
        <button className="p-3 border-[2px] border-black-5 rounded-md">
          <IoLogoGithub size={24} />
        </button>
      </div>
      {/* btns end here */}
      <div className="w-full">
        <label>Email address</label>
        <input
          type="email"
          className="caret-orange-1  focus:outline-none input input-bordered min-w-full max-w-xs placeholder:text-sm  placeholder:text-gray-300 dark:placeholder:text-white-3 dark:border-none   text-sm border-black-5 inline-block"
          placeholder="abc@gmail.com"
        />
      </div>
      <div className="w-full">
        <label>Password</label>
        <input
          type="password"
          className="caret-orange-1 focus:outline-none input input-bordered min-w-full max-w-xs placeholder:text-sm placeholder:text-black-6  dark:placeholder:text-white-3 dark:border-none outline-none text-sm border-black-5 inline-block"
        />
      </div>
      <button className="w-full inline-block py-2 rounded-lg hover:bg-orange-600 bg-orange-1 text-white-1 uppercase">
        Login
      </button>
      {/* form end */}
      <div className="bottom text-sm flex justify-between items-center mt-10">
        <div className="bottom_left">
          <span>No account?</span>
          <Link href="/signup" className="text-orange-1">
            {" "}
            Signup
          </Link>
        </div>
        <div className="bottom_right ">
          <ul className=" transition flex items-center gap-2">
            <li className="hover:text-orange-1">
              <Link href="#">Help</Link>
            </li>
            <li className="hover:text-orange-1">
              <Link href="#">Privacy</Link>
            </li>
            <li className="hover:text-orange-1">
              <Link href="#">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
