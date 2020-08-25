virtualenv -p python3 venv
pip3 freeze > requirements.txt
. venv/bin/activate
pip3 install -r requirements.txt
pip3 install --no-cache-dir -r requirements.txt
python -m unittest *test*.py
pytest -v tests/