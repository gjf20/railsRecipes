# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies
If trying to run on Windows with Git Bash and encountering an error running `bin/dev` that looks like: 
``` /c/Users/<USER>/AppData/Local/Microsoft/WindowsApps/foreman: line 6: /c/Users/<USER>/AppData/Local/Microsoft/WindowsApps/ruby: No such file or directory ```

you may need to configure foreman to point to your ruby installation:
1. Get your ruby path
```which ruby```
2. Edit the foreman file:
```vi /c/Users/<USER>/AppData/Local/Microsoft/WindowsApps/foreman```
replace `bindir="${0%/*}"` with `bindir="<YOUR PATH TO THE RUBY bin FOLDER>"`

See [this stack overflow question for more information](https://stackoverflow.com/questions/77068813/how-does-rails-7-locate-the-ruby-executable).
Ultimately, I'd prefer not to use Windows developing ruby.  However, this workaround allows me to continue using Git Bash and the drawback (needing to update the foreman file each time my ruby version changes) will not affect me for the duration of this project.

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
