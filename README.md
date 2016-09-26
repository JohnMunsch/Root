# Angular 2 Essentials

Code, links, and reference material for the Packt Publishing course 
*Angular 2 Essentials*.

## Where to find updates!

<https://github.com/JohnMunsch/Root>

## Important Notes!

*This source code is current with the 2.0.0 final release of Angular 2.*

Each video gets its own directory for source. In most of those 
directories there is a start directory, which contains the source as 
it was at the start of the video before I add to it or make changes, 
and an end directory which corresponds to the final version of the code 
from the end of the video.

In each directory you will need to run "npm install" to install the Node.js
packages for that particular directory. You will also need to stop any "gulp" command
you have running in another directory.

**Note: This course was written in anticipation of Gulp v4 being 
released around the same time. As a result the package.json files 
install the pre-release version of Gulp v4. After v4 is released I'll come
back and update the package.json files appropriately.**

## Video 1.1

## Video 1.2

## Video 1.3

### TypeScript
- [TypeScript](http://www.typescriptlang.org/)
- [TypeScript Playground](https://www.typescriptlang.org/play/index.html)
- [ES6 Compatability Table](https://kangax.github.io/compat-table/es6/#typescript)

Example code for the TypeScript Playground:

    function greeter(person) {
        return `Hello, ${ person }`;
    }

    var user = "Jane User";

    document.body.innerHTML = greeter(user);

### Installation Steps
1. [Node.js](https://nodejs.org/)

2. The command to install the global packages with NPM (please see the note at the top of this README about Gulp v4):
`npm install -g "gulpjs/gulp-cli" typescript`

3. cd to "Section 1/Video 1.4/start" and run `npm install`

This will install any local packages needed for this project into the node_modules directory.

## Video 1.4

Be sure you've already done all the installation from the previous video and then run:
`gulp`

## Video 1.5

## Video 1.6

## Video 2.1

### Gulp
* [Gulp](http://gulpjs.com/)
* [Gulp v4 Prerelease Docs](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md)
* [Gulp Plugins](http://gulpjs.com/plugins/)

### Grunt
* [Grunt](http://gruntjs.com/)

### Gulp Plugins Mentioned in the Video
* <https://www.npmjs.com/package/gulp-tslint/>
* <https://www.npmjs.com/package/gulp-sass/>
* <https://www.npmjs.com/package/gulp-notify/>
* <https://www.npmjs.com/package/gulp-concat/>
* <https://www.npmjs.com/package/gulp-uglify/>
* <https://www.npmjs.com/package/gulp-nodemon>
* <https://www.npmjs.com/package/gulp-git>

### Node.js

* <https://nodejs.org/>
* <http://nodeschool.io/>
* <https://www.npmjs.com/>

## Video 2.2

### Links Mentioned in the Video
* [Browsersync](http://www.browsersync.io/)
* [Gulp Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [Gulp Recipies](https://github.com/gulpjs/gulp/tree/master/docs/recipes)

## Video 3.1

### Material Design Lite
* <http://www.getmdl.io/>
* <http://www.getmdl.io/components/index.html>
* <http://www.getmdl.io/templates/index.html>

### Links Mentioned in the Video
* <https://almsaeedstudio.com/>
* <http://startbootstrap.com/template-overviews/sb-admin-2/>
* <http://blacktie.co/2014/07/dashgum-free-dashboard/>
* <http://www.creative-tim.com/product/light-bootstrap-dashboard>
* <https://wrapbootstrap.com/themes/admin>

## Video 3.2

### Links Mentioned in the Video
* <https://www.google.com/design/spec/style/color.html#color-color-palette>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch>

## Video 3.3

## Video 3.4

### Yahoo's Weather API
<https://developer.yahoo.com/weather/>

This is the example YQL query from the video:
`https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22fort%20worth%2C%20ak%22%29&amp;format=json&amp;env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`

### Links Mentioned in the Video
* <http://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call/14220323#14220323>
* <https://api.jquery.com/deferred.promise/>
<https://docs.angularjs.org/api/ng/service/$q>
* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>
* <https://github.com/ReactiveX/rxjs>

## Video 4.1

[The Angular 2 Cheat Sheet](https://angular.io/cheatsheet)

### Links Mentioned in the Video
<https://angular.io/docs/ts/latest/guide/template-syntax.html>

## Video 4.2

## Video 4.3

[Angular 2's in depth explanation of how * and templates relate](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#star-template)

### Links Mentioned in the Video
* <https://lodash.com/>
* <http://momentjs.com/>

## Video 4.4

## Video 4.5

## Video 5.1

### Links Mentioned in the Video
* [Prerender](https://prerender.io/)
* [BromBone](http://www.brombone.com/)

## Video 5.2

### Links Mentioned in the Video
* <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>
* <https://dev.twitter.com/overview/api/response-codes>
* <https://labs.omniti.com/labs/jsend>

## Video 5.3

To run the server used by the example in this video:

`node appServer.js`

## Video 6.1

To run the server used by the example in this video:

`node stupidSimpleServer.js`

## Video 6.2

### Links Mentioned in the Video
* [Jasmine](http://jasmine.github.io/2.4/introduction.html)
* [Karma](https://karma-runner.github.io/1.0/index.html)

## Video 6.3


## Video 7.1

### Links Mentioned in the Video
* [Continous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
* [Jenkins](https://jenkins-ci.org/)
* [Bitnami installation for Jenkins](https://bitnami.com/stack/jenkins)
* [Codeship](https://codeship.com/)
* [Travis CI](https://travis-ci.org/)
* [Github Account for John Munsch](https://github.com/JohnMunsch)
* [Continuous Delivery](https://en.wikipedia.org/wiki/Continuous_delivery)

## Video 7.2

### Links Mentioned in the Video
* [Github Help](https://help.github.com/)

## Video 7.3

`ansible-playbook -i hosts -b configure.yml`

### Ansible
* [Ansible](http://www.ansible.com/)
* [Ansible Installation](http://docs.ansible.com/ansible/intro_installation.html)

### Links Mentioned in the Video
* [Puppet](https://puppetlabs.com/)
* [Chef](https://www.chef.io/)
* [Salt](http://saltstack.com/)

* [Idempotence](https://en.wikipedia.org/wiki/Idempotence)

* [DigitalOcean](https://www.digitalocean.com/?refcode=aa6133d36219) - Inexpensive hosting I've used successfully in the past. Consult the _lowendbox_ link below for alternatives.
* [ServerScope](https://serverscope.io/) - Helps you benchmark your Linux servers.
* [Setting up SSH Keys on DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-digitalocean-droplets)
* [lowendbox](http://lowendbox.com/) - A resource for lists of hosting providers, news about them, and a source for discount codes.

## Video 7.4

`ansible-playbook ping.yml`

`ansible-playbook deploy.yml`

### More Ansible Links
* [Ansible Galaxy](https://galaxy.ansible.com/) - A repository for shared Ansible roles and playbooks.
* [Ansible Modules Index](http://docs.ansible.com/ansible/modules_by_category.html) - Note: This is not the entire universe of modules, many are available from third parties. So be sure to search if you can't find an Ansible module for what you need.

## Video 7.5

`vagrant up`

`ansible-playbook -i testhosts -b configure.yml deploy.yml`

[Vagrant Server](http://localhost:3141)

### VirtualBox
* [VirtualBox](https://www.virtualbox.org/)

### Vagrant
* [Vagrant](http://www.vagrantup.com)

## Further Learning

### ES6/ES2015
* [ES6 Katas](http://es6katas.org/) - One of my favorite ways to start learning ES6 is to be forced to put it to immediate use. This site has 70+ pages worth of unit tests which are all broken. You'll correct the ES6 JavaScript code to fix those tests and in the process learn lots about using it.
