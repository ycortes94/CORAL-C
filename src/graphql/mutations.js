/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBiz = /* GraphQL */ `
  mutation CreateBiz(
    $input: CreateBizInput!
    $condition: ModelBizConditionInput
  ) {
    createBiz(input: $input, condition: $condition) {
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
export const updateBiz = /* GraphQL */ `
  mutation UpdateBiz(
    $input: UpdateBizInput!
    $condition: ModelBizConditionInput
  ) {
    updateBiz(input: $input, condition: $condition) {
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
export const deleteBiz = /* GraphQL */ `
  mutation DeleteBiz(
    $input: DeleteBizInput!
    $condition: ModelBizConditionInput
  ) {
    deleteBiz(input: $input, condition: $condition) {
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
