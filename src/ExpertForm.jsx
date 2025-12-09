import { useState } from 'react'

export default function ExpertForm() {
    const cities = ["Isb", "Rwp", "Lhr"]

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "male",
        city: 0,
        agree: false
    })
    const [formRecord, setFormRecord] = useState([])
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()


        if (!formData.agree) {
            alert("Check agree to continue")
            return
        }
        else {
            if (!formData.name && !formData.age) {
                alert("Name and age can't be empty")
                return
            }
        }

        if (editIndex !== null) {
            formRecord[editIndex] = formData
            setFormRecord(formRecord)
            setEditIndex(null)
        }
        else {
            setFormRecord([...formRecord, formData])
        }

        setFormData({
            name: "",
            age: "",
            gender: "male",
            city: 0,
            agree: false
        })

    }

    const handleChange = (e) => {
        const { value, name, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: type === "checkbox" ? checked : value
        }));
    }

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            const updatedRecord = formRecord.filter((_, i) => i !== index)
            setFormRecord(updatedRecord)
        }
    }

    const handleEdit = (index) => {
        setFormData(formRecord[index])
        setEditIndex(index)
    }

    return (

        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                />
                <br />

                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    placeholder="Enter your age"
                    onChange={handleChange}
                />

                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                    />
                    Male
                    {" "}
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                    />
                    Female
                    {" "}
                </label>
                <br />

                <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                >
                    {cities.map((city, index) => (
                        <option key={index} value={index}>{city}</option>
                    ))}
                </select>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                    />
                    <span className="checkbox-text">I agree to terms and conditions!</span>
                </label>
                <br />

                <button type="submit">{editIndex === null ? "Submit" : "Update"}</button>
            </form>

            {
                formRecord.length === 0 ? (
                    <h2>No data found</h2>
                ) : (
                    <ul>
                        {formRecord.map((item, index) => (
                            <div key={index}>
                                <h3>Record : {index + 1}</h3>
                                <li>Name: {item.name}</li>
                                <li>Age: {item.age}</li>
                                <li>Gender: {item.gender}</li>
                                <li>City: {cities[item.city]}</li>
                                <li>Agree: {item.agree ? "Yes" : "No"}</li>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <hr />
                            </div>
                        ))}
                    </ul>
                )
            }
        </>

    )
}

