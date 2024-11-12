const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

class DataService {
  static async getData() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return { tickets: [], users: [] };
    }
  }
}

export default DataService;
