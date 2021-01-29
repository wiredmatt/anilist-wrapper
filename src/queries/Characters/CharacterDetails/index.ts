export function CHARACTER_DETAILS(id: number) {
  return {
    query: `
        query ($id: Int) {
            Character(id: $id) {
              description
            }
          }
          
        `,
    variables: {
      id,
    },
  };
}
