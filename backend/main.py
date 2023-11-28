from flask import Flask, request, jsonify
from flask_cors import CORS
import requests 

import google.generativeai as palm
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()
apiKey = os.getenv('API_KEY')
palm.configure(api_key=apiKey)

@app.route('/')
def home():
    return "Hello World!"

@app.route('/api', methods=['POST'])
def perform_nlp():
    models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
    model = models[0].name
    data = request.get_json()
    
    emailValue = data.get('emailValue')
    selectedValue = data.get('selectedValue')
    customValue = data.get('customValue')
    prompt = f"Generate a response to this email: {emailValue}. Let the response tone be {selectedValue}. Let the response highlight this:{customValue} "
    print(data)
    print(prompt)
    
    if not prompt:
        return jsonify({'error': 'Missing or empty "emailValue" in the request'})

    completion = palm.generate_text(
        model=model,
        prompt=prompt,
        temperature=0,
        max_output_tokens=800,
    )
    print(completion.result)
    return jsonify({'result': completion.result})
  





if __name__ == '__main__':
    app.run(debug=True)

