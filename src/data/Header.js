import { gql, GraphQLClient } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

const API_URL = 'https://api-sa-east-1.hygraph.com/v2/cl8asmg1l03h201uhgav1hivb/master'
const graphClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjQ5NDQ1OTcsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w4YXNtZzFsMDNoMjAxdWhnYXYxaGl2Yi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZTg1NTdiOWQtMzI4YS00MTlhLWEzMzctYmI2MmNhZjAwZDM5IiwianRpIjoiY2w4djUweGdqNmF0djAxdGM4MHRwMWpyeSJ9.RmlnP8UPqQmH4_4rOukNLnaFP_gVbQaldkMC7IFtqSvor1CWmT0SOBeaFT7NGrOWyMJlOS_mCY2CtyHt-4fFKRE5jGz93ylTXIHrxkN7YFeTKQiKGEq6Dnvoh1xHzcgufj8g2qhs32Fk2YYI03EmvpLxtU1hnbN0RqBmKTy2JBhzD2oz8zZrfCQsJd58roXIKhTSgWwlXP0tSFSdREpIfR2XM1CINf-cmaeO6m3HXKKlfExJo9H-n1OR9WDqNwEPAkAeRpdn9MAihNJkfTNf73zBPUbPsYnTMOElLG-xjeevXzL299vigu3SjY8TIap1E8TYTjTyJ0og3UxwbBiViuQiLSPpcwfDicXJomiqZW1fHe5LJCH39zl71-x2psAL5cOQwaiada1ccHPOLZbSwzpcXlLhYow2sSWZBpNnzyon4SKO8Zxsb63EYQaPejoQk9BgNrHbtRwqrYPzGRxc_BsyBgj1NNcEZkq6wwQJ7RFeAok4QkJ_b6_88CrZF8OCpWwgH0CLhSrA0-abp71rhWQ0qpX5V5r3mPgvZOUQsAh1P5amZ5TkAQCETMvGYEcbrxrb3rsopgMz1uiNx47mfFA-F5QHPpOdAUrcE6ViwbycGDbIliheK6jpJcx49FHb0q5whLggjZak98xr8Xbb05N76hk9hOoFmGkkEykwp-A`
  }
  // mode: 'cors'
})

// Pega a lista de menu e logos
export function useHeader() {
  // useQuery hook do React-Query
  return useQuery(['Headers'], async () => {
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
}