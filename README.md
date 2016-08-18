# **Simple Dashboard**
by [Murilo Parente]

I've been looking panels with easy implementations and structure, to my surprise, I didn't found.
I did this to learn a little more of AngularJS, and also to help the community.

# [DEMO]

# Install
```
$ npm install
$ bower install
```

# Changing Colors
Open /resources/less/bootstrap/variables.less
```
@brand-primary: <PRIMARY COLOR>;
@brand-success: <SECONDARY COLOR>;
```

# Run
```
$ gulp
```

# Structure (resources/)
 - app.js - Attach all parties in a single module.
 - app.config.js - Global Configurations and Interceptors
 - js/home/ - Home controllers, routers and services
 - js/dashboard/ - Dashboard controllers, routers and services
 - views/home/ - Home views
 - views/user/ - Dashboard views
 - less/ - Style (compile all in css/app.css)

[Murilo Parente]: http://www.muriloparente.com
[DEMO]: https://murilopl.github.io/SimpleDashboard/
