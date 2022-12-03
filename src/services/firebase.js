import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBru8gnCC_BePvZRTtQceGQA_Q1nOesHAE',

  authDomain: 'challenge-tugerente-42694.firebaseapp.com',

  projectId: 'challenge-tugerente-42694',

  storageBucket: 'challenge-tugerente-42694.appspot.com',

  messagingSenderId: '592542399755',

  appId: '1:592542399755:web:497a133828acff80b3b60e',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
