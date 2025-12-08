import { useState } from "react"

export default function BasicForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")

    return (
        <>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => { setName(e.target.value) }}
            />
            <br />
            <input
                type="text"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <br />
            <input
                type="number"
                name="age"
                value={age}
                placeholder="Enter your age"
                onChange={(e) => { setAge(e.target.value) }}
            />

            <h2 style={{margin: "20px 0px 10px 0px"}}>Data</h2>
            <label>Name: </label>
            <strong>{name}</strong>

            <br />
            <label>Email: </label>
            <strong>{email}</strong>

            <br />
            <label>Agr: </label>
            <strong>{age}</strong>
        </>
    )
}