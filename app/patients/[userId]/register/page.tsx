import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={40}
            width={200}
            alt="ClinicFlow Logo"
            className="mb-6 h-10"
          />

          <RegisterForm user={user} />
          
          <footer className="mt-20 flex w-full justify-between text-sm">
            <p className="text-dark-600">© 2024 ClinicFlow</p>
          </footer>
        </div>
      </section>

      <section className="hidden lg:flex lg:w-1/2 justify-end items-center pr-4">
        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width={1000}
          alt="Registration Illustration"
          className="side-img max-w-[390px] object-cover mr-4"
          priority={false}
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Register;
