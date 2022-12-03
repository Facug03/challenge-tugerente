import algoliasearch from 'algoliasearch'

const APLICATION_ID = 'YOCRQ55NYY'
const SEARCH_API_KEY = '56f16bf13ff6e782d7aabc82216c9483'
const ALGOLIA_INDEX = 'challenge_tugerente_search'

const client = algoliasearch(APLICATION_ID, SEARCH_API_KEY)

export const index = client.initIndex(ALGOLIA_INDEX)
