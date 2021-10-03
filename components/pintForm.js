import React, {Component} from 'react';

class PintForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        className={
          this.props.size && this.props.size == 'large'
            ? 'booking-search-form large'
            : 'booking-search-form'
        }
      >
        <select className="search dropdown-toggle">
          <option>County</option>
          <option>Dublin</option>
        </select>

        <style jsx>{`
          .booking-search-form input {
            width: 100%;
          }

          .booking-search-form.large .date {
            margin-right: 16px;
            display: inline;
          }

          .booking-search-form.large .search,
          .booking-search-form.large .date,
          .booking-search-form.large .guests {
            background-size: 20px 20px;
            background-position: 16px 14px;
          }

          .booking-search-form .search {
            background: url(/static/search.svg) no-repeat scroll 7px 6px;
            background-size: 15px 15px;
          }

          :global(.react-datepicker__input-container input) {
            background: url(/static/cal.svg) no-repeat scroll 18px 17px;
            background-size: 15px 15px;
            color: #757575;
          }

          :global(.react-datepicker__day--selected) {
            background: #0055ff;
          }

          .booking-search-form .guests {
            background: url(/static/people.svg) no-repeat scroll 7px 6px;
            background-size: 15px 15px;
          }
        `}</style>
      </div>
    );
  }
}

export default PintForm;
