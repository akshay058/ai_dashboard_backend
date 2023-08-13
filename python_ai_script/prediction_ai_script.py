import random
import json
import os

num_predictions = 10  # Change the number of predictions as needed
predictions = []

try:
    for _ in range(num_predictions):
        prediction = random.uniform(0, 1)
        actual = prediction + random.uniform(-0.1, 0.1)
        predictions.append({"prediction": prediction, "actual": actual})

    script_dir = os.path.dirname(__file__)
    predictions_file = os.path.join(script_dir, '..', 'data', 'predictions.json')

    with open(predictions_file, 'w') as f:
        json.dump(predictions, f)

except Exception as e:
    print(f"An error occurred: {e}")
