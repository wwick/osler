# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-09-03 02:16
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appointment', '0003_pt_showed_and_default_time_function_20181103_1414'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='appointment',
            options={'ordering': ['-clindate', '-clintime']},
        ),
    ]
