#include <WiFi.h>
#include <HTTPClient.h>
WiFiClient client;

// const char* ssid = "Kirana Nusantara";
// const char* password = "@kirana123";
const char* ssid = "PKN";
const char* password = "Kirana12345";
// const char* ssid = "Lintang";
// const char* password = "lintang2611";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi connected");
}

void loop() {
  int suhu = 22;
  int lembab = 78;
  int analog = 854;
  uploadData(suhu, lembab, analog);
  delay(10000);
}

void uploadData(int suhu, int lembab, int analog){
  if(WiFi.status()== WL_CONNECTED){
    Serial.println("Masuk");
    
    HTTPClient http;
    
    http.begin("http://protected-reaches-13863.herokuapp.com/data/esp32");
    http.addHeader("Content-Type", "application/json");

    String body = "{\"suhu\": " + String(suhu) + ", \"lembab\": " + String(lembab) + ", \"analog\": " + String(analog) + "}";
    
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