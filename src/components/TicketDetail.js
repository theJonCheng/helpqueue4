import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const { ticket } = props;

  return (
    <React.Fragment>
      <hr />
      <h1>Ticket Detail</h1>
      <h3>{ticket.names}</h3>
      <h3>{ticket.location}</h3>
      <h3>
        <em>{ticket.issue}</em>
      </h3>
      <hr />
      <button onClick={props.onClickingEdit}>Edit Ticket</button>
      <button onClick={() => props.onClickingDelete(ticket.id)}>Delete Ticket</button>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default TicketDetail;
