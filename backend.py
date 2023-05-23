#import libraries
import numpy as np
import pandas as pd
from flask import Flask, jsonify,request
from flask_restful import Resource, Api
from flask_cors import CORS
import pickle#Initialize the flask App
app = Flask(__name__)
api = Api(app)
CORS(app)
clf = pickle.load(open('model.pkl', 'rb'))
class Predict(Resource):
    def post(self):
        data = request.get_json() 
        arr = []
        for i in data:
            arr.append(data[i])
        columns = ["Pregnancies","Glucose","BloodPressure" ,"SkinThickness","Insulin" ,"BMI" ,"DiabetesPedigreeFunction" ,"Age"]
        arr=np.reshape(arr,(1,8))
        df = pd.DataFrame(arr,columns=columns)
        outcome = clf.predict(df)[0]
        return jsonify({'data': str(outcome)})

api.add_resource(Predict,'/predict')

if __name__ == '__main__':
  
    app.run(debug = True)