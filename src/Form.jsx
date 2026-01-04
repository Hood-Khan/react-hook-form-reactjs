import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Form() {
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: {
      name: "khan",
      email: "xyz@gmail.com",
      age: 18,
      social: {
        facebook: "",
        twitter: "",
      },
      dob: new Date(),
    },
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Registration Form
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
              ${errors.name ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2
              ${errors.email ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"}`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
              validate: (value) =>
                value !== "admin@example.com" ||
                "Enter a different email address",
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Age
          </label>
          <input
            type="number"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2
              ${errors.age ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"}`}
            {...register("age", {
              valueAsNumber: true,
              required: "Age is required",
              min: {
                value: 18,
                message: "Age must be at least 18",
              },
              max: {
                value: 25,
                message: "Age must be at most 25",
              },
            })}
          />
          {errors.age && (
            <p className="text-sm text-red-600 mt-1">
              {errors.age.message}
            </p>
          )}
        </div>

        {/* DOB */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            {...register("dob", { valueAsDate: true })}
          />
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Facebook
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              {...register("social.facebook")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Twitter
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              {...register("social.twitter")}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium
            hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>

      <DevTool control={control} placement="top-left" />
    </div>
  );
}

export default Form;
