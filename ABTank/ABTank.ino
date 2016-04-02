int m1 = 5;
int m2 = 6;
int m3 = 10;
int m4 = 9;
int tx = 1;
int rx = 0;
char incomingOption;

void setup() {
  Serial.begin(9600);
  pinMode(m1, OUTPUT);pinMode(m2, OUTPUT);
  pinMode(m3, OUTPUT);pinMode(m4, OUTPUT);
  pinMode(tx, OUTPUT);pinMode(rx, INPUT);
}
void loop() {
  incomingOption = Serial.read();

  switch (incomingOption) {
    case 'f':
      digitalWrite(m1, HIGH);digitalWrite(m2, LOW);
      digitalWrite(m3, HIGH);digitalWrite(m4, LOW);
      break;
    case 'b':
      digitalWrite(m1, LOW);digitalWrite(m2, HIGH);
      digitalWrite(m3, LOW);digitalWrite(m4, HIGH);
      break;
    case 'e':
      analogWrite(m4, 150);digitalWrite(m3, LOW);
      analogWrite(m1, 150);digitalWrite(m2, LOW);
      break;
    case 'r':
      analogWrite(m3, 255);digitalWrite(m2, LOW);
      analogWrite(m1, 150);digitalWrite(m4, LOW);
      break;
    case 'q':
      analogWrite(m2, 150);digitalWrite(m4, LOW);
      analogWrite(m3, 150)digitalWrite(m1, LOW);
      break;
    case 'l':
      analogWrite(m1, 255);digitalWrite(m2, LOW);
      analogWrite(m3, 150);digitalWrite(m3, LOW);
      break;
    case 's':
      digitalWrite(m1, LOW);digitalWrite(m2, LOW);
      digitalWrite(m3, LOW);digitalWrite(m4, LOW);
      break;
  }
}

