import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
iris = load_iris()

from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(
    iris['data'], 
    iris['target'], 
    test_size=.1
)

# logistic regression
from sklearn.linear_model import LogisticRegression
model = LogisticRegression(solver='lbfgs', multi_class='auto', max_iter=10000)
model.fit(x_train, y_train)

# test prediction
print(model.predict(x_test))
print(model.predict([[6., 3.4, 4.5, 1.6]]))

# save model
import joblib
joblib.dump(model, 'model')