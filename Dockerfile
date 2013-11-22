# Dockerfile for NodeJS	
#
#	A simple NodeJS dockerfile which will fetch the latest
#	version of NodeJS, run npm update to sync up the '.' folder
#   with the package.json file. It is assumed that the server's
#   main entrypoint is 'index.js'. The 'server' runs on port 1234
#
#	Usage:
#
#		Fetch your project from github or copy it to the container
#		# cd path/to/nodejs/app
#		# sudo docker build -t <yourname>/nodejs .
#		# NODE_JS_CONTAINER = $(sudo docker run -d -p 1234:1234 <yourname>/nodejs)
#		# sudo docker attack $NODE_JS_CONTAINER
#

# Use CentOS 6.4 as the base image 
FROM centos:6.4
MAINTAINER Shaba Abhiram <shabarivas@gmail.com>

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# Install Node.js and npm
RUN     yum install -y npm

# Expose the current folder to the docker container into the 'nodejs_app'
# folder in the container
ADD ./nodejs_app /nodejs_app

# cd into the app dir
RUN cd /nodejs_app; npm install

# Install the node app
# RUN npm update

# The app runs on port 1234 by default, expose it
EXPOSE 1234

# Run the server!
CMD ["node", "/nodejs_app/index.js"]