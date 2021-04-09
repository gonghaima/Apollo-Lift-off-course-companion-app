const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  spaceCats: [SpaceCat]
}
type SpaceCat {
  id: ID!
  name: String!
  age: Int
  modulesCount: Int
  missions: [Mission]
}
"Mission of a complete Track"
type Mission {
  id: ID!
  name: String!
  description: String!
}
`

module.exports = typeDefs;