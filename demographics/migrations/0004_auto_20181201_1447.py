# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2018-12-01 20:47
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('demographics', '0003_simplehistory_add_change_reason'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='demographics',
            options={'verbose_name_plural': 'demographics'},
        ),
        migrations.AlterModelOptions(
            name='resourceaccess',
            options={'verbose_name_plural': 'Resource accesses'},
        ),
        migrations.AlterModelOptions(
            name='workstatus',
            options={'verbose_name_plural': 'Work statuses'},
        ),
    ]
