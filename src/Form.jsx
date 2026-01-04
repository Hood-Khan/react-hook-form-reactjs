import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools';

function Form() {

    const { register, handleSubmit, control } = useForm();
    console.log(useForm())

    const onSubmit=(data)=>{
        console.log(data);
    }

  return (
    <>
        <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input className="border" type="text" id="name" {...register("name", { required: 'Name is required'})} /><br /><br />
            <label htmlFor="email">Email</label>
            <input className="border" type="text" id="email" {...register("email")} /><br /><br />
            <label htmlFor="age">Age</label>
            <input className="border" type="text" id="age" {...register("age")} /><br /><br />
            <button type="submit">Submit</button>
        </form>
        <DevTool control={control} placement="top-left" />
        </div>
    </>
  )
}

export default Form