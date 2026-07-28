
// import React, { useEffect, useState } from "react";
// import "./App.css";


// import React, { useEffect, useState } from "react";
// import "./App.css";

// import { tablesDB, DATABASE_ID, TABLE_ID } from "./appwrite";

// function App() {

//   const [employees, setEmployees] = useState([]);

//   const [form, setForm] = useState({
//     Name: "",
//     "e-mail": "",
//     Phone: "",
//     Department: "",
//     Salary: ""
//   });


//   // Fetch employees
//   const fetchEmployees = async () => {
//     try {

//       const response = await tablesDB.listRows(
//         DATABASE_ID,
//         TABLE_ID
//       );

//       setEmployees(response.rows);

//     } catch (error) {

//       console.error("Fetch error:", error);
//       alert("Failed to fetch employees");

//     }
//   };


//   useEffect(() => {
//     fetchEmployees();
//   }, []);



//   // Input change
//   const handleChange = (e) => {

//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });

//   };



//   // Add employee
//   const addEmployee = async () => {

//     if (
//       !form.Name ||
//       !form["e-mail"] ||
//       !form.Phone ||
//       !form.Department ||
//       !form.Salary
//     ) {

//       alert("All fields are required");
//       return;

//     }


//     try {

//       await tablesDB.createRow(
//         DATABASE_ID,
//         TABLE_ID,
//         "unique()",
//         {
//           Name: form.Name,
//           "e-mail": form["e-mail"],
//           Phone: form.Phone,
//           Department: form.Department,
//           Salary: Number(form.Salary)
//         }
//       );


//       setForm({
//         Name: "",
//         "e-mail": "",
//         Phone: "",
//         Department: "",
//         Salary: ""
//       });


//       fetchEmployees();


//     } catch (error) {

//       console.error("Add employee error:", error);
//       alert(error.message);

//     }

//   };



//   // Delete employee
//   const deleteEmployee = async (id) => {

//     try {

//       await tablesDB.deleteRow(
//         DATABASE_ID,
//         TABLE_ID,
//         id
//       );

//       fetchEmployees();


//     } catch (error) {

//       console.error("Delete error:", error);
//       alert(error.message);

//     }

//   };



//   return (

//     <div className="App">

//       <h1>Employee Management</h1>


//       <div className="form">


//         <input
//           name="Name"
//           placeholder="Name"
//           value={form.Name}
//           onChange={handleChange}
//         />


//         <input
//           name="e-mail"
//           placeholder="Email"
//           value={form["e-mail"]}
//           onChange={handleChange}
//         />


//         <input
//           name="Phone"
//           placeholder="Phone"
//           value={form.Phone}
//           onChange={handleChange}
//         />


//         <input
//           name="Department"
//           placeholder="Department"
//           value={form.Department}
//           onChange={handleChange}
//         />


//         <input
//           name="Salary"
//           placeholder="Salary"
//           type="number"
//           value={form.Salary}
//           onChange={handleChange}
//         />


//         <button onClick={addEmployee}>
//           Add Employee
//         </button>


//       </div>



//       <table>

//         <thead>

//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Department</th>
//             <th>Salary</th>
//             <th>Actions</th>
//           </tr>

//         </thead>


//         <tbody>


//           {employees.length === 0 ? (

//             <tr>
//               <td colSpan="6">
//                 No employees found
//               </td>
//             </tr>


//           ) : (


//             employees.map((emp) => (

//               <tr key={emp.$id}>

//                 <td>{emp.Name}</td>

//                 <td>{emp["e-mail"]}</td>

//                 <td>{emp.Phone}</td>

//                 <td>{emp.Department}</td>

//                 <td>{emp.Salary}</td>


//                 <td>

//                   <button
//                     onClick={() => deleteEmployee(emp.$id)}
//                   >
//                     Delete
//                   </button>

//                 </td>


//               </tr>

//             ))

//           )}


//         </tbody>


//       </table>


//     </div>

//   );

// }


// export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";

// // import { tablesDB, DATABASE_ID, TABLE_ID } from "./appwrite";


// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "", department: "" });
//   // const API_URL = "https://employee-management-backend-2-snfi.onrender.com/api/employees";
//   // const API_URL = "http://localhost:8080/api/employees";

//   // const API_URL = "https://employee-management-backend-3-pfhs.onrender.com";

//   const API_URL = "https://employee-management-backend-3-pfhs.onrender.com/api/employees";


//   // Fetch all employees
//   const fetchEmployees = async () => {
//     try {
//       const res = await fetch(API_URL);
//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//       const data = await res.json();
//       setEmployees(data);
//     } catch (err) {
//       console.error("Failed to fetch employees", err);
//       alert("Error fetching employees. Make sure backend is running on port 8080.");
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Add new employee
//   const addEmployee = async () => {
//     if (!form.name || !form.email || !form.department) return alert("All fields required");
//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//       setForm({ name: "", email: "", department: "" });
//       fetchEmployees();
//     } catch (err) {
//       console.error("Failed to add employee", err);
//       alert("Error adding employee. Check console for details.");
//     }
//   };

