import { useState } from "react";
import axios from "axios"
import '../Styles/addressManage.css'

const FormDisplay = () => {
    const [record, setRecord] = useState([]);
    const [showToogle, setShowToogle] = useState("none");
    const [inputVal, setInputValue] = useState({
        name: "",
        phoneNo: "",
        address: "",
        street: "",
        pinCode: "",
        state: "Bihar",
        country: "India"
    });
    const countryOfEarth = ["India", "Russia", "US", "Uk"];
    const statesInIndia = [
        "Andhrapradesh",
        "Maharastra",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghal"
    ];

    const PostMethod = async () => {
        const newAdded = await axios.post("/api/products", {
            // address: inputVal
        });
        console.log("new", newAdded);
    };

    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputVal, [name]: value });
    };
    const submitForm = (e) => {
        e.preventDefault();
        const userNewRecord = {
            ...inputVal,
            id: new Date().getTime().toString()
        };
        setRecord([...record, userNewRecord]);
        setInputValue({
            name: "",
            phoneNo: "",
            address: "",
            street: "",
            pinCode: "",
            state: "Bihar",
            country: "India"
        });
        PostMethod();
    };

    const removeHandler = (id) => {
        const newForm = record.filter((item) => item.id !== id);
        setRecord(newForm);
    };
    const showHandle = () => {
        setShowToogle((showToogle) =>
            showToogle === "none" ? "block" : "none"
        );
    };
    return (
        <div className="addressManagement overflow">
            <div className="formManager">
                <h1 className='pTectColor dis-flex just-center'> Address book </h1>
                <h4 onClick={showHandle} className='pTectColor btn dis-flex just-center align-center'><i className="fas fa-plus btn"></i> add Address  </h4>
                <form onSubmit={submitForm} style={{ display: showToogle }}>
                    <div className="gridBox">
                        <label>Enter your Name</label>
                        <input
                            type="text"
                            autoComplete="hidden"
                            placeholder="Enter your Name"
                            name="name"
                            className="inputBox"
                            required
                            value={inputVal.name}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="gridBox">
                        <label>Enter your Phone Number</label>
                        <input
                            type="number"
                            placeholder="Enter your Phone Number"
                            name="phoneNo"
                            className="inputBox"
                            value={inputVal.phoneNo}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="gridBox">
                        <label>Enter your Address</label>
                        <input
                            type="text"
                            placeholder="Enter your Address,"
                            name="address"
                            className="inputBox"
                            value={inputVal.address}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="gridBox">
                        <label>Enter your Colony, street</label>
                        <input
                            type="text"
                            placeholder="Colony,street "
                            name="street"
                            className="inputBox"
                            value={inputVal.street}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="gridBox">
                        <label>Enter your Pin Code</label>
                        <input
                            type="text"
                            placeholder="Enter your Pin Code"
                            name="pinCode"
                            className="inputBox"
                            value={inputVal.pinCode}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="gridBox">
                        <label>Select your State</label>
                        <select
                            name="state"
                            required
                            className="inputBox"
                            value={inputVal.state}
                            onChange={inputHandler}
                        >
                            {statesInIndia.map((stateName) => (
                                <option key={stateName}>{stateName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="gridBox">
                        <label>Select Your Country</label>
                        <select
                            name="country"
                            required
                            className="inputBox"
                            value={inputVal.country}
                            onChange={inputHandler}
                        >
                            {countryOfEarth.map((country) => (
                                <option key={country}>{country}</option>
                            ))}
                        </select>
                    </div>{" "}
                    <div className="gridBox">
                        <button>Discard</button>
                        <button className="btn submit-btn pTectColor">Submit</button>
                    </div>
                </form>
                <h2> Added Addresses</h2>
                <div>
                    {record.map((items) => (
                        <div key={items.id} className="addressBox">
                            <div>
                                <h2>Name:{items.name}</h2>
                                <p>{items.phoneNo}</p>
                                <p>
                                    Address:-
                                    {items.street}, {items.address}, {items.pinCode}
                                    ,
                                </p>
                                <p>{items.state}</p>
                                <p>{items.country}</p>
                                <button
                                    className="btn">Edit</button>
                                <button
                                    className="btn"
                                    type="submit"
                                    onClick={() => removeHandler(items.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { FormDisplay };
