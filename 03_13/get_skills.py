import json
from pprint import pprint 

def loadData():
    data = json.load(open('skills.json'))

    return data

def parseData(data):
    for d in data['included']:
        if d.has_key('name'):
            pprint(d['name'])

if __name__ == "__main__":
    d = loadData()
    parseData(d)
