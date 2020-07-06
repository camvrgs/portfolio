#!/usr/bin/env python
"""
Initial stack setup
"""
import os
import sys
import subprocess

def setup():
  _BASE = os.path.abspath(os.path.dirname(__file__))
  _CLIENT = os.path.join(_BASE, 'client')
  _SERVER = os.path.join(_BASE, 'server')

  commands = [
    {'sh':'pipenv install', 'cwd':'.'},
    {'sh':'python setup_db.py', 'cwd':'.'},
    {'sh':'npm install', 'cwd':_CLIENT},
    {'sh':'npm run build', 'cwd':_CLIENT},
    {'sh':'python manage.py collectstatic --no-input', 'cwd':_SERVER},
    {'sh':'python manage.py migrate --no-input', 'cwd':_SERVER},
    {'sh':'python manage.py runserver', 'cwd':_SERVER},
  ]

  for c in commands:
    p = subprocess.Popen(c['sh'].split(' '), cwd=c['cwd'], shell=True)
    p.wait()

if __name__ == '__main__':
  setup()
