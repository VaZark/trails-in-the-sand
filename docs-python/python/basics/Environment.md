# Environment

## Python

The Python environment and interpretor can be setup in a wide variety of ways on linux. Some of the are,

- default package avaiable on your linux distro
- anaconda
- pyenv
- build from source

The best way at that moment is using pyenv. This is primarily because pyenv is a set og bash scripts that can run on any linux machine and it's hard dependencies are only standard build tools.

*Pyenv Setup:*
1. Install pyenv's dependencies by refering to the documentation
2. Install pyenv
3. Add pyenv to your $PATH
4. Use pyenv to install your target python version

##  Virtual environments

Any non-trivial python app will have dependencies on python packages outside the standard library. Isolating these libraries to an app ensures that we do not have dependencies that cross between applications and produce unexpected behaviour. 

This is done by using a `virtualenv`. When the virtualenv is active, the python packages are installed on an separate folder allocated for the virtualenv and ensures they are isolated and we can target different versions of same library to each app.

## Pipenv (Package manager)

These python packages can installed with `pip` or `Pipenv`. pip is widely but Pipenv is recommended by the python developers

Pipfile is better than pip to separate the application dependencies and dev dependencies. This allows the developer to install dev dependencies without having to worry about introducing unnecessary deps on application by accident. Pipfile also manages the virtualenv as well, thus making it easier to manage.

*Note:* We can create an empty `.venv` folder on the root of the application to ensure that the Pipenv uses it to install the dependencies locally. This is useful when you need absolute paths during server setup.
