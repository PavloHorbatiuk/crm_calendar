import { useForm } from 'react-hook-form';
import { useNavigate } from '@tanstack/react-router';
import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { validationRegistrationSchema } from './validationSchema';
import { useAuthStore } from '@/store/authStore';
import { USER_LOCAL_STORAGE_USER } from '@/common/const/localStorage';

export interface RegistrationType {
  email: string;
  name: string;
  password: string;
  confirmPassword?: string;
}

function RegistrationForm() {
  const { changeRegister } = useAuthStore();
  const navigate = useNavigate();
  const registerUser = useAuthStore((store) => store.register);
  const resolver = useYupValidationResolver<RegistrationType>(
    validationRegistrationSchema
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegistrationType>({
    mode: 'onBlur',
    resolver,
  });

  const onSubmit = (data: RegistrationType) => {
    const { email, name, password } = data;
    registerUser({
      email,
      name,
      password,
    });
  };

  const nav = () => {
    const token = JSON.stringify({ token: 'true' });
    localStorage.setItem(USER_LOCAL_STORAGE_USER, token);
    navigate({ to: '/auth/success' });
    changeRegister(false);
  };

  return (
    <>
      <form
        className="max-w-[25.188rem] w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-black">Registration</h3>
        <div className="pt-[2.063rem] flex flex-col ">
          <label className="pl-1.5">Email Address</label>
          <div className="pt-4">
            <input {...register('email')} />
            <p className="text-red-400">{errors.email?.message}</p>
          </div>
        </div>
        <div className="pt-[1.063rem] flex flex-col ">
          <label className="pl-1.5">Create name</label>
          <div className="pt-4">
            <input {...register('name')} />
            <p className="text-red-400 ">{errors.name?.message}</p>
          </div>
        </div>
        <div className="pt-[1.063rem] flex flex-col ">
          <label className="pl-1.5">Create Password</label>
          <div className="pt-4">
            <input type="password" {...register('password')} />
            <p className="text-red-400 ">{errors.password?.message}</p>
          </div>
        </div>
        <div className="pt-[1.063rem] flex flex-col ">
          <label className="pl-1.5">Confirm Password</label>
          <div className="pt-4">
            <input type="password" {...register('confirmPassword')} />
            <p className="text-red-400 ">{errors.confirmPassword?.message}</p>
          </div>
        </div>
        <div className="flex items-center pt-8 justify-between"></div>
        <div className="text-center w-full mt-7">
          <button onClick={nav} className="w-40 btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
