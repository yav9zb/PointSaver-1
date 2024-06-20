const fetchFlights = async () => {
  try {
    const response = await axios.get('https://api.seats.aero/flights');
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    return null;
  }
};
export { fetchFlights };
