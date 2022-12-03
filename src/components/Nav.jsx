import Search from './icons/Search'

export default function Nav({
  handleSubmit,
  handleChange,
  handleSearch,
  page,
}) {
  return (
    <header className='mb-8'>
      <nav>
        <h1 className='my-5 text-3xl font-lexendBold text-red-500'>
          Administración de usuarios
        </h1>
        <form
          onSubmit={handleSubmit}
          className='flex items-center justify-center h-9'
        >
          <select
            onChange={(e) => handleChange(e.target.value)}
            className='w-[120px] font-lexendBold h-full rounded-l-2xl bg-red-500 text-white text-base cursor-pointer text-center'
          >
            <option value='nombre'>Nombre</option>
            <option value='razonSocial'>Razon social</option>
            <option value='nit'>Nit</option>
            <option value='telefono'>Telefono</option>
            <option value='codigo'>Codigo</option>
          </select>
          <input
            className='h-full border-2 border-red-500 outline-none px-1 border-l-0 w-60'
            type='text'
            placeholder='Buscar...'
            name='search'
            value={page.search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button className='px-3 h-full border-2 border-red-500 border-l-0 rounded-r-2xl'>
            <Search width={20} height={20} />
          </button>
        </form>
      </nav>
    </header>
  )
}
