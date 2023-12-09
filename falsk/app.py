from flask import Flask, request, send_file
from flask_cors import CORS  # Import CORS from flask_cors
import os
import csv

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Endpoint to upload raw data in CSV format
@app.route("/upload", methods=["POST"])
def upload_raw_data():
    try:
        # Get the uploaded file
        uploaded_file = request.files["file"]

        if uploaded_file.filename != "":
            # Save the file to the server
            file_path = os.path.join(os.getcwd(), "Raw_Data.csv")
            uploaded_file.save(file_path)

            # Append the data to Raw_Data.csv
            with open(file_path, "a", newline="") as csvfile:
                csv_writer = csv.writer(csvfile)

                # Open the uploaded CSV file for reading
                with open(file_path, "r") as uploaded_csv:
                    csv_reader = csv.reader(uploaded_csv)
                    skipped_first = False

                    # Iterate through the rows and append each row to the CSV file
                    for row in csv_reader:
                        if not skipped_first:
                            skipped_first = True
                            continue
                        csv_writer.writerow(row)

            return "File uploaded successfully!"
        else:
            return "No file uploaded!"
    except Exception as e:
        return f"Error: {str(e)}"


# Endpoint to download raw data
@app.route("/download/raw_data", methods=["GET"])
def download_raw_data():
    file_path = os.path.join(os.getcwd(), "Raw_Data.csv")
    return send_file(file_path, as_attachment=True)


# Endpoint to download heats data
@app.route("/download/heats_data", methods=["GET"])
def download_heats_data():
    file_path = os.path.join(os.getcwd(), "data_100m_model.csv")
    return send_file(file_path, as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)
