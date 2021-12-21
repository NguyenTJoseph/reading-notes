# Web Scraping
Automatically access and extract large amounts of information from a website

1. Inspect site
2. Go to data file element
3. Import 
```
import requests
import urllib.request
import time
from bs4 import BeautifulSoup
```
4. 
``` 
url = 'http://web.mta.info/developers/turnstile.html'
response = requests.get(url)
``` 
5. 
```
soup = BeautifulSoup(response.text, “html.parser”)
```
6. 
```
soup = BeautifulSoup(response.text, “html.parser”)
```
7. 
```
one_a_tag = soup.findAll(‘a’)[38]
link = one_a_tag[‘href’]
```
8. 
```
download_url = 'http://web.mta.info/developers/'+ link
urllib.request.urlretrieve(download_url,'./'+link[link.find('/turnstile_')+1:])
```
9. 
```
time.sleep(1)
```

## Scrape Websites Without Getting Blocked
Web spiders should ideally follow the robot.txt file for a website while scraping. It has specific rules for good behavior, such as how frequently you can scrape, which pages allow scraping, and which ones you can’t.

```
User-agent: *

Disallow:/ 
```
Doesn't like being scraped

- Scraping too fast and too many pages, faster than a human ever can
- Following the same pattern while crawling. For example – go through all pages of search results, and go to each result only after grabbing links to them. No human ever does that.
- Too many requests from the same IP address in a very short time
- Not identifying as a popular browser. You can do this by specifying a ‘User-Agent’.
- using a user agent string of a very old browser