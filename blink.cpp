#include <wiringPi.h>
#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

const int LED1 = 0;
const string TEMPFILE = "/sys/bus/w1/devices/28-0000075e82b5/w1_slave";

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

	//instantiate new Light Object
	Light b;

	//declare variables
	vector<string> readvect;
	string read;
	int count = 0;

	//declare file input stream
	ifstream inputFile;
	
	//open temp file
	inputFile.open(TEMPFILE);

	//test till end of the file while putting space seperated values in a vector to read later
	while (inputFile >> read) {
		//dynamically push values to the vector
		readvect.push_back(read);
		count++;
	}

	//close file
	inputFile.close();

	cout << readvect[count-1] << endl;
	cout << atof(readvect[count-1].substr(2, (readvect[count-1].size()-2)).c_str())/1000  << endl;

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

