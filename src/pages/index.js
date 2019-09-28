import React from "react"
import { graphql } from 'gatsby';

export const query = graphql`
  query {
  got {
    listCharacters {
      items {
        id
        name,
        description,
        avatar
      }
    }
  }
}
`

export default ({ data }) => {
  return (
    <>
      {data.got.listCharacters.items.map(item => {
        return (
          <div key={item.id}>
            <img src={item.avatar} alt={item.name} />
            <h2>{item.name}</h2>
            <p>
              {item.description}
            </p>
          </div>
        )
      })}
    </>  
  )
}
