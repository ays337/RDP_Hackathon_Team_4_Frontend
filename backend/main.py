from fastapi import FastAPI, UploadFile
import sqlite3

from pydantic import BaseModel

class db_request(BaseModel):
    table: str

app = FastAPI()

@app.get("/access")
def access_db(request: db_request):
    conn = sqlite3.connect("warehouse_data.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM {request.table}")
    rows = cursor.fetchall()
    conn.close()
    return {f"{request.table}": rows}

@app.get("/access/{sku_id}")
def access_sku(request: db_request, sku_id: int):
    conn = sqlite3.connect("warehouse_data.db")
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM {request.table} WHERE sku_id=?", (sku_id,))
    row = cursor.fetchall()
    conn.close()
    return {f"{request.table}": row}

# @app.post("/insert-sku")
# def insert_data(request: db_request):
#     conn = sqlite3.connect("warehouse_data.db")
#     cursor = conn.cursor()
#     cursor.execute(f"INSERT INTO {request.table} VALUES (?)", (request.value1))
#     conn.commit()
#     conn.close()
#     return {"message": "Data inserted successfully"}