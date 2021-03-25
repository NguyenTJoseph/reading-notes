# Coder's Computer Notes
## What is a text editor?
A text editor is software that helps you write and manage text. A text editor is an important tool especially to manage the text in a website.

Important features to look for in a text editor include:
- code completion
- syntax highlighting 
- a nice variety of themes (to reduce eye strain and fatigue)
- the ability to choose from a healthy selection of extensions available when you need them.

## Text Editor Options

### First Party
Your computer already has a text editor but these text editors are pretty bare bones.

### Third Party
Third party text editors have extra features than the one already on your computer. There is a wide selection of these and the right one is chosen through personal preference. 

Some third party text editors include:
- Notepad++
- Text Wrangler
- BB Edit
- Visual Studio Code
- Atom
- Brackets 
- Sublime Text

## IDE (Integrated Development Environment)
An IDE is a suite of different software all coming together. An IDE is a text editor, a file manager, a compiler, and a debugger all in one software package.

# Command Line
## What is command line?
A command line, or terminal, is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.

```
user@bash: ls -l /home/ryan
total 3
drwxr-xr-x  2 ryan users 4096 Mar 23 13:34 bin
drwxr-xr-x 18 ryan users 4096 Feb 17 09:12 Documents
drwxr-xr-x  2 ryan users 4096 May 05 17:25 public_html
user@bash: 
```
- Line 1 presents us with a prompt ( user@bash ). After that we entered a command ( ls ). Typically a command is always the first thing you type. After that we have what are referred to as command line arguments ( -l /home/ryan ). Important to note, these are separated by spaces (there must be a space between the command and the first command line argument also). The first command line argument ( -l ) is also referred to as an option. Options are typically used to modify the behaviour of the command. Options are usually listed before other arguments and typically start with a dash ( - ).
- Lines 2 - 5 are output from running the command. Most commands produce output and it will be listed straight under the issuing of the command. Other commands just perform their task and don't display any information unless there was an error.
- Line 6 presents us with a prompt again. After the command has run and the terminal is ready for you to enter another command the prompt will be displayed. If no prompt is displayed then the command may still be running (you will learn later how to deal with this).

## Shell/Bash
**Shell**

The shell is the part of the operating system that defines how the terminal will behave and look after running a command. The most common shell is **bash** (Bourne again shell). You can see what shell you are using with the echo command. 

## Navigating 
**PWD** Printed Working Directory 

This command tells you what your current or present working directory is.

**LS**
This command tells you what is in the current directory.
```
ls [options] [location]
```
```
user@bash: ls
bin Documents public_html
user@bash: ls -l
total 3
drwxr-xr-x  2 ryan users 4096 Mar 23 13:34 bin
drwxr-xr-x 18 ryan users 4096 Feb 17 09:12 Documents
drwxr-xr-x  2 ryan users 4096 May 05 17:25 public_html
user@bash: ls /etc
a2ps.cfg aliases alsa.d cups fonts my.conf systemd
...
user@bash: ls -l /etc
total 3
-rwxr-xr-x  2 root root 123 Mar 23 13:34 a2ps.cfg
-rwxr-xr-x 18 root root 78 Feb 17 09:12 aliases
drwxr-xr-x  2 ryan users 4096 May 05 17:25 alsa.d
...
user@bash:
```
- **Line 1**  We ran ls in it's most basic form. It listed the contents of our current directory.
- **Line 4**  We ran ls with a single command line option ( -l ) which indicates we are going to do a long listing. A long listing has the following:
First character indicates whether it is a normal file ( - ) or directory ( d )
Next 9 characters are permissions for the file or directory (we'll learn more about them in section 6).
The next field is the number of blocks (don't worry too much about this).
The next field is the owner of the file or directory (ryan in this case).
The next field is the group the file or directory belongs to (users in this case).
Following this is the file size.
Next up is the file modification time.
Finally we have the actual name of the file or directory.
- **Line 10** We ran ls with a command line argument ( /etc ). When we do this it tells ls not to list our current directory but instead to list that directories contents.
- **Line 13** We ran ls with both a command line option and argument. As such it did a long listing of the directory /etc.
- **Lines 12 and 18** just indicate that I have cut out some of the commands normal output for brevities sake. When you run the commands you will see a longer listing of files and directories.
## Paths
A path is a means to get to a particular file or directory on the system. Files are in a hierarchical structure. At the very top of the structure is what's called the root directory. It is denoted by a single slash ( / ). It has subdirectories, they have subdirectories and so on. Files may reside in any of these directories.
### Absolute & Relative Paths
**Absolute paths** specify a location (file or directory) in relation to the root directory. You can identify them easily as they always begin with a forward slash ( / )

**Relative paths** specify a location (file or directory) in relation to where we currently are in the system. They will not begin with a slash.

### Useful Shortcuts
- ~ (tilde) - This is a shortcut for your home directory. eg, if your home directory is /home/ryan then you could refer to the directory Documents with the path /home/ryan/Documents or ~/Documents
- . (dot) - This is a reference to your current directory. eg in the example above we referred to Documents on line 4 with a relative path. It could also be written as ./Documents (Normally this extra bit is not required but in later sections we will see where it comes in handy).
- .. (dotdot) - This is a reference to the parent directory. You can use this several times in a path to keep going up the hierarchy. eg if you were in the path /home/ryan you could run the command ls ../../ and this would do a listing of the root directory.
- **Tab Completion** When you start typing a path (anywhere on the command line, you're not just limited to certain commands) you may hit the Tab key on your keyboard at any time which will invoke an auto complete action. If nothing happens then that means there are several possibilities. If you hit Tab again it will show you those possibilities. You may then continue typing and hit Tab again and it will again try to auto complete for you.
## Moving around
In order to move around in the system we use a command called cd which stands for change directory. 
```
cd [location]
```
## Essentials Summary
```
pwd
Print Working Directory - ie. Where are we currently.
ls
List the contents of a directory.
cd
Change Directories - ie. move to another directory.
```
## Files 
File extentions denote what type of file it is. File extentions are important in systems like Windows but are unnecessary to specify in Linux. The following are common extensions:

- file.exe - an executable file, or program.
- file.txt - a plain text file.
- file.png, file.gif, file.jpg - an image.

To find what type of file a file is use the command:
```
file [path]
```
Operating systems such as Windows is not case sensetive. However, Linux is and you must match file names appropriately.

To deal with spaces in the name of a file either use quotes or escape characters. For example:
``` 
user@bash cd: 'Holiday Photos'
user@bash: pwd
/home/ryan/Documents/Holiday Photos
```
```
user@bash: cd Holiday\ Photos
user@bash: pwd
/home/ryan/Documents/Holiday Photos
```
