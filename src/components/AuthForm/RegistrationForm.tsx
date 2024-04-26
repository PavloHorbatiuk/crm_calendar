import { useAuth } from '@/common/hooks/useAuth';
import { useNavigate } from '@tanstack/react-router';

export interface RegistrationType {
  email: string;
  name: string;
  password: string;
  confirmPassword?: string;
}

function RegistrationForm() {
  const navigate = useNavigate();
  const { registration } = useAuth();
  const nav = () => {
    registration(false);
    navigate({ to: '/login' });
  };
  return (
    <div>
      <form className="max-w-[25.188rem] w-full">
        <h3 className="text-black">Registration</h3>
        <div className="pt-[2.063rem] flex flex-col ">
          <label className="pl-1.5">Email Address</label>
          <div className="pt-4">
            <input />
          </div>
        </div>
        <div className="pt-[2.063rem] flex flex-col ">
          <label className="pl-1.5">Create Password</label>
          <div className="pt-4">
            <input type="password" />
          </div>
          <label className="pl-1.5">Confirm Password</label>
          <div className="pt-4">
            <input type="password" />
          </div>
        </div>
        <div className="flex items-center pt-8 justify-between"></div>
        <div className="text-center w-full mt-10">
          <button className="w-40 btn-primary">Registration</button>
        </div>
      </form>
      <button onClick={nav}>Login</button>
    </div>
  );
}

export default RegistrationForm;
