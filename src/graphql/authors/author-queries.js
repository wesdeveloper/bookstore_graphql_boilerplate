const authorsData = [
  { id: '123', name: 'Machado de Assis', nationality: 'Brasileiro' },
  { id: '4324', name: 'Cecília Meireles', nationality: 'Brasileira' },
];

export const getAthorById = (_, { id }) => authorsData.find(data => data.id === id);

export const getAllAuthors = () => authorsData;
