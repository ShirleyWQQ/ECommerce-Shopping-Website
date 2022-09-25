from tkinter import *
import tkinter.messagebox as MessageBox
import mysql.connector as mysql

con = mysql.connect(host="localhost", user="root", password="Doudou0422", database="testDB")

con.close
