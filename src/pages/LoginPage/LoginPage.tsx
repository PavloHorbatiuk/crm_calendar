import Logo from '@/assets/white.svg';
import loginIcon from '@/assets/Illustration.svg';

function LoginPage() {
  return (
    <div className="shadow-md max-w-screen-1xl  max-h-screen-md rounded-xl max-sm:flex grid grid-cols-2 mx-auto h-full ">
      <div className="bg-primary max-sm:hidden rounded-l-lg flex flex-col max-lg:px-8  pt-16 lg:px-24">
        <div className="flex items-center gap-7">
          <img src={Logo} alt="logo" />
          <h3 className="text-white">Work room</h3>
        </div>

        <div className="max-w-[24.875rem] pt-12">
          <h3 className="text-white">Your place to work</h3>
          <h3 className="text-white">Plan. Create. Control.</h3>
        </div>
        <div className="pt-20">
          <img src={loginIcon} alt="logo" />
        </div>
      </div>
      <div className="bg-white max-lg:px-2 max-sm:w-full rounded-r-lg flex flex-col pt-[7.188rem]  items-center ">
        <form className="max-w-[25.188rem] w-full">
          <h3 className="text-black">Sign In to Woorkroom</h3>
          <div className="pt-[2.063rem] flex flex-col ">
            <label className="pl-1.5">Email Address</label>
            <div className="pt-4">
              <input />
            </div>
          </div>
          <div className="pt-[2.063rem] flex flex-col ">
            <label className="pl-1.5">Password</label>
            <div className="pt-4">
              <input />
            </div>
          </div>
          <div className="flex items-center pt-8 justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="w-5 h-5" />
              <label className="ms-2  text-gray dark:text-gray">
                Remember me
              </label>
            </div>
            <a href="#">
              <p className="text-md max-sm:text-mm">Forgot Password?</p>
            </a>
          </div>
          <div className="text-center w-full mt-10">
            <button className="w-40 ">Sign In</button>
          </div>
          <div className="mt-10 text-center">
            <a href="#">
              <span className="text-primary text-md">
                Don’t have an account?
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
