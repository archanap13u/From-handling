import React from 'react'

import { useForm } from 'react-hook-form';

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
      const onSubmit = (data) => {
        console.log(data); // Log form data to the console
      };
  return (
   <>
   <div className='d-flex  flex-column justify-content-center align-items-center bg-light' style={{height:'90vh'}}>
<h2 className='mb-3'>Form</h2>
   
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className='mb-2'>Name:</label>
        <input
        className='form-control'
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p>{errors.name.message}</p>} 
      </div>

      <div>
        <label htmlFor="email" className='mb-2'>Email:</label>
        <input
         className='form-control'
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className='mb-2'>Password:</label>
        <input
         className='form-control'
          id="password"
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit" className='btn btn-success mt-3'>Submit</button>
    </form>
    </div>
   </>
  )
}

export default Form