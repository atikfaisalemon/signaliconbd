"use server";

import { signIn, signOut } from "@/auth";
import { FormState, LoginFormSchema } from "./definitions";
import { AuthError } from "next-auth";

export async function signin(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  // validate the form data
  const validationResult = LoginFormSchema.safeParse({
    phone: formData.get("phone"),
  });

  const errorMessage = { message: "Invalid login credentials" };

  // if the form data is invalid, return the errors
  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  try {
    await signIn("credentials", {
      phone: validationResult.data.phone,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CallbackRouteError" || "CredentialsSignin":
          return errorMessage;
        default:
          return { message: "Something went wrong!" };
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut();
}
