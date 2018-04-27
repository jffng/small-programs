import requests
from pprint import pprint
from time import sleep
from random import random

rabbis = []

# define get_rabbis
# make initial request

for d in response['searchResults']:
    rabbis.append({ "name": d['member']['formattedName'],
                   "location": d['member']['location'], 
                   "title": d['member']['title'], 
                   "company": d['company']['companyName'] })

while len(rabbis) <= response['pagination']['total']:
    sleep(max(2+random(),random()*4))

    response = get_rabbis(len(rabbis))
                  
    for d in response['searchResults']:
        rabbis.append({ "name": d['member']['formattedName'],
                       "location": d['member']['location'], 
                       "title": d['member']['title'], 
                       "company": d['company']['companyName'] })
