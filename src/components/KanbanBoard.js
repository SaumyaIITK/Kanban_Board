import React from 'react';
import TicketCard from './TicketCard';

function KanbanBoard({ tickets, users, grouping, sorting }) {
  const groupedTickets = groupTickets(tickets, grouping, users);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group, index) => (
        <div key={index} className="kanban-column">
          <h2>{group}</h2>
          {groupedTickets[group].sort(sortTickets(sorting)).map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

// Helper functions for grouping and sorting
function groupTickets(tickets, grouping, users) {
  const groups = {};

  tickets.forEach(ticket => {
    let groupKey;
    if (grouping === 'status') {
      groupKey = ticket.status;
    } else if (grouping === 'user') {
      const user = users.find(user => user.id === ticket.userId);
      groupKey = user ? user.name : 'Unassigned';
    } else if (grouping === 'priority') {
      groupKey = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'][ticket.priority] || 'No Priority';
    }

    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(ticket);
  });

  return groups;
}

function sortTickets(sorting) {
  return (a, b) => {
    if (sorting === 'priority') return b.priority - a.priority;
    if (sorting === 'title') return a.title.localeCompare(b.title);
    return 0;
  };
}

export default KanbanBoard;
