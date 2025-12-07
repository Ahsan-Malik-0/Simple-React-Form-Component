import { useState } from "react";

const Welcome = ({ name }) => {
    const [student, setStudent] = useState({
        name: "",
        gender: "male",
        country: "",
        agree: false
    });

    const [record, setRecord] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        // do not save empty submissions
        if (!student.name.trim() || !student.country) {
            alert("Please enter name and select country");
            return;
        }

        setRecord([...record, student]);

        // clear the form after saving
        setStudent({ name: "", gender: "male", country: "", agree: false });
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setStudent((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    return (
        <div className="container">
            <h2 className="main-heading">React {name}</h2>
            
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={student.gender === "male"}
                                onChange={handleChange}
                            />
                            <span className="radio-text">Male</span>
                        </label>
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={student.gender === "female"}
                                onChange={handleChange}
                            />
                            <span className="radio-text">Female</span>
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <select
                        id="country"
                        name="country"
                        value={student.country}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="">-- Select Country --</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="China">China</option>
                        <option value="Germany">Germany</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={student.agree}
                            onChange={handleChange}
                            className="form-checkbox"
                        />
                        <span className="checkbox-text">I agree to terms and conditions</span>
                    </label>
                </div>

                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>

            <div className="records-container">
                <h2 className="records-heading">Records</h2>
                
                {record.length === 0 ? (
                    <p className="no-data">No records found. Add your first entry above.</p>
                ) : (
                    <div className="table-container">
                        <table className="records-table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Country</th>
                                    <th>Agreed to Terms</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.map((rec, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                                        <td className="serial-number">{index + 1}</td>
                                        <td className="name-cell">{rec.name}</td>
                                        <td className="gender-cell">
                                            <span className={`gender-badge ${rec.gender}`}>
                                                {rec.gender}
                                            </span>
                                        </td>
                                        <td className="country-cell">
                                            <span className="country-flag">
                                                {rec.country === "Pakistan" && "🇵🇰"}
                                                {rec.country === "India" && "🇮🇳"}
                                                {rec.country === "China" && "🇨🇳"}
                                                {rec.country === "Germany" && "🇩🇪"}
                                            </span>
                                            {rec.country}
                                        </td>
                                        <td className="agree-cell">
                                            <span className={`status-badge ${rec.agree ? "agreed" : "not-agreed"}`}>
                                                {rec.agree ? "✓ Yes" : "✗ No"}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <style>{`
                /* Global Styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                .container {
                    max-width: 900px;
                    margin: 30px auto;
                    padding: 25px;
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                .main-heading {
                    text-align: center;
                    color: #2c3e50;
                    margin-bottom: 25px;
                    font-size: 2.2rem;
                    font-weight: 600;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
                }

                /* Form Styles */
                .form-container {
                    background: white;
                    padding: 25px;
                    border-radius: 12px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
                    margin-bottom: 35px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    color: #34495e;
                    font-weight: 500;
                    font-size: 15px;
                }

                .form-input {
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 15px;
                    transition: all 0.3s ease;
                }

                .form-input:focus {
                    outline: none;
                    border-color: #3498db;
                    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
                }

                .form-input::placeholder {
                    color: #95a5a6;
                }

                .radio-group {
                    display: flex;
                    gap: 25px;
                    margin-top: 5px;
                }

                .radio-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    padding: 8px 0;
                }

                .radio-label input {
                    margin-right: 8px;
                    transform: scale(1.2);
                    accent-color: #3498db;
                }

                .radio-text {
                    font-size: 15px;
                    color: #2c3e50;
                }

                .form-select {
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e0e0e0;
                    border-radius: 8px;
                    font-size: 15px;
                    background-color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .form-select:focus {
                    outline: none;
                    border-color: #3498db;
                    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
                }

                .checkbox-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    padding: 10px 0;
                }

                .form-checkbox {
                    margin-right: 10px;
                    transform: scale(1.3);
                    accent-color: #2ecc71;
                }

                .checkbox-text {
                    font-size: 15px;
                    color: #2c3e50;
                }

                .submit-btn {
                    width: 100%;
                    padding: 14px;
                    background: linear-gradient(to right, #3498db, #2980b9);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 10px;
                }

                .submit-btn:hover {
                    background: linear-gradient(to right, #2980b9, #3498db);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
                }

                .submit-btn:active {
                    transform: translateY(0);
                }

                /* Records Section */
                .records-container {
                    background: white;
                    padding: 25px;
                    border-radius: 12px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
                }

                .records-heading {
                    color: #2c3e50;
                    margin-bottom: 20px;
                    font-size: 1.8rem;
                    font-weight: 600;
                    text-align: center;
                }

                .no-data {
                    text-align: center;
                    color: #7f8c8d;
                    font-size: 16px;
                    padding: 30px;
                    background: #f8f9fa;
                    border-radius: 8px;
                    border: 2px dashed #dee2e6;
                }

                /* Table Styles */
                .table-container {
                    overflow-x: auto;
                }

                .records-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 15px;
                }

                .records-table thead {
                    background: linear-gradient(to right, #2c3e50, #34495e);
                    color: white;
                }

                .records-table th {
                    text-align: center;
                    padding: 15px;
                    font-weight: 600;
                    font-size: 15px;
                    border-bottom: 3px solid #1a252f;
                }

                .records-table td {
                    text-align: center;
                    padding: 14px 15px;
                    border-bottom: 1px solid #e0e0e0;
                }

                .even-row {
                    background-color: #f8f9fa;
                }

                .odd-row {
                    background-color: white;
                }

                .even-row:hover, .odd-row:hover {
                    background-color: #e3f2fd;
                    transition: background-color 0.2s ease;
                }

                .serial-number {
                    font-weight: 600;
                    color: #7f8c8d;
                    text-align: center;
                }

                .name-cell {
                    font-weight: 500;
                    color: #2c3e50;
                }

                .gender-cell {
                    text-align: center;
                }

                .gender-badge {
                    display: inline-block;
                    padding: 5px 15px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    text-transform: capitalize;
                }

                .gender-badge.male {
                    background-color: #e3f2fd;
                    color: #1565c0;
                }

                .gender-badge.female {
                    background-color: #fce4ec;
                    color: #c2185b;
                }

                .country-cell {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    font-weight: 500;
                }

                .country-flag {
                    font-size: 18px;
                }

                .agree-cell {
                    text-align: center;
                }

                .status-badge {
                    display: inline-block;
                    padding: 6px 15px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 600;
                    min-width: 70px;
                }

                .status-badge.agreed {
                    background-color: #d5edda;
                    color: #155724;
                }

                .status-badge.not-agreed {
                    background-color: #f8d7da;
                    color: #721c24;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .container {
                        margin: 15px;
                        padding: 20px;
                    }

                    .radio-group {
                        flex-direction: column;
                        gap: 10px;
                    }

                    .records-table {
                        font-size: 14px;
                    }

                    .records-table th,
                    .records-table td {
                        padding: 10px 12px;
                    }
                }

                @media (max-width: 480px) {
                    .main-heading {
                        font-size: 1.8rem;
                    }

                    .form-container,
                    .records-container {
                        padding: 20px;
                    }

                    .records-table th,
                    .records-table td {
                        padding: 8px 10px;
                    }

                    .gender-badge,
                    .status-badge {
                        font-size: 12px;
                        padding: 4px 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Welcome;