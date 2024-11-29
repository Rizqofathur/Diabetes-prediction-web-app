from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import warnings

# mengabaikan peringatan
warnings.simplefilter(action="ignore")

app = Flask(__name__)
CORS(app)

file_path = 'model/random_forest_new.pkl'
with open(file_path, 'rb') as file:
    classifier = pickle.load(file)

@app.route('/api/predict', methods=['POST', 'GET'])
def predict():
    try:
        # Ambil data input dari JSON
        data = request.json
        # Validasi dan konversi input
        pregnancies = int(data.get('pregnancies', 0))
        glucose = int(data.get('glucose', 0))
        bp = int(data.get('bloodpressure', 0))
        st = int(data.get('skinthickness', 0))
        insulin = int(data.get('insulin', 0))
        bmi = float(data.get('bmi', 0.0))
        dpf = float(data.get('dpf', 0.0))
        age = int(data.get('age', 0))

        # Buat array numpy dalam format 2D
        features = np.array([[pregnancies, glucose, bp, st, insulin, bmi, dpf, age]])

        # Prediksi dengan model
        prediction = classifier.predict(features)
        # Interpretasi hasil prediksi
        if prediction[0] == 0:
            result = "Negatif diabetes"
        else:
            result = "Diprediksi positif diabetes"

        return jsonify({
            "message": "Prediction success",
            "result": result,
            "input_data": features.tolist()
        }), 200

    except ValueError as ve:
        return jsonify({"error": str(ve), "message": "Invalid input type. Ensure all fields are correct."}), 400
    except Exception as e:
        return jsonify({"error": str(e), "message": "Prediction error."}), 500

if __name__ == '__main__':
    app.run(debug=True)
