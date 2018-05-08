#include <wiringPi.h>
#include <iostream>

using namespace std;

const int LED1 = 0;

class Light {
	public:
		Light();
		void blink182(int);
		bool status() { return digitalRead(LED1); };
		void turnon() { digitalWrite(LED1, HIGH); };
		void turnoff() { digitalWrite(LED1, LOW); };
};

int main(int argc, char *argv[])
{
Light b;
//b.blink182(4);
//cout<<argv[1]<<endl;

if(argc > 1){
	if(string(argv[1]) == "s") cout<<"The Status of the light is: "<<b.status()<<endl;
	else if(string(argv[1]) == "o") b.turnon();
	else if(string(argv[1]) == "f") b.turnoff();
	else if(string(argv[1]) == "b") b.blink182(2);
}


return 0;
}

Light::Light(void){
	wiringPiSetup ();
	pinMode (LED1, OUTPUT);
}


void Light::blink182(int n){
	int i;
	if(status()) turnoff();
	for (i=0;i<n;i++){
		digitalWrite (LED1, HIGH);
		delay (500);
		digitalWrite (LED1, LOW);
		delay(500);
	}
}

