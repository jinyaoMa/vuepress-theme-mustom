#!/bin/bash
if [ $1 = "npm" ]
then
  echo "user : $1";
  echo -e "registry=http://registry.npmjs.org/\n//registry.npmjs.org/:_authToken=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" > .npmrc;
elif [ $1 = "github" ]
then
  echo "user : $1";
  echo -e "registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" > .npmrc;
fi