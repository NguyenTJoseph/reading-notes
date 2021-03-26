# Revisions and the Cloud
## Version Control
Version control is a system that allows you to visit different versions of a file or set of files by recording changes. Version control allows you to revert to a version of a file or track changes and compare.
### Local Version Control 
Local version control stores different versions of your project/files on your disk.
### Centralized Version Control
A single server stores all changes and file versions, which can be accessed by various clients. This streamlined the collaboration process (by eliminating the need to involve all local databases), allowed programmers to have more knowledge of team members’ activities with certain files, and gave administrators much more control over divvying up revision privileges.
### Distributed Version Control
This stores mirrored copies of changes and file versions across multiple servers.
## Git
Git is software that tracks changes of files, usually used for coordinating work among programmers collaboratively developing source code during software development. These are held in snapshots that are saved with commits. 
### States

Files in Git can reside in three main states: committed, modified and staged.

**Committed**

Data is securely stored in a local database

**Modified**

File has been changed but not committed to the database

**Staged**

Flagged a file’s changed version to be committed in the next snapshot

### Git Setup
```
git config --global user.name "Jane Smith"

git config --global user.email "example@email.com"

git config --global core.editor "text editor"

git config --list "check settings"
```
## Git Repository Setup
### Import Repository
1. Switch to the target project’s directory
Example:
```
$ cd "project directory"
```
2. Use the git init command
```
$ git init
```
Note: At this stage, you have created a new subdirectory named .git that has the repository files. Tracking has not commenced.

3. To start tracking these repository files, perform an initial commit by typing the following:
```
$ git add *.c
$ git add LICENSE
$ git commit -m “any message here”
```
### Clone Repository
```
$ git clone "repository url"
```
To clone a specific directory:
```
$ git clone "repository url" "directory"
```
The local Git repository has three components:

- Working Directory: The actual files reside here.
- Index: The area used for staging
- Head: Points to the most recent commit

The Life Cycle of File Status
- After you edit a file, Git flags it as modified because of changes made after the previous commit.
- You stage the modified file.
- Then, you commit staged changes.

To check file status use:
```
$ git status
```
## Tracking and Staging a New File
Single File

Track one file only by using the following format:
```
git add "filename"
```
All Files

Track all files in a repository by using the following command:
```
$ git add *
```
## Committing a File
After staging one or multiple files, you should commit the changes and record what you did within the commit message:
```
$ git commit -m “made change x,y,z”
*This step has committed changes for the file or files (you can have one commit message for multiple files, if applicable) to the HEAD.
```
Committing All Changes
```
$ git commit -a
```
### Push Changes
To push changes to the remote repository:
```
$ git push origin master
```
## Stash Changes
To stash changes for later for a clean directory:
```
git stash
```
To get stashed changes back:
```
git stash apply
```
