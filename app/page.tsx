import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex flex-col items-center gap-4 xl:flex-row xl:justify-between">
            <p className="text-dark-600 text-center xl:text-left">
                © 2024 ClinicFlow
            </p>
          <div className="flex flex-col items-center gap-2 xl:flex-row xl:gap-4">
            <Link href="/pets" className="text-green-500 text-xs text-center xl:text-left">
              Ensure your loyal companion gets the care they deserve – click here for pet healthcare
            </Link>
            <Link href="/?admin=true" className="text-green-500 text-xs text-center xl:text-left">
              Admin
            </Link>
          </div>
          </div>

        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
