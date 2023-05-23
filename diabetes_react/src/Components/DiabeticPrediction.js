import React, { useState } from 'react';

const DiabeticPrediction = () => {
  const [age, setAge] = useState('');
  const [bmi, setBMI] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucose, setGlucose] = useState('');
  const [insulinLevel, setInsulinLevel] = useState('');
  const [skinThickness, setSkinThickness] = useState('');
  const [pregnancies, setPregnancies] = useState('');
  const [diabetesPedigreeFunction, setPedigreeFunction] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'age':
        setAge(value);
        break;
      case 'bmi':
        setBMI(value);
        break;
      case 'bloodPressure':
        setBloodPressure(value);
        break;
      case 'glucose':
        setGlucose(value);
        break;
      case 'diabetesPedigreeFunction':
        setPedigreeFunction(value);
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
      case 'prediction':
        setPrediction(value);
        break;
      default:
        break;
    }
  };

  const predict = async() => {
    // TODO: Perform prediction using machine learning algorithms
    // Replace the following code with your actual prediction logic
    let val;
    const data = {
      "Pregnancies": pregnancies,
      "Glucose": glucose,
      "BloodPressure": bloodPressure,
      "SkinThickness": skinThickness,
      "Insulin": insulinLevel,
      "BMI": bmi,
      "DiabetesPedigreeFunction": diabetesPedigreeFunction,
      "Age": age
    }
    await fetch('http://localhost:5000/predict', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
     }).then((res)=> res.text()).then((dat)=>val = JSON.parse(dat).data)
    const randomPrediction = val == 0 ? 'Non-Diabetic' : 'Diabetic';
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
        <label htmlFor="Glucose">Glucose:</label>
        <input
          type="number"
          id="glucose"
          name="glucose"
          value={glucose}
          onChange={handleInputChange}
          placeholder="Enter Glucose"
          required
        />
      </div>
      <div>
        <label htmlFor="Pedigree">Diabetes Pedigree Function:</label>
        <input
          type="number"
          id="diabetesPedigreeFunction"
          name="diabetesPedigreeFunction"
          value={diabetesPedigreeFunction}
          onChange={handleInputChange}
          placeholder="Enter Diabetes Pedigree Function"
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