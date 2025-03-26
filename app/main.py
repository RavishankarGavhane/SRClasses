from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/submit-contact")
async def submit_contact(name: str = Form(...), email: str = Form(...), phone: str = Form(...), message: str = Form(...)):
    print(f"Contact: {name}, {email}, {phone}, {message}")
    return {"message": "Inquiry submitted successfully"}

@app.post("/submit-registration")
async def submit_registration(name: str = Form(...), email: str = Form(...), phone: str = Form(...), course: str = Form(...), board: str = Form(...)):
    print(f"Registration: {name}, {email}, {phone}, {course}, {board}")
    return {"message": "Registration submitted successfully"}