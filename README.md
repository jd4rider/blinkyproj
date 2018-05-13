# Blinky Project

This is a simple IoT program written for CSCI113 in C++ (Backend Script), PHP (Server side API), and jQuery/Bootstrap (FrontEnd UI).  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

A version of blinky (the executable/compiled blink.cpp) is already compiled to run on the Raspberry pi.  If one ever wants to run the software on a Windows based computer blink.cpp would need to be recompiled with G++. See below.

### Prerequisites

Clone Repo first:

```
sudo git clone https://github.com/jd4rider/blinkyproj.git
```

Be sure you have g++ insalled.

```
which g++
```

Should return something like.

```
/usr/bin/g++
```

If it says it doesn't exist execute the following to get MINGW g++.

```
sudo apt-get install mingw-w64
```

### Installing

A step by step series of examples that tell you have to get a development env running

You need MINGW's G++ to compile blink.cpp.  The PHP API is coded to use ./blinky so the following would need to be executed:

First step, Compile C++ Source code

```
cd blinkyproj
sudo g++ -Wall -o blinky blink.cpp -lwiringPi
```
Second step, move blinky to /website folder. Be sure you are currently in the /blinkyproj folder. (You should be from cd step taken above.) 

```
sudo cp blinky website/blinky
```

Third step, move the website folder to /var/www/html. Be sure you are currently in the /blinkyproj folder. (You should be from cd step taken above.) 

```
sudo cp -r website /var/www/html/website
```

Fix security so website can execute backend C++ code:

```
sudo chmod 4755 /var/www/html/website/blink
```

You should now be able to test the front end system or run the compiled blink.cpp.

## Running the tests

Run ./blinky with different flags (s - light status, o - turn light on, f - turn light off, b - blink light twice, t - check temperature)

```
./blinky s
```

Run ./blinky without a flag to get menu.

```
./blinky
```

Try going to the website while on the same network:

Find IP address of RPio 

```
ifconfig
```

Navigate to the following where x.x.x.x is Raspberry PI's Public IP address found above. (x.x.x.x = Public IP address)

```
http://x.x.x.x/website
```

## Documentation

Documentation, like UML and Hardware diagrams, are located in the /documentation folder of this project.