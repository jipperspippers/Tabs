import gql from 'graphql-tag'

export default gql`
    type User{
        email: String!
        password: String!
    }

    type Mutation{
        signUp(inputEmail: String!, inputPassword:String!)
        signIn(inputEmail: String!, inputPassword:String!): String!
        }
        
`