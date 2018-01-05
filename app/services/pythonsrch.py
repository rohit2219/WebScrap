#!/usr/bin/python
## The below are very important, In case you want this can be run in background use the below syntax... 
## ~/AngApp/WebScrap/src/app/services$ python pythonsrch.py  > /tmp/rohit..log 2>&1 &too.. kill and restart in case you changed anything in the service /script..
## In case if we have to modify the parm to be a json or dict .. Like below

from flask import Flask, request
from flask_restful import Resource, Api
from flask.views import MethodView
from flask import jsonify
import json
from json import dumps
import sys

app = Flask(__name__)
api = Api(app)

#tickerPass=sys.argv[1]

### Note that I have used resource instead of the usual object
class pythSearch(Resource):
    
    def __init__(self):
        
        self.retValue={}
        
    def pyfn(self,tickerPass):
        jsondb="/home/rohit/AngApp/WebScrap/src/app/services/jsondb"
        x=json.load(open(jsondb))
        print("called pyfn")
        try :
            self.retValue = x[tickerPass]
        except KeyError:
            self.retValue = {"compname1":"NOKEY"}
        return self.retValue
#    def get(self,tickerFromApi):
    def get(self,tickerFromApi):
        x=self.pyfn(tickerFromApi)
        resp_data=jsonify(x)
        resp_data.headers.add('Access-Control-Allow-Origin', '*')
        return resp_data
## Note that u need a slash at the beginning and variables are declared using <>
api.add_resource(pythSearch,"/PythSearch/<tickerFromApi>")

if __name__ == '__main__':
## The default port is 5000, if you multiple people want to test on one local server, use different ports
     app.run(port=5002)

#print (x)

