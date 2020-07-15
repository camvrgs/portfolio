# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Generated constants
project_name = 'Portfolio'
author = 'Cameron Vargas'
server_project_name = 'site'
server_postgres_db_name = 'db_postgres_server'
server_postgres_username = 'admin3Tj6e'
client_project_name = 'app'
client_project_description = 'Portfolio site with Django + React-Redux'
client_app_style_slug = ['app_style_partials', 'app_style_vendor']
client_app_slug = ['polyfills', 'vendors', 'app']
date_generated = 'July 06, 2020 - 15:02'

def index(request):
	context = {
		'project': project_name,
		'author': author,
		'date_generated': date_generated,
		'server_name': server_project_name,
		'server_db_name': server_postgres_db_name,
		'server_db_user': server_postgres_username,
		'client_name': client_project_name,
		'client_desc': client_project_description,
		'client_app_style_slug': client_app_style_slug,
		'client_app_slug': 'app',
	}

	return render(request, 'index.html', context)

def home(request):
	context = {
		'title': 'Cameron Vargas',
		'client_app_style_slug': client_app_style_slug,
		'client_app_slug': client_app_slug,
		'repo': 'https://github.com/camvrgs/portfolio'
	}

	return render(request, 'home.html', context)
