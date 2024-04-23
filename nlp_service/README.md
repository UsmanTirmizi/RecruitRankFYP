Best Practice: Always set up a python virtual environment when working on a specific python project. Steps are provided below to create and activate the virtual environment:

For linux/WSL:
1. Install python3 and pip
2. Run ```python3 --version``` and ```pip --version``` to check both are installed correctly.
3. Create a new virtual environment using ```python3 -m venv my_venv``` (replace my_venv  with your preferred name, the one I have on my machine for example is called nlp_env)
4. Activate your virtual environment using the command ```source my_venv/bin/activate```, this will create a directory inside nlp_service called my_venv (or another name you've used) containing your python installation.

In the nlp_service directory, run the command ```pip install -r requirements.txt``` to install all necessary packages for this project.