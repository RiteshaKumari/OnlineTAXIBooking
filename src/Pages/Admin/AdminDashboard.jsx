import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AdminDashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const userEmail = Cookies.get('xyzra');
    if (!userEmail) {

      navigate('/signin');
    }
  }, [navigate]);

  useEffect(() => {
    axios.get('https://localhost:7009/api/Home/GetBookedData') // Replace with your actual API endpoint
      .then(response => {
        setBookings(response.data); // Set the bookings data in state
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  // Columns for the DataTable
  const columns = [
    {
      name: 'Booking ID',
      selector: row => row.bookingId.toString(), // Convert to string
      sortable: true,
    },
    {
      name: 'Starting Destination',
      selector: row => row.startingDestination,
      sortable: true,
    },
    {
      name: 'End Destination',
      selector: row => row.endDestination,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Starting Date',
      selector: row => row.startingDate,
      sortable: true,
      format: row => new Date(row.startingDate).toLocaleDateString(),
    },
    {
      name: 'No of Days',
      selector: row => row.noOfDays.toString(), // Convert to string
      sortable: true,
    },
  ];

  // Normalize and filter the data based on the search text
  const filteredData = bookings.filter(item => {
    const normalizedSearchText = searchText.trim().toLowerCase(); // Normalize the search text

    // Search logic for all fields, treating everything as a string for comparison
    return (
      // Search by BookingId (converted to string)
      item.bookingId.toString().toLowerCase().includes(normalizedSearchText) ||

      // Search by NoOfDays (converted to string)
      item.noOfDays.toString().toLowerCase().includes(normalizedSearchText) ||

      // Search by Starting Destination
      (item.startingDestination && item.startingDestination.toLowerCase().includes(normalizedSearchText)) ||
      
      // Search by End Destination
      (item.endDestination && item.endDestination.toLowerCase().includes(normalizedSearchText)) ||
      
      // Search by Phone number
      (item.phone && item.phone.toLowerCase().includes(normalizedSearchText)) ||

      // Search by Starting Date (Properly formatted date check)
      (item.startingDate && new Date(item.startingDate).toLocaleDateString().toLowerCase().includes(normalizedSearchText))
    );
  });

  return (
    <>
      <div className="main-content">
        <main>
          <div className="page-header">
            <h1>Dashboard</h1>
            <small>Home / Dashboard</small>
          </div>
          <div className="page-content">
            {/* Search Input */}
            <div className="search-bar" style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Search by booking ID, destinations, phone, date or days..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{
                  padding: '10px',
                  width: '100%',
                  maxWidth: '300px',
                  marginBottom: '20px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
              />
            </div>

            {/* DataTable */}
            <DataTable
              title="Booking Data"
              columns={columns}
              data={filteredData} // Apply the filtered data
              pagination
              highlightOnHover
              striped
              responsive
              sortIcon={<span className="sort-icon" style={{ fontSize: '18px', color: '#007bff' }}>⇅</span>} // Custom sorting icon
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;
