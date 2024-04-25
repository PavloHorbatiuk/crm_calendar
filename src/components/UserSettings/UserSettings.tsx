import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import LogOutIcon from '@/assets/Logout.svg';
import Avatar from '@/assets/Avatar.svg';

type UserSettingsType = {
  userName: string;
};
function UserSettings({ userName }: UserSettingsType) {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md pb-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg  px-4 py-2 text-left text-sm font-mm hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <div className="flex items-center gap-2">
                  <img src={Avatar} />
                  <span className="text-sm font-medium ">{userName}</span>
                </div>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform ' : ''
                  } h-5 w-5 hover:text-primary`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                className={`${open ? 'bg-white shadow-md rounded-2xl' : ''} px-4 pb-2 pt-4 text-sm space-y-2`}
              >
                <button className="flex gap-2 hover:text-primary">
                  <Cog6ToothIcon className="h-5 w-5" /> Settings
                </button>
                <hr className="text-gray" />
                <button className="flex items-center gap-2 hover:text-primary">
                  <img src={LogOutIcon} /> Log out
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default UserSettings;
