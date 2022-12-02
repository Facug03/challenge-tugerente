import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  setDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db } from './firebaseConfig/firebase'

const users = collection(db, 'users')

export const getUsers = async () => {
  const res = await getDocs(users)
  return res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export const createUser = async (user) => {
  console.log(user)
  const algo = await addDoc(db, user)
  console.log(algo)
}

// export const deleteUser = async (id) => {
//   const res = await doc(db, 'users', id)
//   deleteDoc(res)
//   console.log(hola)
// }

const nose = {
  nombre: 'facu',
  razonSocial: 'nose',
  telefono: 213333,
  nit: '2332',
  codigo: 21312,
}

createUser(nose)
