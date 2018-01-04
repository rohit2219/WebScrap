#!/usr/bin/python3
import sys
import os
sys.path.append('/home/rohit/python-package/')
from bs4 import BeautifulSoup
import requests

os.chdir("/home/rohit/AngApp/WebScrap/src/app/serverside-spawner/")
source="http://www.nasdaq.com/symbol/"
ticker_list=['msft','tsla']
for TickSymbol in ticker_list:
  url=input(source + TickSymbol)
  print(url)
  r=requests.get(url)
  print("passed req")
  data=r.text
  print("got data")
  soup=BeautifulSoup(data,"lxml")
  print("got soup")
  
  for link in soup.find_all('a'):
    print(link.get('href'))

