import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import DataService from './services/DataService';
import './styles.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status'); // Default grouping by status
  const [sorting, setSorting] = useState('priority'); // Default sorting by priority

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      const data = await DataService.getData();
      setTickets(data.tickets);
      setUsers(data.users);
    }
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1>Kanban Board</h1>
      <div className="controls">
        <button onClick={() => setGrouping('status')}>Group by Status</button>
        <button onClick={() => setGrouping('user')}>Group by User</button>
        <button onClick={() => setGrouping('priority')}>Group by Priority</button>
        <button onClick={() => setSorting(sorting === 'priority' ? 'title' : 'priority')}>
          Sort by {sorting === 'priority' ? 'Title' : 'Priority'}
        </button>
      </div>
      <KanbanBoard tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;
