import Logo from '@/assets/white.svg';
import RegistrationForm from '@/components/AuthForm/RegistrationForm';

function RegistrationPage() {
  return (
    <div className="shadow-md max-w-screen-1xl mx-auto h-full max-h-screen-md rounded-3xl max-sm:flex flex ">
      <div className="bg-primary max-sm:hidden rounded-l-3xl flex flex-col max-lg:px-8  pt-16 lg:px-24">
        <div className="flex items-center gap-7">
          <img src={Logo} alt="logo" />
        </div>

        <div className="max-w-[24.875rem] pt-12">
          <h3 className="text-white">Get started </h3>
        </div>
      </div>
      <div className="bg-white max-lg:px-2 max-sm:w-full rounded-r-3xl flex flex-col pt-[7.188rem]  items-center ">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
