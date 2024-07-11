import {
  RegistrationSteps,
  useRegistration,
} from 'apps/web/src/components/Basenames/RegistrationContext';
import ShareUsernameModal from 'apps/web/src/components/Basenames/ShareUsernameModal';
import { Button, ButtonVariants } from 'apps/web/src/components/Button/Button';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';

export default function RegistrationSuccessMessage() {
  const { setRegistrationStep, selectedName } = useRegistration();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const customizeProfileOnClick = useCallback(() => {
    setRegistrationStep(RegistrationSteps.Profile);
  }, [setRegistrationStep]);

  return (
    <>
      <div className="items-left mx-auto flex w-full max-w-[50rem] flex-col justify-between gap-6 rounded-3xl border border-[#266EFF] bg-blue-600 p-10 shadow-xl transition-all duration-500 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold tracking-wider text-white">
          Congrats! This name is yours!
        </h1>
        <div className="flex flex-col gap-4 md:flex-row">
          <Link href={`names/${selectedName}`} className="cursor-pointer">
            <Button rounded fullWidth variant={ButtonVariants.SecondaryBounce}>
              Go to Profile
            </Button>
          </Link>
          <Button rounded fullWidth onClick={customizeProfileOnClick}>
            Customize Profile
          </Button>
        </div>
      </div>
      <ShareUsernameModal selectedName={selectedName} isOpen={isOpen} toggleModal={closeModal} />
      <p className="mt-6 text-center">
        <Link
          href="#share"
          className="font-bold uppercase tracking-wider text-white underline underline-offset-4"
          onClick={openModal}
        >
          Share your name on socials
        </Link>
      </p>
    </>
  );
}
