import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { validationLoginSchema } from './validationSchema';
import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '@/store/authStore';
import { LoginType } from './types';

function LoginForm() {
  const { setIsRegister, error: backendError } = useAuthStore();
  const resolver = useYupValidationResolver<LoginType>(validationLoginSchema);
  const login = useAuthStore((store) => store.login);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginType>({
    mode: 'onBlur',
    resolver,
  });

  const onSubmit = async (data: LoginType) => {
    const { success } = useAuthStore.getState();
    await login(data);

    if (success) {
      navigate({ to: '/dashboard' });
    }
  };

  useEffect(() => {
    if (backendError) {
      setError('email', {
        type: 'manual',
        message: backendError,
      });
    }
  }, [backendError, setError]);

  return (
    <form
      className="max-w-[25.188rem] w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-black">Sign In to Woorkroom</h3>
      <div className="pt-[2.063rem] flex flex-col ">
        <label className="pl-1.5">Email Address</label>
        <div className="pt-4">
          <input
            {...register('email')}
            className={errors.email?.message && 'border-red-400'}
          />
          <p className="ml-3 text-red-400">{errors.email?.message}</p>
        </div>
      </div>
      <div className="pt-[2.063rem] flex flex-col ">
        <label className="pl-1.5">Password</label>
        <div className="pt-4">
          <input
            type="password"
            {...register('password')}
            className={errors.password?.message && 'border-red-400'}
          />
          <p className="ml-3 text-red-400 ">{errors.password?.message}</p>
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
          <span
            className="text-primary text-md"
            onClick={() => setIsRegister(true)}
          >
            Don’t have an account?
          </span>
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
