#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h" 
#define DHTPIN 13     // sig=gpio13 vcc=5v gnd=gnd
#define DHTTYPE DHT11 
#include <Wire.h>
#include <Adafruit_BMP085.h>  // vin=3.3v gnd=gnd scl=gpio22 sda=gpio21

Adafruit_BMP085 bmp;
DHT dht(DHTPIN, DHTTYPE);
WiFiClient client;

const char* ssid = "Lintang";
const char* password = "lintang2611";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  dht.begin();
  bmp.begin();
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi connected");
}

void loop() {
  // dummy data
  int iid = 2611;
  float suhuair = 18.3;
  float tangki = 52;
  // dht11
  float lembab = dht.readHumidity();
  // bmp180
  float suhu = bmp.readTemperature();
  float pressure = bmp.readPressure();
  float altitude = bmp.readAltitude();

  uploadData(iid, suhuair, tangki, lembab, suhu, pressure, altitude);
  delay(10000);
}

void uploadData(int iid, float suhuair, float tangki, float lembab, float suhu, float pressure, float altitude){
  if(WiFi.status()== WL_CONNECTED){
    Serial.println("Masuk");
    
    HTTPClient http;
    
    http.begin("http://192.168.43.15:1234/iot");
    http.addHeader("Content-Type", "application/json");

    String body = "{\"iid\": " + String(iid) + ", \"isuhuu\": " + String(suhu) + ", \"isuhua\": " + String(suhuair) + ", \"ilembab\": " + String(lembab) + ", \"ipressu\": " + String(pressure) + ", \"ialti\": " + String(altitude) + ", \"itangki\": " + String(tangki) + "}";
    
    int httpCode = http.POST(body);
    //int httpCode = http.GET();
    String payload = http.getString(); 
    
    Serial.println(httpCode); 
    Serial.println(payload);
    Serial.println(body); 
    
    http.end();
  }else{
    Serial.println("Error in WiFi connection");   
  }
delay(3000);
}