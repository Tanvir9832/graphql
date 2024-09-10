

export const schema = `
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        role: String!
        avatar: String!
        verified: Boolean!
        createdAt: String!
        updatedAt: String!
    }

    type Course {
        _id: ID!
        title: String!,
        description: String!,
        instructor: User!,
        ratingAverage: Int!,
        ratingQuantity: Int!,
        price: Int!,
        level: String!,
        whatYouWillLearn: [String]!,
        requirements: [String]!,
        targetAudience: [String],
        isPublished: [Boolean],
        students: [String]!,
        createdAt: String,
        updatedAt: String
    }

    type Query {
        hello : String
    }
`;