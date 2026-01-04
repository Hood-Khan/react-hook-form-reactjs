import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Form() {
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues:{
        name: 'khan',
        email: 'xyz@gmail.com',
        age: 18,
        social:{
            facebook:'',
            twitter:''
        },
        dob: new Date()
    }
  });
  const { errors } = formState;

  console.log(useForm());

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            className="border"
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <input
            className="border"
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
              validate: (value)=>{
                return (
                    value != "admin@example.com" || "Enter a different email address"
                )
              }
            })}
          />
          {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          <br />
          <br />
          <label htmlFor="age">Age</label>
          <input
            className="border"
            type="number"
            id="age"
            {...register("age", { valueAsNumber: true, required: "Age is required",
                
                min:{
                    value:18,
                    message:'age must be at least 18'
                },
                max:{
                    value:25,
                    message:'age must be at most 25'
                }
             })}
          />
          {errors.age && <p className="text-red-600">{errors.age?.message}</p>}
          <br />
          <br />
          <label htmlFor="dob">DOB</label>
          <input
            className="border"
            type="date"
            id="dob"
            {...register("dob",
                {
                    valueAsDate: true
                }
            )}
          />
          <br />
          <br />
          <label htmlFor="facebook">Facebook</label>
          <input
            className="border"
            type="text"
            id="facebook"
            {...register("social.facebook")}
          />
          <br />
          <br />
          <label htmlFor="twitter">Twitter</label>
          <input
            className="border"
            type="text"
            id="twitter"
            {...register("social.twitter")}
          />
          
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <DevTool control={control} placement="top-left" />
      </div>
    </>
  );
}

export default Form;
