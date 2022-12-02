import { useState, useEffect } from 'react'
import { getUsers } from './api'
import AddUser from './components/AddUser'

import Search from './components/icons/Search'

function App() {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getUsers().then((res) => setUsers(res))
  }, [])

  return (
    <div className='text-center px-16 font-sans'>
      <header className='mb-12'>
        <nav>
          <h1 className='mt-5'>Usuarios</h1>
          <form className='flex items-center justify-center h-9'>
            <select className='w-[115px] h-full rounded-l-2xl bg-red-500 text-white text-base cursor-pointer text-center'>
              <option>Nombre</option>
              <option>Razon social</option>
              <option>Nit</option>
              <option>Telefono</option>
              <option>Codigo</option>
            </select>
            <input
              className='h-full border-2 border-red-500 outline-none px-1 border-l-0 w-60'
              type='text'
              placeholder='Buscar...'
            />
            <button className='px-3 h-full border-2 border-red-500 border-l-0 rounded-r-2xl'>
              <Search width={20} height={20} />
            </button>
          </form>
        </nav>
      </header>
      <main>
        <div className='bg-slate-700 w-11/12 mx-auto rounded-md text-white'>
          <div className='flex justify-end py-2 px-4'>
            <button
              onClick={() => setModal(true)}
              className='px-5 py-1 bg-red-500 rounded-2xl'
            >
              Anadir
            </button>
          </div>
          <table className='w-full'>
            <thead className='py-1'>
              <tr className='border-y border-slate-400 text-left'>
                <th className='py-2 pl-5'>Nombre</th>
                <th className='py-2'>Razon social</th>
                <th className='py-2'>Nit</th>
                <th className='py-2'>Telefono</th>
                <th className='py-2'>Codigo</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className='hover:bg-red-500 ease-in duration-75 text-left'>
                  <td className='py-3 pl-5'>{user.nombre}</td>
                  <td className='py-3'>{user.razonSocial}</td>
                  <td className='py-3'>{user.nit}</td>
                  <td className='py-3'>{user.telefono}</td>
                  <td className='py-3'>{user.codigo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <AddUser modal={modal} onClose={() => setModal(false)} />
    </div>
  )
}

export default App

{
  /* <tbody>
<tr className='hover:bg-red-500 ease-in duration-75 text-left'>
  <td className='py-3 pl-5'>Facundo Gonzalez</td>
  <td className='py-3'>Facu</td>
  <td className='py-3'>20-494-24</td>
  <td className='py-3'>1126622464</td>
  <td className='py-3'>1267</td>
</tr>
</tbody>
<tbody>
<tr className='hover:bg-red-500 ease-in duration-75 text-left'>
  <td className='py-3 pl-5'>Facundo Gonzalez</td>
  <td className='py-3'>No se</td>
  <td className='py-3'>20-494-24</td>
  <td className='py-3'>1126622464</td>
  <td className='py-3'>1267</td>
</tr>
</tbody>
<tbody>
<tr className='hover:bg-red-500 ease-in duration-75 text-left'>
  <td className='py-3 pl-5'>Facundo Gonzalez</td>
  <td className='py-3'>No se</td>
  <td className='py-3'>20-494-24</td>
  <td className='py-3'>1126622464</td>
  <td className='py-3'>1267</td>
</tr>
</tbody> */
}
