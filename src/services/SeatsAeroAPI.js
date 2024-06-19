export const fetchTravelDeals = async (searchParams) => {
  // Implement API call logic
  const response = await fetch('API_ENDPOINT', {
    method: 'POST',
    body: JSON.stringify(searchParams),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
