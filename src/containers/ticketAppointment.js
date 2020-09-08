import React from 'react';
import noTickets from '../assets/notickets.png';
import qrCode from '../assets/qrCode.png';
import { connect } from 'react-redux';
import { selectedPage } from '../actions/index';
import { withRouter, Link} from 'react-router-dom';
import axios from 'axios';

class TicketAppointment extends React.Component {
  state = {
    tickets: [],
  }

  componentDidMount() {
    const { currentUser } = this.props;
    const ticketUrl = `/tickets/${currentUser}`;
    axios.get(ticketUrl)
    .then(data => {
      this.setState({
        tickets: data.data,
      })
    })
  }

  render() {
    
    const { tickets } = this.state;
    const { setselectedPage } = this.props;
    setselectedPage('tickets');
    if (tickets.length !== 0){
      return(
        <div id="tickets">
          <h1>TICKETS</h1>
          <div id="items">
            {tickets.map( ticket =>
              <div className="ticket" key={ticket.id}>
                <div>
                  <h3>{ticket.movie_name}</h3>
                  <span>{ticket.city_name}</span>
                  <h3>{new Date(ticket.date).toDateString()}</h3>
                  <span>$ {ticket.price+parseFloat(2.30)}</span>
                </div>
                <div>
                  <img src={qrCode} alt="qrCode"></img>
                </div>
              </div>          
            )}
          </div>
        </div>
      )
    } else {
      return (
        <div id="noTickets">
          <h3>NO TICKETS YET</h3>
          <img src={noTickets} alt="qrCode"></img>
          <span>
            Go <Link to={'/Movies'}>Here</Link> to choose a movie
          </span>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
})

const mapDispatchToProps = dispatch => ({
  setselectedPage: currentPage => dispatch(selectedPage(currentPage)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TicketAppointment));