import time
import requests

def melon_search(query: str) -> list:
    search_url = "https://www.melon.com/search/keyword/index.json"

    # Query Parameters
    params = {
        "jscallback": "_",
        "query": query,
        "_": int(time.time()),
    }

    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
    }

    res = requests.get(search_url, params=params, headers=headers)
    if res.status_code == 200:
        return res.json()
    return []
