docker-nodejs
=============
Vagrant + Docker + Your Node App = Awesome!

Requirements:
=============
1. Install [Vagrant]
2. Install [VirtualBox]
3. Install git :p

Usage:
======
Assuming that you are in a folder you wish to pull the repo (and copy your node app) into...

```
# git init
# git pull https://github.com/sabhiram/docker-nodejs.git
# vagrant up
# vagrant ssh 
```

And now you are inside a coreos vm set-up by Vagrant!! On to getting node installed... ready?

```
# sudo docker build -t <yourname>/nodejs .
# NODEJS_CONTAINER=$(sudo docker run -i -t <yourname>/nodejs)
# sudo docker attach $NODEJS_CONTAINER
```

Say hello to Node back!!

[Vagrant]:      http://www.vagrantup.com/
[Virtualbox]:   https://www.virtualbox.org/wiki/Downloads
