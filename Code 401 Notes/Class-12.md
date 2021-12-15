# Topic
## Pandas in 10
Creating an object
- Creating a Series by passing a list of values, letting pandas create a default integer index
- Creating a DataFrame by passing a NumPy array, with a datetime index and labeled columns
- Creating a DataFrame by passing a dict of objects that can be converted to series-like.
- The columns of the resulting DataFrame have different dtypes.

View Data:
- df.head()
- df.tail(3)
- df.to_numpy()
- describe() shows a quick statistic summary of your data
- Sort, Transpose, Sort by axis | values

Selecting:
- Selecting a single column, which yields a Series df["A"]
- Selecting via [], which slices the rows.
- Select by label
- iloc[3] by position
- df[df["A"] > 0] by boolean 
- Setting a new column automatically aligns the data by the indexes

Missing Data:
- NaN represents missing data
- fillna(value=5) Fill missing data
- isna(df1) fill with boolean 

Other things you can do:
- Operations
- Merge
- Grouping
- Reshaping
- Time series
- Categoricals
- Plotting
- Get data in/out