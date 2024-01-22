import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import linearRegPic from "./projectPics/linearRegression.png";

const LinearRegression = () => {
    const projectData = {
        title: "Facial Expression Classifier ML Final",
        projLink: "https://colab.research.google.com/drive/1HlJU7DZKfbRutCNvAAXD8AyTzTPDpIfM?usp=sharing",
        gitLink: "https://github.com/davitbars/Machine-Learning/blob/main/Linear_Regression.ipynb",
        photo: linearRegPic,
        contributors: "Davit Barseghyan",
        description: ` <p>The California Housing dataset contains information about housing in different locations, including features such as longitude, latitude, housing median age, total rooms, total bedrooms, population, households, median income, and ocean proximity. The goal is to predict the median house value based on these features.</p>

        <h2>Data Exploration and Preprocessing</h2>
      
        <p>The dataset is loaded, and initial exploration shows the top rows and information about the columns. Missing values in the "total_bedrooms" column are handled using the median value. The data is then split into features (<code>housing_data</code>) and the target variable (<code>housing_target</code>).</p>
      
        <pre><code>
      housing_data = housing.drop("median_house_value", axis=1, inplace=False)
      housing_target = housing["median_house_value"].copy()
        </code></pre>
      
        <p>A transformation pipeline is constructed to handle numerical and categorical features. Numerical features are imputed with the median and scaled, while categorical features are one-hot encoded.</p>
      
        <pre><code>
      num_pipeline = Pipeline([
          ('imputer', SimpleImputer(strategy="median")),
          ('std_scaler', StandardScaler()),
      ])
      
      full_pipeline = ColumnTransformer([
          ('num', num_pipeline, feature_names[:-1]),
          ('cat', OneHotEncoder(), [feature_names[-1]]),
      ])
      
      housing_preprocessed = full_pipeline.fit_transform(housing_data)
        </code></pre>
      
        <h2>Linear Regression Model</h2>
      
        <p>The data is split into training and testing sets, and a linear regression model is trained on the training set. The model's performance is evaluated using the training and testing errors.</p>
      
        <pre><code>
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
      lr = LinearRegression()
      lr.fit(X_train, y_train)
      
      print("Model Training Error: %.3f" % lr.score(X_train, y_train))
      print("Model Testing Error: %.3f" % lr.score(X_test, y_test))
        </code></pre>
      
        <h2>Visualization</h2>
      
        <p>To visually assess the model's predictions, a scatter plot is created comparing the actual median house values with the predicted values. The points are customized with smaller size, a black thin outline, and a red dashed line represents the ideal scenario where actual and predicted values are equal.</p>
      
        <pre><code>
      y_pred = lr.predict(X_test)
      
      plt.scatter(y_test, y_pred, color='blue', marker='o', s=10, edgecolors='black', linewidth=0.5)
      plt.plot([min(y_test), max(y_test)], [min(y_test), max(y_test)], linestyle='--', color='red', linewidth=2)
      
      plt.xlabel('Actual Median House Value')
      plt.ylabel('Predicted Median House Value')
      plt.title('Linear Regression Predictions on Housing Data')
      
      plt.show()
        </code></pre>
      
        <p>This visualization allows for a quick interpretation of how well the linear regression model predicts median house values, with the red dashed line indicating perfect predictions.</p>
      
      `
    }
    return <ProjectTemplate {...projectData} />;
};

export default LinearRegression;