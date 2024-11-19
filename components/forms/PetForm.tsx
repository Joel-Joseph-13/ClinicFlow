"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the PetFormValidation schema
const PetFormValidation = z.object({
  petName: z.string().min(2, { message: "Pet name must be at least 2 characters." }),
  petType: z.string().min(2, { message: "Pet type must be at least 2 characters." }),
  ownerName: z.string().min(2, { message: "Owner name must be at least 2 characters." }),
  ownerEmail: z.string().email({ message: "Invalid email address." }),
  ownerPhone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
});

const PetForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PetFormValidation>>({
    resolver: zodResolver(PetFormValidation),
    defaultValues: {
      petName: "",
      petType: "",
      ownerName: "",
      ownerEmail: "",
      ownerPhone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof PetFormValidation>) {
    setIsLoading(true);
    try {
      // Here you would typically send the form data to your backend
      console.log(values);
      // For now, we'll just simulate a delay and then redirect
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push(`/pets/confirmation`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <p className="text-dark-700">Let's get your pet registered for care.🐶🐰🐈..... </p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="petName"
          label="Pet's Name"
          placeholder="Snow"
          iconSrc="/assets/icons/pet.svg"
          iconAlt="pet"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="petType"
          label="Type of Pet"
          placeholder="Dog, Cat, etc."
          iconSrc="/assets/icons/pet-type.svg"
          iconAlt="pet type"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="ownerName"
          label="Owner's Name"
          placeholder="Joel"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="ownerEmail"
          label="Owner's Email"
          placeholder="joel123@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="ownerPhone"
          label="Owner's Phone Number"
          placeholder="(437) 123-4567"
        />

        <SubmitButton isLoading={isLoading}>Register Pet</SubmitButton>
      </form>
    </Form>
  );
};

export default PetForm;
