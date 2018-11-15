#!/bin/sh

if [ "$1" = "bookstore" ]; then
  # starting node application
  exec npm start
else
  # executing command supressed in the command line
  exec "$@"
fi
