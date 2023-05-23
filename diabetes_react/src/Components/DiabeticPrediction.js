import React, { useState } from 'react';

const DiabeticPrediction = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBMI] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [insulinLevel, setInsulinLevel] = useState('');
  const [skinThickness, setSkinThickness] = useState('');
  const [pregnancies, setPregnancies] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'age':
        setAge(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'bmi':
        setBMI(value);
        break;
      case 'bloodPressure':
        setBloodPressure(value);
        break;
      case 'insulinLevel':
        setInsulinLevel(value);
        break;
      case 'skinThickness':
        setSkinThickness(value);
        break;
      case 'pregnancies':
        setPregnancies(value);
        break;
      default:
        break;
    }
  };

  const predict = () => {
    // TODO: Perform prediction using machine learning algorithms
    // Replace the following code with your actual prediction logic
    const randomPrediction = Math.random() < 0.5 ? 'Non-Diabetic' : 'Diabetic';
    setPrediction(randomPrediction);
  };

  return (
    <div>
      <h2>Diabetic Prediction</h2>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={handleInputChange}
          placeholder="Enter age"
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label htmlFor="bmi">BMI:</label>
        <input
          type="number"
          id="bmi"
          name="bmi"
          value={bmi}
          onChange={handleInputChange}
          step="0.01"
          placeholder="Enter BMI"
          required
        />
      </div>
      <div>
        <label htmlFor="bloodPressure">Blood Pressure:</label>
        <input
          type="number"
          id="bloodPressure"
          name="bloodPressure"
          value={bloodPressure}
          onChange={handleInputChange}
          placeholder="Enter blood pressure"
          required
        />
      </div>
      <div>
        <label htmlFor="insulinLevel">Insulin Level:</label>
        <input
          type="number"
          id="insulinLevel"
          name="insulinLevel"
          value={insulinLevel}
          onChange={handleInputChange}
          placeholder="Enter insulin level"
          required
        />
      </div>
      <div>
        <label htmlFor="skinThickness">Skin Thickness:</label>
        <input
          type="number"
          id="skinThickness"
          name="skinThickness"
          value={skinThickness}
          onChange={handleInputChange}
          placeholder="Enter skin thickness"
          required
        />
      </div>
      <div>
        <label htmlFor="pregnancies">Pregnancies:</label>
        <input
          type="number"
          id="pregnancies"
          name="pregnancies"
          value={pregnancies}
          onChange={handleInputChange}
          placeholder="Enter number of pregnancies"
          required
        />
      </div>
      <div>
        <button onClick={predict}>Predict</button>
      </div>
      {prediction && (
        <div>
          <strong>Diabetic Prediction: </strong>
          {prediction}
        </div>
      )}
    </div>
  );
};

export default DiabeticPrediction;