from bs4 import BeautifulSoup
import requests as req


class moneyStore:
  def __init__(self, baseURL):
    # base URL
    self.baseURL = baseURL
    # base Request for html data
    self.baseReq = req.get(self.baseURL)
    # parse base with bs4
    self.baseSoup = BeautifulSoup(self.baseReq.content, 'html5lib')
    # get container with data link
    self.container = self.baseSoup.findAll('div', {"class": "entry-content"})
    # parse out data link
    self.dataLink = self.container[0].iframe.get("src")
    # make a request from data link
    self.dataReq = req.get(self.dataLink)
    # parse data link with bs4
    self.dataSoup = BeautifulSoup(self.dataReq.content, "html5lib")
    # parse out table on new link
    self.tableCont = self.dataSoup.findAll('td', {"class": "DetailsHeaderBackground"})
    # array for all links on the table
    self.tableLinks = [] 
    # array for all requests made for tableLinks
    self.contentReq = []
    # array for all parsed bs4 data
    self.contentSoups = []

#setters
  def setTableLinks(self):
    for links in range(len(self.tableCont)):
      self.tableLinks.append(self.tableCont[links].a.get("onclick").split("\"")[1])
  def setContentReq(self):
    for reqs in range(len(self.tableLinks)):
      self.contentReq.append(req.get(self.tableLinks[reqs]))
  def setSoups(self):
    for soups in range(len(self.contentReq)):
      self.contentSoups.append(BeautifulSoup(self.contentReq[soups].content, "html5lib"))
# print all the table links
  def printTableLinks(self):
    for links in range(len(self.tableLinks)):
      print(self.tableLinks[links])

# short test
if __name__ == "__main__":
  webS = moneyStore("https://www.211bayarea.org/santaclara/food/food-programs/farmers-markets/")
  webS.setTableLinks()
  webS.setContentReq()
  webS.setSoups()
  print(webS.contentSoups[0])
  webS.printTableLinks()
