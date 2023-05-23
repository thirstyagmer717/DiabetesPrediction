#import libraries
import numpy as np
from flask import Flask, jsonify,request
from flask_restful import Resource, Api
import pickle#Initialize the flask App
app = Flask(__name__)
api = Api(app)
clf = pickle.load(open('model.pkl', 'rb'))
class Predict(Resource):
    def post(self):
        data = request.get_json() 
        return jsonify({'data': data})

api.add_resource(Predict,'/predict')

if __name__ == '__main__':
  
    app.run(debug = True)