import { useForm } from 'react-hook-form'

export default function AddUser({ onClose, modal }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  return (
    <>
      {modal && (
        <div className='w-screen h-screen fixed top-0 left-0 bg-black/50 flex items-center justify-center z-50'>
          <div className=' bg-white relative border-2 border-black p-5 rounded-md'>
            <button onClick={onClose} className='absolute top-0 right-[6px]'>
              X
            </button>
            <h2 className='text-2xl mb-2'>Añadir usuario</h2>
            <form className='flex gap-3 flex-col items-start'>
              <div>
                <label className='block mb-2'>Nombre</label>
                <input
                  className='border-primary px-2 py-1 border-2 rounded-md outline-none'
                  name='name'
                />
              </div>
              <div>
                <label className='block mb-2'>Link</label>
                <input
                  className='border-primary px-2 py-1 border-2 rounded-md outline-none'
                  name='link'
                />
              </div>
              <div>
                <label className='block mb-2'>Nombre</label>
                <input
                  className='border-primary px-2 py-1 border-2 rounded-md outline-none'
                  name='name'
                />
              </div>
              <div>
                <label className='block mb-2'>Link</label>
                <input
                  className='border-primary px-2 py-1 border-2 rounded-md outline-none'
                  name='link'
                />
              </div>
              <div>
                <label className='block mb-2'>Nombre</label>
                <input
                  className='border-primary px-2 py-1 border-2 rounded-md outline-none'
                  name='name'
                />
              </div>
              <button className='bg-primary py-2 px-4 text-white rounded-md hover:bg-secondary duration-200 ease-linear'>
                Añadir
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

// <div className={style.container_input}>
// <input
//   required
//   className={style.input}
//   // placeholder="Email"
//   type="text"
//   {...register("email", {
//     required: true,
//     pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
//   })}
// ></input>
// <span></span>
// <label className={style.labelText}>Correo</label>
// {errors.email?.type === "required" && (
//   <p className={style.error}>Obligatorio</p>
// )}
// {errors.email?.type === "pattern" && (
//   <div className={style.error}>
//     <p>Ingresa un correo válido</p>
//     <i class="fa-solid fa-circle-exclamation"></i>
//   </div>
// )}
// </div>
// <div className={style.container_input}>
// <input
//   required
//   className={style.input}
//   // placeholder="Contraseña"
//   type="password"
//   {...register("password", {
//     required: true,
//     pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
//   })}
// ></input>
// <span></span>
// <label className={style.labelText}>Contraseña</label>
// {errors.password?.type === "required" && (
//   <p className={style.error}>Obligatorio</p>
// )}
// {errors.password?.type === "pattern" && (
//   <div className={style.error}>
//     <p>Mínimo 8 caracteres, (letras y números)</p>
//     <i class="fa-solid fa-circle-exclamation"></i>
//   </div>
// )}
// </div>
