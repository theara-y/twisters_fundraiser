Installation
```
python -m venv venv
source venv/Scripts/activate

pip install -r requirements.txt
waitress-serve --listen=0.0.0.0:10000 app:app
```