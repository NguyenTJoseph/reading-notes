# Django Models
## Using Models
- Models define the structure of stored data, including the field types and possibly also their maximum size, default values, selection list options, help text for documentation, label text for forms, etc.
- Django allows you to define relationships that are one to one (OneToOneField), one to many (ForeignKey) and many to many (ManyToManyField).
- Models are usually defined in an application's models.py file. They are implemented as subclasses of django.db.models.Model, and can include fields, methods and metadata.
- A model can have an arbitrary number of fields, of any type — each one represents a column of data that we want to store in one of our database tables. Each database record (row) will consist of one of each field value.
- You can declare model-level metadata for your Model by declaring class Meta
- Minimally, in every model you should define the standard Python class method __str__() to return a human-readable string for each object.
- Once you've defined your model classes you can use them to create, update, or delete records, and to run queries to get all records or particular subsets of records.
- You can search for records that match certain criteria using the model's objects attribute

## Django Admin
- The Django admin application can use your models to automatically build a site area that you can use to create, view, update, and delete records.
- Add your models to the admin application is to register them.
```py
from django.contrib import admin
from .models import Author, Genre, Book, BookInstance

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
```