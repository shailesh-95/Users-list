import React, { useEffect, useState } from "react";
import "./allUsers.css";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  // useEffect function to call an api

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const json = await response.json();
        setData(json.data);
        setRecords(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // function for search input

  const Filter = (event) => {
    setRecords(
      data.filter((f) =>
        f.first_name.toLowerCase().includes(event.target.value) || f.first_name.toUpperCase().includes(event.target.value)
      ) 
    );
  };

  return (
    <div className="parent ">
      <h3 class="text-body-secondary " style={{marginLeft:"110px", marginBottom:"30px"}}>Users List</h3>

      <div>
        {/* search input */}

        <input
          type="text"
          style={{ marginBottom: "30px", width: "350px" }}
          className="form-control"
          onChange={Filter}
          placeholder="Search...."
        />

        {/* map method to display the data */}
        <ul>
          {records.map((user) => (
            <div key={user.id}>
              <div className="userid"> {user.id}</div>
              <li>
                <img
                  src={user.avatar}
                  alt="pic"
                  style={{ padding: "10px" }}
                  width={250}
                  height={200}
                />
              </li>

              <div
                style={{
                  marginLeft: "110px",
                  marginBottom: "20px",
                  marginTop: "10px",
                  fontWeight: "inherit",
                }}
              >
                {user.first_name}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyComponent;
