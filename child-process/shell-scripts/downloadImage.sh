#!/bin/bash

echo Please enter the image url

read imgUrl

curl -s $imgUrl > image.svg
base64 image.svg