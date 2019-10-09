from flask import Flask, request, jsonify
import joblib
app = Flask(__name__)

@app.route('/')
def home():
   return '<h1>Selamat datang</h1>'

@app.route('/prediksi', methods=['GET', 'POST'])
def data():
    if request.method == 'POST':
        body = request.json
        sl = body['sl']
        sw = body['sw']
        pl = body['pl']
        pw = body['pw']
        prediksi = model.predict([[sl, sw, pl, pw]])[0]
        predcon = lambda x : 'setosa' if (x == 0) else ('versicolor' if (x == 1) else 'virginica')
        print(predcon(int(prediksi)))
        return jsonify({
            'sepal_length': sl,
            'sepal_width': sw,
            'petal_length': pl,
            'petal_width': pw,
            'zprediksi': int(prediksi),
            'zconclusion': predcon(int(prediksi))
        })
    else:
        return jsonify({'status': 'ok'})

if __name__ == '__main__':
   model = joblib.load('model')
   app.run(debug = True)