# Permissions & Postgresql
## DRF Permissions
- Together with authentication and throttling, permissions determine whether a request should be granted or denied access.
- Permission checks are always run at the very start of the view, before any other code is allowed to proceed. Permission checks will typically use the authentication information in the request.user and request.auth properties to determine if the incoming request should be permitted.
- IsAuthenticated, IsAuthenticatedOrReadOnly class in REST framework
### Object level permissions 
- For performance reasons the generic views will not automatically apply object level permissions to each instance in a queryset when returning a list of objects.

- Often when you're using object level permissions you'll also want to filter the queryset appropriately, to ensure that users only have visibility onto instances that they are permitted to view.

- Because the get_object() method is not called, object level permissions from the has_object_permission() method are not applied when creating objects. In order to restrict object creation you need to implement the permission check either in your Serializer class or override the perform_create() method of your ViewSet class.

### Permission policy 
```py 
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}
``` 