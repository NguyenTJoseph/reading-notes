# Linear Regressions
## How to run linear regressions in Python.
Scikit-learn - Python module
- regression
- clustering
- model selection
- dimensionality reduction

Y = boston housing price(also called “target” data in Python)

X = all the other features (or independent variables)

lm.fit() -> fits a linear model

lm.predict() -> Predict Y using the linear model with estimated coefficients

lm.score() -> Returns the coefficient of determination (R^2). A measure of how well observed outcomes are replicated by the model, as the proportion of total variation of outcomes explained by the model.

Predict:
```py
lm.predict(X)[0:5]
```


Mean squared error:
```py
np.mean((bos.PRICE - lm.predict(X)) **2)
```


Train-test split:
```py
print “Fit a model X_train, and calculate MSE with Y_train:”, np.mean((Y_train – lm.predict(X_train)) ** 2)

print “Fit a model X_train, and calculate MSE with X_test, Y_test:”, np.mean((Y_test – lm.predict(X_test)) ** 2)
```