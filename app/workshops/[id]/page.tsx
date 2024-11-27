"use client";

import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useParams, useRouter } from "next/navigation";
import Input from "@/components/Input";
import { useRegisterForWorkshop } from "@/hooks/api/useWorkShops";
import toast from "react-hot-toast";

const WorkshopRegister = () => {
  const params = useParams<{ id: string }>();

  const { mutate: registerForWorkshop, isPending } = useRegisterForWorkshop();
  const router = useRouter();

  return (
    <section className="w-full py-16 font-Poppins container mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 font-bold text-gray-900 mb-8 text-center">
          Workshop Registration
        </h2>
      </div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          fatherName: "",
          college: "",
          course: "",
          address: "",
          workshopId: params.id,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          fatherName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          phone: Yup.string()
            .min(10, "Must be 10 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          college: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          course: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          address: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          registerForWorkshop(values, {
            onSuccess: (data) => {
              toast.success(data.data.message);
              router.push("/workshops");
            },

            onError: () => {
              toast.error("Something went wrong");
            },
          });
        }}
      >
        <Form className="space-y-10">
          <div className="flex gap-2 items-center md:flex-row flex-col">
            <Input
              className="flex-1"
              label="Name"
              name="name"
              required
              type="text"
            />
            <Input
              className="flex-1"
              label="Father's Name"
              name="fatherName"
              required
              type="text"
            />
          </div>

          <div className="flex gap-2 items-center md:flex-row flex-col">
            <Input
              className="flex-1"
              label="Phone"
              name="phone"
              required
              type="text"
            />
            <Input
              className="flex-1"
              label="Email"
              name="email"
              required
              type="email"
            />
          </div>

          <div className="flex gap-2 items-center md:flex-row flex-col">
            <Input
              className="flex-1"
              label="College"
              name="college"
              required
              type="text"
            />
            <Input
              className="flex-1"
              label="Course"
              name="course"
              required
              type="text"
            />
          </div>

          <div className="flex gap-2 items-center md:flex-row flex-col">
            <Input
              className="flex-1"
              label="Address"
              name="address"
              required
              type="text"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-purple-700 focus:shadow-outline focus:outline-none"
          >
            {isPending ? "Registering..." : "Register"}
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default WorkshopRegister;
