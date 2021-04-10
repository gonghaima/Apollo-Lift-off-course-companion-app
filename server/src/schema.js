const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  spaceCats: [SpaceCat]
  "Get tracks array for homepage grid"
  tracksForHome: [Track!]!
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

"A track is a group of Modules that teaches about a specific topic"
type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
}

"Author of a complete Track or a Module"
type Author {
  id: ID!
  name: String!
  photo: String
}
`

module.exports = typeDefs;