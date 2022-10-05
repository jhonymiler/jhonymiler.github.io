import { gql, GraphQLClient } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

const API_URL = import.meta.env.VITE_PROJECT_ID
const graphClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
  },
  mode: 'cors'
})

// Pega a lista de menu e logos
export function useHeader() {
  // useQuery hook do React-Query
  const dados = useQuery(['Headers'], async () => {
    return await graphClient.request(
      gql`
        query Headers {
          headers {
            id
            link
            text
          }
          logos {
            id
            url
          }
        }
      `
    )
  })

  return dados
}
