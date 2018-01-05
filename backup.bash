#!/bin/bash
datentime=$(date "+%Y%m%d%H%M%S")
appname="WebScrap"
angapp_loc="/home/rohit/AngApp/${appname}/src/"
back_loc="/home/rohit/AngApp/backup/${appname}/src-${datentime}"
mkdir -p ${back_loc}
mkdir -p ${back_loc}/app

cp -p ${angapp_loc}/* $back_loc/
rsync -azv ${angapp_loc}/app/* $back_loc/app/
