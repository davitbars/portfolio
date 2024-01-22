import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import facialclassifierPic from "./projectPics/facialClassifier.png";

const FacialClassifier = () => {
    const projectData = {
        title: "Facial Expression Classifier ML Final",
        projLink: "https://colab.research.google.com/drive/17-rd9_lLSqKNpshOfqQXVCEhW4gbWNV5?usp=sharing",
        gitLink: "https://github.com/davitbars/Machine-Learning/blob/main/CNN_classifier.ipynb",
        photo: facialclassifierPic,
        contributors: "Davit Barseghyan",
        description: `<h2>Introduction</h2>
        <p>This project involves building a Facial Expression Recognition model using PyTorch. The goal is to train a Convolutional Neural Network (CNN) to recognize facial expressions in images. The dataset includes grayscale images of faces with three emotion classes: Angry, Happy, and Neutral.</p>
      
        <h2>Project Steps</h2>
      
        <h3>1. Data Loading and Exploration</h3>
        <p>Mount Google Drive, load CSV files, and print dataset shapes.</p>
        <code>
          <pre>
      train_data = pd.read_csv('/content/drive/My Drive/train_data.csv')
      train_target = pd.read_csv('/content/drive/My Drive/train_target.csv')
      test_data = pd.read_csv('/content/drive/My Drive/test_data.csv')
      print("Train Data : " + str(train_data.shape))
      print("Train Data Target : " + str(train_target.shape))
      print("Test Data : " + str(test_data.shape))
          </pre>
        </code>
      
        <h3>2. Data Preprocessing</h3>
        <p>Convert data to NumPy arrays, reshape, normalize, and convert to PyTorch tensors.</p>
        <code>
          <pre>
      train_images = np.array(train_data.values, dtype='uint8').reshape(-1, 1, 48, 48)
      train_labels = np.array(train_target.values, dtype='int64').squeeze()
      test_images = np.array(test_data.values, dtype='uint8').reshape(-1, 1, 48, 48)
      
      train_images = train_images / 255.0
      test_images = test_images / 255.0
      
      train_images = torch.tensor(train_images, dtype=torch.float32)
      train_labels = torch.tensor(train_labels, dtype=torch.int64)
      test_images = torch.tensor(test_images, dtype=torch.float32)
          </pre>
        </code>
      
        <h3>4. Model Definition</h3>
        <p>Define a CNN model for facial expression recognition.</p>
        <code>
          <pre>
      class FacialExpressionModel(nn.Module):
          # ... (model architecture)
      
      model = FacialExpressionModel().to(device)
          </pre>
        </code>
      
        <h3>5. Training</h3>
        <p>Define hyperparameters, loss function, optimizer, and train the model.</p>
        <code>
          <pre>
      criterion = nn.CrossEntropyLoss()
      optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)
      
      for epoch in range(num_epochs):
          # ... (training steps)
          print(f"Epoch {epoch + 1}/{num_epochs}, Loss: {total_loss / len(train_loader)}")
          </pre>
        </code>
      
        <h3>6. Evaluation and Prediction</h3>
        <p>Evaluate the trained model on the test set and save predictions to a CSV file.</p>
        <code>
          <pre>
      model.eval()
      predictions = []
      # ... (evaluation steps)
      submission_df.to_csv('/content/drive/My Drive/facial_expression_predictions.csv', index=False)
          </pre>
        </code>
      
        <h2>Conclusion</h2>
        <p>This project demonstrates the end-to-end process of building a facial expression recognition model using PyTorch, from data loading and preprocessing to model training, evaluation, and prediction. The CNN model learns to recognize facial expressions and produces predictions that can be submitted for further analysis.</p>
      
      `
    }
    return <ProjectTemplate {...projectData} />;
};

export default FacialClassifier;