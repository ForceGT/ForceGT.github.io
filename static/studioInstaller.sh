#!/bin/bash

echo "Making some space for AS.........."
sudo mkdir /opt/android-studio
echo "\n\nDownloading AS from the server.....\n\n"
wget "https://r5---sn-cvh76n7k.gvt1.com/edgedl/android/studio/ide-zips/4.0.1.0/android-studio-ide-193.6626763-linux.tar.gz"
echo "n\n\Unzipping ....\n\n"
tar -xvf android-studio*
echo "Copying Files"
sudo cp android-studio*/android-studio/* /opt/android-studio/
echo "Removing Unnecessary Files"
sudo rm -rf android-studio*
sudo chmod 777 /opt/android-studio/bin/studio.sh
bash /opt/android-studio/bin/studio.sh
