#! /bin/bash

# tell the console what we're doing
echo "installing front end dependency via git"
# clone the angular-qr-scanner repo
git clone https://github.com/sembrestels/angular-qr-scanner.git client/bower_components/angular-qr-scanner
# cd there
cd client/bower_components/angular-qr-scanner
# install the git submodules
git submodule init
git submodule update