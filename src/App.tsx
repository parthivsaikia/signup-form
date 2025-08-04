import { useForm } from "@tanstack/react-form";
import { checkPassword } from "./helpers/password";
import isValidEmail from "./helpers/isValidEmail";
import hasSpecialCharacters from "./helpers/hasSpecialChar";
import hasNumber from "./helpers/hasNumber";
import existingEmail from "./helpers/existingEmail";
import axios from "axios";

export default function SignupPage() {
  const form = useForm({
    defaultValues: {
      name: "",
      emailId: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
    },
    onSubmit: async ({ value }) => {
      await axios.post(`http://localhost:3000/users`, value);
      alert("Signup successfull");
    },
  });

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const maxDateString = `${year}-${month}-${day}`;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us and start your journey!
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Name Field */}
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <form.Field
                name="name"
                validators={{
                  onChange: ({ value }) => {
                    if (hasNumber(value) || hasSpecialCharacters(value)) {
                      return "Name cannot contain digit or special characters.";
                    }
                    return undefined;
                  },
                  onBlur: ({ value }) => {
                    if (value.length < 3) {
                      return "Name must be longer than 3 characters.";
                    }
                    return undefined;
                  },
                }}
                children={(field) => (
                  <>
                    <input
                      id="name"
                      required
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {!field.state.meta.isValid && (
                      <em className="text-red-400" role="alert">
                        {field.state.meta.errors.join(", ")}
                      </em>
                    )}
                  </>
                )}
              />
              <div className="h-5"></div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="emailId"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <form.Field
                name="emailId"
                validators={{
                  onChangeAsync: async ({ value }) => {
                    if (await existingEmail(value)) {
                      return "Email already in use";
                    }
                    return undefined;
                  },
                  onChangeAsyncDebounceMs: 1000,
                  onChange: ({ value }) => {
                    if (!isValidEmail(value)) {
                      return "Please provide a valid email.";
                    }
                    return undefined;
                  },
                }}
                children={(field) => (
                  <>
                    {" "}
                    <input
                      id="emailId"
                      name={field.name}
                      required
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {!field.state.meta.isValid && (
                      <em className="text-red-400" role="alert">
                        {field.state.meta.errors.join(", ")}
                      </em>
                    )}
                  </>
                )}
              />
              <div className="h-5"></div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <form.Field
                name="password"
                validators={{
                  onChange: ({ value }) => {
                    return checkPassword(value)?.split(".");
                  },
                }}
                children={(field) => (
                  <>
                    {" "}
                    <input
                      id="password"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {!field.state.meta.isValid && (
                      <ul className="text-red-500" role="alert">
                        {field.state.meta.errors.map((error) => (
                          <li key={error}>
                            <div>{error}</div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              />
              <div className="h-5"></div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <form.Field
                name="confirmPassword"
                validators={{
                  onChangeListenTo: ["password"],
                  onChange: ({ value, fieldApi }) => {
                    if (value !== fieldApi.form.getFieldValue("password")) {
                      return "Passwords don't match";
                    }
                    return undefined;
                  },
                }}
                children={(field) => (
                  <>
                    {" "}
                    <input
                      id="confirmPassword"
                      required
                      name={field.name}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {!field.state.meta.isValid && (
                      <em className="text-red-500" role="alert">
                        {field.state.meta.errors.join(", ")}
                      </em>
                    )}
                  </>
                )}
              />
              <div className="h-5"></div>
            </div>

            <div className="md:col-span-2 space-y-1">
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <form.Field
                name="dateOfBirth"
                validators={{
                  onChange: ({ value }: { value: string }) => {
                    if (!value) {
                      return "Date is required";
                    }

                    const birthDate = new Date(value);
                    const currentDate = new Date();

                    if (isNaN(birthDate.getTime())) {
                      return "Please enter a valid date";
                    }

                    const ageInDays =
                      (currentDate.getTime() - birthDate.getTime()) /
                      (1000 * 60 * 60 * 24);

                    if (ageInDays < 18 * 365.25) {
                      return "You must be older than 18";
                    }

                    return undefined;
                  },
                }}
                children={(field) => (
                  <>
                    {" "}
                    <input
                      id="dateOfBirth"
                      name={field.name}
                      required
                      value={field.state.value}
                      max={maxDateString}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {!field.state.meta.isValid && (
                      <em className="text-red-500" role="alert">
                        {field.state.meta.errors.join(", ")}
                      </em>
                    )}
                  </>
                )}
              />
              <div className="h-5"></div>
            </div>
          </div>

          <div className="pt-4">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  {isSubmitting ? `...` : `Sign up`}
                </button>
              )}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