//   // Delete employee
//   const deleteEmployee = async (id) => {
//     try {
//       const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//       fetchEmployees();
//     } catch (err) {
//       console.error("Failed to delete employee", err);
//       alert("Error deleting employee. Check console for details.");
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Employee Management</h1>

//       <div className="form">
//         <input
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//         />
//         <input
//           name="department"
//           placeholder="Department"
//           value={form.department}
//           onChange={handleChange}
//         />
//         <button onClick={addEmployee}>Add Employee</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Department</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.length === 0 ? (
//             <tr>
//               <td colSpan="5">No employees found</td>
//             </tr>
//           ) : (
//             employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td>{emp.id}</td>
//                 <td>{emp.name}</td>
//                 <td>{emp.email}</td>
//                 <td>{emp.department}</td>
//                 <td>
//                   <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     department: "",
//   });

//   const API_URL =
//     "https://employee-management-backend-3-pfhs.onrender.com/api/employees";

//   // Fetch all employees
//   const fetchEmployees = async () => {
//     try {
//       const res = await fetch(API_URL);

//       if (!res.ok) {
//         throw new Error(`HTTP Error: ${res.status}`);
//       }

//       const data = await res.json();
//       setEmployees(data);
//     } catch (error) {
//       console.error("Fetch Error:", error);
//       alert("Failed to fetch employees.");
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Add employee
//   const addEmployee = async () => {
//     if (!form.name || !form.email || !form.department) {
//       alert("All fields are required");
//       return;
//     }

//     try {
//       const res = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP Error: ${res.status}`);
//       }

//       setForm({
//         name: "",
//         email: "",
//         department: "",
//       });

//       fetchEmployees();
//     } catch (error) {
//       console.error("Add Employee Error:", error);
//       alert("Failed to add employee.");
//     }
//   };

//   // Delete employee
//   const deleteEmployee = async (id) => {
//     try {
//       const res = await fetch(`${API_URL}/${id}`, {
//         method: "DELETE",
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP Error: ${res.status}`);
//       }

//       fetchEmployees();
//     } catch (error) {
//       console.error("Delete Error:", error);
//       alert("Failed to delete employee.");
//     }
//   };

//   return (
//     <div className="App">
//       <h1>👨‍💼 Employee Management System</h1>

//       <div className="form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Employee Name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="department"
//           placeholder="Department"
//           value={form.department}
//           onChange={handleChange}
//         />

        // <button onClick={addEmployee}>➕ Add Employee</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>👤 Name</th>
//             <th>📧 Email</th>
//             <th>🏢 Department</th>
//             <th>⚙️ Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {employees.length === 0 ? (
//             <tr>
//               <td colSpan="5">No employees found.</td>
//             </tr>
//           ) : (
//             employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td>{emp.id}</td>
//                 <td>{emp.name}</td>
//                 <td>{emp.email}</td>
//                 <td>{emp.department}</td>
//                 <td>
//                   <button onClick={() => deleteEmployee(emp.id)}>
//                     🗑 Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    salary: "",
  });

  const [editingId, setEditingId] = useState(null);

  const API_URL =
    "https://employee-management-backend-3-pfhs.onrender.com/api/employees";
  // const API_URL =
  //   "http://localhost:8080/api/employees";

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      const res = await fetch(API_URL);

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }

      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Failed to fetch employees.");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add or Update Employee
  const saveEmployee = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.department ||
      !form.salary
    ) {
      alert("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (form.phone.length !== 10) {
      alert("Phone number must contain exactly 10 digits.");
      return;
    }

    try {
      let response;

      if (editingId) {
        response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            salary: Number(form.salary),
          }),
        });
      } else {
        response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            salary: Number(form.salary),
          }),
        });
      }

      if (!response.ok) {
        throw new Error("Failed to save employee.");
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        department: "",
        salary: "",
      });

      setEditingId(null);

      fetchEmployees();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  // Fill form for editing
  const editEmployee = (employee) => {
    setForm({
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      department: employee.department,
      salary: employee.salary,
    });

    setEditingId(employee.id);
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      fetchEmployees();
    } catch (error) {
      console.error(error);
      alert("Failed to delete employee.");
    }
  };

    return (
    <div className="App">

      <h1>👨‍💼 Employee Management System</h1>

      <div className="form">

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
        />

        <button onClick={saveEmployee}>
          {editingId ? "🔄 Update Employee" : "➕ Add Employee"}
        </button>

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>👤 Name</th>
            <th>📧 Email</th>
            <th>📱 Phone</th>
            <th>🏢 Department</th>
            <th>💰 Salary</th>
            <th>⚙️ Actions</th>
          </tr>

        </thead>

        <tbody>

          {employees.length === 0 ? (

            <tr>
              <td colSpan="7">No employees found.</td>
            </tr>

          ) : (

            employees.map((emp) => (

              <tr key={emp.id}>

                <td>{emp.id}</td>

                <td>{emp.name}</td>

                <td>{emp.email}</td>

                <td>{emp.phone}</td>

                <td>{emp.department}</td>

                <td>₹ {emp.salary}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => editEmployee(emp)}
                  >
                    ✏️ Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    🗑 Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default App;