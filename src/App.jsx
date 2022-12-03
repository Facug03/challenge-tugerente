import { useState, useEffect } from 'react'
import { getUsers } from './services/api'

import AddUser from './components/AddUser'
import Search from './components/icons/Search'
import ListUsers from './components/ListUsers'

function App() {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState({
    totalPages: 0,
    actualPage: 0,
    search: '',
    searchBy: '',
  })
  const [error, setError] = useState('')

  useEffect(() => {
    getUsers(0)
      .then((res) => {
        setUsers(res.data)
        setPage({ ...page, totalPages: res.totalPages - 1 })
      })
      .catch(() => {
        setError('Un error ha ocurrido')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const onCloseSubmit = () => {
    setModal(false)
    setUsers([])
    setLoading(true)
    getUsers(0)
      .then((res) => {
        setUsers(res.data)
        setPage({
          ...page,
          totalPages: res.totalPages - 1,
          actualPage: 0,
          search: '',
        })
        setError('')
      })
      .catch(() => setError('Un error ha ocurrido'))
      .finally(() => {
        setLoading(false)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (page.search) {
      setLoading(true)
      getUsers(0, page.search, e.target[0].value)
        .then((res) => {
          if (res.data.length) {
            setPage({
              ...page,
              actualPage: 0,
              totalPages: res.totalPages - 1,
              searchBy: e.target[0].value,
            })
            setUsers(res.data)
            setError('')
          } else {
            setUsers([])
            setError(
              `No se han encontrado resultados con la palabra ${page.search}`
            )
          }
        })
        .catch(() => setError('Un error ha ocurrido'))
        .finally(() => {
          setLoading(false)
        })
    }
  }

  const nextPage = () => {
    setLoading(true)
    setPage({ ...page, actualPage: page.actualPage + 1 })
    getUsers(page.actualPage + 1, page.search, page.searchBy)
      .then((res) => {
        setUsers((bef) => bef.concat(res.data))
        setError('')
      })
      .catch(() => setError('Un error ha ocurrido'))
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className='text-center px-16'>
      <header className='mb-8'>
        <nav>
          <h1 className='my-5 text-3xl font-lexendBold text-red-500'>
            Administración de usuarios
          </h1>
          <form
            onSubmit={handleSubmit}
            className='flex items-center justify-center h-9'
          >
            <select className='w-[120px] font-lexendBold h-full rounded-l-2xl bg-red-500 text-white text-base cursor-pointer text-center'>
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
              onChange={(e) => setPage({ ...page, search: e.target.value })}
            />
            <button className='px-3 h-full border-2 border-red-500 border-l-0 rounded-r-2xl'>
              <Search width={20} height={20} />
            </button>
          </form>
        </nav>
      </header>
      <ListUsers
        users={users}
        changeModal={() => setModal(true)}
        nextPage={nextPage}
        loading={loading}
        page={page}
        onCloseSubmit={onCloseSubmit}
        error={error}
      />
      <AddUser
        modal={modal}
        onCloseSubmit={onCloseSubmit}
        onClose={() => setModal(false)}
      />
    </div>
  )
}

export default App
