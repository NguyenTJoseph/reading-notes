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
