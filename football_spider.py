# -*- coding: utf-8 -*-
"""
Created on Tue Mar 12 23:55 2019
@author: BC_Zhang

"""

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from Config import *
import pymongo
import numpy as np
import xlwt
import time


browser = webdriver.Chrome()
wait = WebDriverWait(browser ,10)


def next_page():
	browser.get("https://data.13322.com/league-31/scjf.html")
	lst =['#turnSelect > option:nth-child(2)','#turnSelect > option:nth-child(3)','#turnSelect > option:nth-child(4)',
	      '#turnSelect > option:nth-child(5)','#turnSelect > option:nth-child(6)','#turnSelect > option:nth-child(7)',
	       '#turnSelect > option:nth-child(8)','#turnSelect > option:nth-child(9)', '#turnSelect > option:nth-child(10)',
	       '#turnSelect > option:nth-child(11)','#turnSelect > option:nth-child(12)', '#turnSelect > option:nth-child(13)',
	      '#turnSelect > option:nth-child(14)', '#turnSelect > option:nth-child(15)', '#turnSelect > option:nth-child(16)',
	      '#turnSelect > option:nth-child(17)', '#turnSelect > option:nth-child(18)', '#turnSelect > option:nth-child(19)',
	      '#turnSelect > option:nth-child(20)', '#turnSelect > option:nth-child(21)', '#turnSelect > option:nth-child(22)',
	      '#turnSelect > option:nth-child(23)', '#turnSelect > option:nth-child(24)', '#turnSelect > option:nth-child(25)',
	      '#turnSelect > option:nth-child(26)', '#turnSelect > option:nth-child(27)',
	      ]
	result = ['排名','球队','比赛','胜','平','负','胜率','平率','负率','进球','失球','净胜','场均进球','场均失球','积分','轮次']
	for i in range(0,26):
		time.sleep(1)
		page = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR,lst[i])))
		page.click()
		wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '#Standings')))
		html1 = browser.page_source
		soup = BeautifulSoup(html1, "html.parser")
		for item in soup.find(id='Standings').find_all('tr'):
			result_cache = []
			for td in item.find_all('td'):
				result_cache.append(td.get_text().replace("‘", "").replace("’", ""))
			result_cache[15] = i+1
			print(result_cache)
			result= np.vstack((result,result_cache))
	row = len(result)
	col = len(result[0])
	workbook = xlwt.Workbook('ascii')
	worksheet = workbook.add_sheet('my_worksheet1')
	for x in range(row):
		for y in range(col):
			worksheet.write(x, y, result[x][y])
	workbook.save(r'西甲.xls')


def main():
	next_page()


if __name__ == '__main__':
	main()

