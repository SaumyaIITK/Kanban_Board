import React from 'react';
import LowPriorityIcon from '../icons_FEtask/Img - Low Priority.svg';
import MediumPriorityIcon from '../icons_FEtask/Img - Medium Priority.svg';
import HighPriorityIcon from '../icons_FEtask/Img - High Priority.svg';
import UrgentPriorityIcon from '../icons_FEtask/SVG - Urgent Priority colour.svg';
import NoPriorityIcon from '../icons_FEtask/No-priority.svg';
import ToDoIcon from '../icons_FEtask/To-do.svg';
import InProgressIcon from '../icons_FEtask/in-progress.svg';
import DoneIcon from '../icons_FEtask/Done.svg';

function TicketCard({ ticket }) {
  const priorityIcons = [
    NoPriorityIcon,
    LowPriorityIcon,
    MediumPriorityIcon,
    HighPriorityIcon,
    UrgentPriorityIcon
  ];
  const statusIcons = {
    'Todo': ToDoIcon,
    'In progress': InProgressIcon,
    'Done': DoneIcon
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3>{ticket.title}</h3>
        <img src={statusIcons[ticket.status]} alt="Status Icon" className="status-icon" />
      </div>
      <p>Priority: <img src={priorityIcons[ticket.priority]} alt="Priority Icon" className="priority-icon" /></p>
      <p>User ID: {ticket.userId}</p>
    </div>
  );
}

export default TicketCard;
