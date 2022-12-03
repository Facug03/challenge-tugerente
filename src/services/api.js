import { collection, addDoc } from 'firebase/firestore'
import { index } from './algolia'
import { db } from './firebase'

const users = collection(db, 'users')

export const getUsers = async (page, value, searchBy) => {
  if (!value) {
    const { hits, nbPages } = await index.search('', {
      hitsPerPage: 20,
      page: page,
    })

    const res = hits.map((user) => {
      return {
        id: user.objectID,
        codigo: user.codigo,
        nit: user.nit,
        nombre: user.nombre,
        razonSocial: user.razonSocial,
        telefono: user.telefono,
      }
    })

    return {
      totalPages: nbPages,
      data: res,
    }
  }

  const { hits, nbPages } = await index.search(value, {
    hitsPerPage: 20,
    attributesToRetrieve: [searchBy],
    page: page,
  })

  const res = hits.map((user) => {
    return {
      id: user.objectID,
      codigo: user._highlightResult.codigo.value.replace(/(<([^>]+)>)/gi, ''),
      nit: user._highlightResult.nit.value.replace(/(<([^>]+)>)/gi, ''),
      nombre: user._highlightResult.nombre.value.replace(/(<([^>]+)>)/gi, ''),
      razonSocial: user._highlightResult.razonSocial.value.replace(
        /(<([^>]+)>)/gi,
        ''
      ),
      telefono: user._highlightResult.telefono.value.replace(
        /(<([^>]+)>)/gi,
        ''
      ),
    }
  })

  return {
    totalPages: nbPages,
    data: res,
  }
}

export const createUser = async (user) => {
  const userCreated = await addDoc(users, user)
  return userCreated
}

// export const deleteUser = async (id) => {
//   const res = await doc(db, 'users', id)
//   deleteDoc(res)
//   console.log(hola)
// }
