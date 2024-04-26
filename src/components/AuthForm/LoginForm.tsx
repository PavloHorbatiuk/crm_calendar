import { useForm } from 'react-hook-form';
import { validationLoginSchema } from './validationSchema';
import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useAuth } from '@/common/hooks/useAuth';

export interface LoginType {
  email: string;
  password: string;
  isRememberMe?: boolean;
}

function LoginForm() {
  const resolver = useYupValidationResolver<LoginType>(validationLoginSchema);
  const user = useAuthStore((store) => store.authData);
  const login = useAuthStore((store) => store.login);
  const { registration } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginType>({
    mode: 'onBlur',
    resolver,
  });

  const onSubmit = (data: LoginType) => {
    //token, name
    //eslint-disable-next-line
    //@ts-ignore
    login(data);
  };

  useEffect(() => {
    navigate({ to: '/' });
  }, [user, navigate]);

  const nav = () => {
    console.log('nav');
    registration(true);
  };

  return (
    <form
      className="max-w-[25.188rem] w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-black">Sign In to Woorkroom</h3>
      <div className="pt-[2.063rem] flex flex-col ">
        <label className="pl-1.5">Email Address</label>
        <div className="pt-4">
          <input {...register('email', { required: true })} />
          <p className="text-red-400">{errors.email?.message}</p>
        </div>
      </div>
      <div className="pt-[2.063rem] flex flex-col ">
        <label className="pl-1.5">Password</label>
        <div className="pt-4">
          <input type="password" {...register('password')} />
          <p className="text-red-400 ">{errors.password?.message}</p>
        </div>
      </div>
      <div className="flex items-center pt-8 justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5"
            {...register('isRememberMe')}
          />
          <label className="ms-2  text-gray dark:text-gray">Remember me</label>
        </div>
        <a href="#">
          <p className="text-md max-sm:text-mm">Forgot Password?</p>
        </a>
      </div>
      <div className="text-center w-full mt-10">
        <button className="w-40 btn-primary">Sign In</button>
      </div>
      <div className="mt-10 text-center">
        <a href="#">
          <span className="text-primary text-md" onClick={nav}>
            Don’t have an account?
          </span>
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
