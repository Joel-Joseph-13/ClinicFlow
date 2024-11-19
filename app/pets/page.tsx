import PetForm from "@/components/forms/PetForm";
import Image from "next/image";
import Link from "next/link";

export default function PetsPage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <section className="container flex flex-col items-start justify-center p-4 lg:w-1/2">
        <div className="w-full max-w-[496px] text-left">
          <Image
            src="/assets/icons/logo-full.svg"
            height={40}
            width={200}
            alt="ClinicFlow Logo"
            className="mb-6 h-10"
          />

          <PetForm />

          <div className="mt-8 text-center">
            <Link href="/" className="text-xs text-green-500 hover:underline">
              Need human healthcare? Click here to return to patient registration.
            </Link>
          </div>

          <footer className="mt-20 flex w-full justify-between text-sm">
            <p className="text-dark-600">© 2024 ClinicFlow</p>
            <Link href="/pets?admin=true" className="text-green-500 hover:underline">
              Admin
            </Link>
          </footer>
        </div>
      </section>

      <section className="hidden lg:block lg:w-1/2">
        <Image
          src="/assets/images/pet-onboarding-img.png"
          height={1000}
          width={1000}
          alt="Veterinarian attending to a dog"
          className="h-full w-full object-cover"
          priority={false}
          loading="lazy"
        />
      </section>
    </main>
  );
}