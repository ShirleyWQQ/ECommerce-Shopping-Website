from tkinter import *
import tkinter.messagebox as MessageBox
import mysql.connector as mysql

con = mysql.connect(host="localhost", user="root", password="Doudou0422", database="products")

cursor = con.cursor()
cursor.execute("select * from product where pid=000001")
rows = cursor.fetchall()

for row in rows:
    print(str(row[0]) + ' ' + str(row[1]) + ' ' + str(row[2]) + ' ' + str(row[3]))

cursor.execute("select * from product where pid=000002")
rows = cursor.fetchall()

for row in rows:
    print(str(row[0]) + ' ' + str(row[1]) + ' ' + str(row[2]) + ' ' + str(row[3]))

con.close
