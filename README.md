# HOME SHOWCASE
Basic webpage built on the mean stack to showcase a home for rent and do basic booking and communication.

- [HOME SHOWCASE](#)
	- [Built With](#)
	- [File structure](#)
		- [Front end](#)
		- [Back end](#)
	- [Getting Started](#)
		- [Prerequisites](#)
		- [Installing](#)
			- [Install MongoDB](#)
			- [Install Node.js from the EPEL Repository](#)
			- [Install packages from npm](#)
	- [Deployment](#)
	- [Author](#)
	- [License](#)
	- [Acknowledgments](#)

## Built With

* [Atom](https://atom.io/) - Text editor
* [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 engine.
* [Express.js](http://expressjs.com/) - A web framework for Node.js
* [Mongoose](http://mongoosejs.com/) - Object modeling for Node.js
* [MomgoDB](https://www.mongodb.com/) - As the database
* [Nodemailer](https://nodemailer.com/) - Node.js integrated emailer
* [Passport](http://passportjs.org/) - For authentication
* [Mocha](https://mochajs.org/) - The testing framework
* [Chai](http://chaijs.com/) - The assertion library
* [Winston](https://github.com/winstonjs) - The logging tool
* [Angular.js](https://angularjs.org/) - Front-end web application framework
* [Bootstrap](http://getbootstrap.com/) - Front-end framework

## File structure

The file structure of the project in detail.

The root folder contains fundamental files and the node_modules filder.
All front_end components are in the front end folder and all back end components
in the back_end folder. The goal for now is to use npm for moth the front
and back end in order to keep a common modules folder as well as to keep
common configuration folder.

```
root
-- server.js         # Starts the application
-- package.json      # Details the packages imported with npm
-- Readme.md         # The project readme file
---- back_end        # All the projects back_end code
---- front_end       # All the projects front_end code
---- config          # All the configuration files (front and back end)
---- node_modules    # Folder with all the modules from npm
```

### Front end

All of the backend code is in the back_end directory.

### Back end

All of the backend code is in the back_end directory.

```
backEnd

---- models # Database models for mongodb collections
      +-- todoModel.js   # Placeholder.
---- routeControllers     # All rest services and routes to them
      +-- index.js        # Entry point and basic sorting
      +-- todo.js         # Placeholder
```

## Getting Started

Centos / RHEL / Fedora operating system is preferred.

### Prerequisites

This guide assumes that:  
1) You are installing in Centos7 or a RHEL / Fedora operating system.  
2) You are a non root user with sudo privileges.

### Installing

#### Install MongoDB
Some of the following steps may require sudo privileges
The first step is to add MongoDB to the YUM repo
```
vim /etc/yum.repos.d/mongodb.repo
```
```
[mongodb]
name=MongoDB repo
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/
gpgcheck=0
enabled=1
```
Then install the MongoDB packages
```
yum install mongodb-org
```
Enable the Mongodb Server
```
chkconfig  mongod  on
```
Start the Mongodb Server
```
service   mongod start
```
Check if the server is running
```
ps -ef  |  grep   mongo
```
Open a port on the firewall
```
firewall-cmd --zone=public --add-port=27017/tcp --permanent
```
```
firewall-cmd --reload
```
Now you should be able to access the database remotely
```
telnet 10.1.1.99  27017
```

#### Install Node.js from the EPEL Repository

Reconfigure access the repository by installing an available package.
```
sudo yum install epel-release
```
Install Node.js using regular yum commands.
```
sudo yum install nodejs
```
Check that the installation was successful
```
node --version
```

#### Install packages from npm

Go to the GDPR directory that houses the package.json file and install the
dependencies with npm.
```
sudo npm install
```

## Deployment

## Author
George Manakanatas

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

https://templated.co/ for the excellent ION template that I will modify for the front-end
