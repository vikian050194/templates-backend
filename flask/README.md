pip virtualenv -p python3.7.5 venv
pip freeze > requirements.txt
pip install -r requirements.txt
pip install --no-cache-dir -r requirements.txt
python -m unittest *test*.py
pytest