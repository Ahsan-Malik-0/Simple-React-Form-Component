import { useState } from 'react'

function AdvanceForm() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "male",
        city: "isb",
        agree: false
    })
    const [formRecord, setFormRecord] = useState([])

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
        setFormRecord([...formRecord, formData])
        setFormData({
            name: "",
            age: "",
            gender: "male",
            city: "isb",
            agree: false
        })
    }

    const handleChange = (e) => {
        const { value, name, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: type === "checkbox" ? checked : value
        }));
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
                    <option value="isb">Isb</option>
                    <option value="rwp">Rwp</option>
                    <option value="lhr">Lhr</option>
                </select>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                    />
                    <span className="checkbox-text">I agree to terms and conditions</span>
                </label>
                <br />

                <button type="submit">Submit</button>
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
                                <li>City: {item.city}</li>
                                <li>Agree: {item.agree ? "Yes" : "No"}</li>
                                <hr />
                            </div>
                        ))}
                    </ul>
                )
            }
        </>

    )
}

export default AdvanceForm
