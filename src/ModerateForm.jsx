import { useState } from 'react'

function ModerateForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.name && !formData.email && !formData.password && !formData.age) {
            alert("Fill the complete form")
            return
        }

        console.log(formData.name)
        console.log(formData.email)
        console.log(formData.password)
        console.log(formData.age)
        
        // Clear inputs using setState
        setFormData({
            name: "",
            email: "",
            password: "",
            age: ""
        })
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value
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
                    type="text"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password"
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
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ModerateForm
