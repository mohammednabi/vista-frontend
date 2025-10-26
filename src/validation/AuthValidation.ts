import * as zod from "zod";

export const SignupFormValidation = zod
  .object({
    username: zod
      .string({ required_error: "This field is required" })
      .min(3, { message: "Username should have at least 3 characters" })
      .regex(/^[a-zA-Z0-9_]{3,20}$/, {
        message:
          "Username should only contain letters, numbers, and underscores (3-20 characters)",
      }),
    email: zod
      .string({ required_error: "This field is required" })
      .email({ message: "Invalid email" }),
    password: zod
      .string({ required_error: "This field is required" })
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password must be less than 100 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    repeatPassword: zod
      .string({ required_error: "This field is required" })
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password must be less than 100 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });

export const LoginFormValidation = zod.object({
  email: zod
    .string({ required_error: "This field is required" })
    .email({ message: "Invalid email" }),
  password: zod
    .string({ required_error: "This field is required" })
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be less than 100 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
});
