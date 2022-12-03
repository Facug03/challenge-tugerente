import Loader from './icons/Loader'

export default function ListUsers({
  users,
  changeModal,
  loading,
  nextPage,
  page,
  onCloseSubmit,
  error,
}) {
  return (
    <main className='mb-12'>
      <div className='bg-slate-700 w-11/12 mx-auto rounded-md text-white pb-2'>
        <div className='flex justify-between items-center py-2 px-4'>
          <h2 className='font-lexendBold text-xl'>Lista de usuarios</h2>
          <div>
            <button
              onClick={onCloseSubmit}
              className='px-5 py-1 bg-red-500 rounded-2xl mr-2'
            >
              Actualizar
            </button>
            <button
              onClick={changeModal}
              className='px-5 py-1 bg-red-500 rounded-2xl'
            >
              Añadir
            </button>
          </div>
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
            {!!users.length &&
              users.map((user) => (
                <tr
                  key={user.id}
                  className='hover:bg-red-500 ease-in duration-75 text-left'
                >
                  <td className='py-3 pl-5'>{user.nombre}</td>
                  <td className='py-3'>{user.razonSocial}</td>
                  <td className='py-3'>{user.nit}</td>
                  <td className='py-3'>{user.telefono}</td>
                  <td className='py-3'>{user.codigo}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {error && <div className='py-6 text-xl'>{error}</div>}
        {!!users.length && (
          <button
            className={`px-5 py-1 bg-red-500 rounded-2xl mt-2 ${
              page.actualPage >= page.totalPages && 'hidden'
            } ${loading && 'hidden'}`}
            onClick={nextPage}
          >
            Cargas mas
          </button>
        )}
        {loading && <Loader pd='pt-4' w='w-8' h='h-8' color='fill-red-500' />}
      </div>
    </main>
  )
}
