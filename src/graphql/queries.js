/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBiz = /* GraphQL */ `
  query GetBiz($id: ID!) {
    getBiz(id: $id) {
      id
      name
      description
      address
      type
      pos_lat
      pos_lon
      createdAt
      updatedAt
    }
  }
`;
export const listBizs = /* GraphQL */ `
  query ListBizs(
    $filter: ModelBizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        address
        type
        pos_lat
        pos_lon
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
