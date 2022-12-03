import { useState, useEffect } from 'react'
import { getUsers } from './services/api'

import Nav from './components/Nav'
import AddUser from './components/AddUser'
import ListUsers from './components/ListUsers'

function App() {
  const [users, setUsers] = useState([])
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState({
    totalPages: 0,
    actualPage: 0,
    search: '',
    searchBy: 'nombre',
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
      setUsers([])
      setError('')
      setLoading(true)
      getUsers(0, page.search, e.target[0].value)
        .then((res) => {
          if (res.data.length) {
            setPage({
              ...page,
              actualPage: 0,
              totalPages: res.totalPages - 1,
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
      <Nav
        handleSubmit={handleSubmit}
        handleChange={(value) => setPage({ ...page, searchBy: value })}
        handleSearch={(value) => setPage({ ...page, search: value })}
        page={page}
      />
      <ListUsers
        users={users}
        changeModal={() => setModal(true)}
        nextPage={nextPage}
        loading={loading}
        page={page}
        onCloseSubmit={onCloseSubmit}
        error={error}
      />
      {modal && (
        <AddUser
          modal={modal}
          onCloseSubmit={onCloseSubmit}
          onClose={() => setModal(false)}
          search={page.search}
          searchBy={page.searchBy}
        />
      )}
    </div>
  )
}

export default App
