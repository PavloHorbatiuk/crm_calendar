import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { validationRegistrationSchema } from './validationSchema';
import { useAuthStore } from '@/store/authStore';
import { RegistrationType } from './types';
import { useNavigate } from '@tanstack/react-router';

function RegistrationForm() {
  const {
    register: registerUser,
    setIsRegister,
    error: backendError,
  } = useAuthStore();
  const navigate = useNavigate();
  const resolver = useYupValidationResolver<RegistrationType>(
    validationRegistrationSchema
  );
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<RegistrationType>({
    mode: 'onBlur',
    resolver,
  });

  const onSubmit = async (data: RegistrationType) => {
    await registerUser(data);
    const { success } = useAuthStore.getState();
    if (success) {
      navigate({ to: '/auth/success' });
      setIsRegister(false);
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
    <>
      <form
        className="max-w-[25.188rem] w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-black">Registration</h3>
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
        <div className="pt-[1.063rem] flex flex-col ">
          <label className="pl-1.5">Create name</label>
          <div className="pt-4">
            <input
              {...register('name')}
              className={errors.name?.message && 'border-red-400'}
            />
            <p className="ml-3 text-red-400 ">{errors.name?.message}</p>
          </div>
        </div>
        <div className="pt-[1.063rem] flex flex-col ">
          <label className="pl-1.5">Create Password</label>
          <div className="pt-4">
            <input
              type="password"
              {...register('password')}
              className={errors.password?.message && 'border-red-400'}
            />
            <p className="ml-3 text-red-400 ">{errors.password?.message}</p>
          </div>
        </div>
        <div className="pt-[1.063rem] flex flex-col ">
          <label className="pl-1.5">Confirm Password</label>
          <div className="pt-4">
            <input
              type="password"
              {...register('confirmPassword')}
              className={errors.confirmPassword?.message && 'border-red-400'}
            />
            <p className="ml-3 text-red-400 ">
              {errors.confirmPassword?.message}
            </p>
          </div>
        </div>
        <div className="flex items-center pt-8 justify-between"></div>
        <div className="text-center w-full mt-7">
          <button type="submit" className="w-40 btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
