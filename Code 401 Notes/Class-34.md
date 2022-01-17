# API Deployment
## Django Settings Best Practices
- Different environments - Each environment can have its own specific settings
- Sensitive data - SECRET_KEY
- Sharing settings between team members
- settings_local.py
- Separate settings file for each environment
- Environment variables

12 Factors
- Codebase
- Dependencies
- Config
- Backing services
- Build, release, run
- Processes
- Port binding
- Concurrency
- Disposability
- Dev/prod parity
- Logs
- Admin processes

- django-environ

Give meaningful names to your settings.
Always use the prefix with the project name for your custom (project) settings.
Write descriptions for your settings in comments.

- Keep settings in environment variables.
- Write default values for production configuration (excluding secret keys and tokens).
- Don’t hardcode sensitive settings, and don’t put them in VCS.
- Split settings into groups: Django, third-party, project.
- Follow naming conventions for custom (project) settings.

## SSH
SSH, or Secure Shell, is a remote administration protocol that allows users to control and modify their remote servers over the Internet. 
```
ssh {user}@{host}
```
- Symmetrical encryption
- Asymmetrical encryption
- Hashing