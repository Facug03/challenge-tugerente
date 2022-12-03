import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { createUser } from '../services/api'
import Loader from './icons/Loader'

export default function AddUser({ onClose, onCloseSubmit, search, searchBy }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = (data) => {
    setLoading(true)
    createUser(data)
      .then(() => {
        onCloseSubmit()
        reset()
      })
      .catch(() => {
        setError('Ha ocurrido un error')
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-black/50 flex items-center justify-center z-50'>
      {!error ? (
        <div className=' bg-white relative border-2 border-slate-700 p-5 rounded-md w-80'>
          <button onClick={onClose} className='absolute top-0 right-[6px]'>
            X
          </button>
          <h2 className='text-2xl mb-2 font-lexendBold text-red-500'>
            Añadir usuario
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex gap-3 flex-col items-start'
          >
            <div className='relative w-full'>
              <label className='block mb-2'>Nombre</label>
              <input
                className='mx-auto border-slate-700 px-2 py-1 border rounded-md outline-none'
                type='text'
                {...register('nombre', {
                  required: true,
                  value: searchBy === 'nombre' ? search : '',
                })}
              ></input>
              {errors.nombre?.type === 'required' && (
                <p className='absolute left-[23px] text-xs text-red-700'>
                  Obligatorio
                </p>
              )}
            </div>
            <div className='relative w-full'>
              <label className='block mb-2'>Razón social</label>
              <input
                className='mx-auto border-slate-700 px-2 py-1 border rounded-md outline-none'
                type='text'
                {...register('razonSocial', {
                  required: true,
                  value: searchBy === 'razonSocial' ? search : '',
                })}
              ></input>
              {errors.razonSocial?.type === 'required' && (
                <p className='absolute left-[23px] text-xs text-red-700'>
                  Obligatorio
                </p>
              )}
            </div>
            <div className='relative w-full'>
              <label className='block mb-2'>Nit</label>
              <input
                className='mx-auto border-slate-700 px-2 py-1 border rounded-md outline-none'
                type='text'
                {...register('nit', {
                  required: true,
                  value: searchBy === 'nit' ? search : '',
                })}
              ></input>
              {errors.nit?.type === 'required' && (
                <p className='absolute left-[23px] text-xs text-red-700'>
                  Obligatorio
                </p>
              )}
            </div>
            <div className='relative w-full'>
              <label className='block mb-2'>Teléfono</label>
              <input
                className='mx-auto border-slate-700 px-2 py-1 border rounded-md outline-none'
                type='text'
                {...register('telefono', {
                  required: true,
                  pattern: /^[0-9]*$/,
                  maxLength: 10,
                  value: searchBy === 'telefono' ? search : '',
                })}
              ></input>
              {errors.telefono?.type === 'required' && (
                <p className='absolute left-[23px] text-xs text-red-700'>
                  Obligatorio
                </p>
              )}
              {errors.telefono?.type === 'pattern' && (
                <p className='absolute left-[23px] text-xs text-red-700'>
                  Solo números
                </p>
              )}
              {errors.telefono?.type === 'maxLength' && (
                <p className='absolute left-[23px] text-xs text-red-700'>
                  Maximo 10 números
                </p>
              )}
            </div>
            <div className='relative w-full'>
              <label className='block mb-2'>Código</label>
              <input
                className='mx-auto border-slate-700 px-2 py-1 border rounded-md outline-none'
                type='text'
                {...register('codigo', {
                  required: true,
                  pattern: /^[0-9]*$/,
                  maxLength: 4,
                  value: searchBy === 'codigo' ? search : '',
                })}
              ></input>
              {errors.codigo?.type === 'required' && (
                <p className='absolute left-[23px] text-xs text-red-700'>
                  Obligatorio
                </p>
              )}
              {errors.codigo?.type === 'pattern' && (
                <p className='absolute left-[23px] text-xs text-red-700'>
                  Solo números
                </p>
              )}
              {errors.codigo?.type === 'maxLength' && (
                <p className='absolute left-[23px] text-xs text-red-700'>
                  Maximo 4 números
                </p>
              )}
            </div>
            <button className='mx-auto mt-2 bg-red-500 py-2 w-[83px] text-white rounded-md hover:bg-red-400 duration-200 ease-linear'>
              {loading ? (
                <Loader h='h-6' w='w-6' color='fill-white' />
              ) : (
                'Añadir'
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className=' bg-white relative border-2 border-slate-700 p-5 rounded-md py-8'>
          <h3 className='text-xl mb-3'>{error}</h3>
          <button
            onClick={onCloseSubmit}
            className='px-5 py-1 bg-red-500 rounded-2xl mr-2 text-white'
          >
            Aceptar
          </button>
        </div>
      )}
    </div>
  )
}

{
  /* <div className={style.container_input}>
<input
  required
  className={styl
  type="text"
  {...register("email", {
    required: true,
    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  })}
></input>
<span></span>
<label className={style.labelText}>Correo</label>
{errors.email?.type === "required" && (
  <p className={style.error}>Obligatorio</p>
)}
{errors.email?.type === "pattern" && (
  <div className={style.error}>
    <p>Ingresa un correo válido</p>
    <i class="fa-solid fa-circle-exclamation"></i>
  </div>
)}
</div> */
}
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
