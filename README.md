# ng4-fb-af-bs-ngx-project

This project is designed to provide simple boilerplate to quickly create a working Angular 4 project that is Firebase enabled, utilizes Twitter Bootstrap, Font-Awesome, AngularFire, and Angular-Bootstrap.

System Requirements:
Angular CLI - Installation instructions here: https://github.com/angular/angular-cli#installation
An IDE like Visual Studio Code or Atom 

1.  Create new Angular4 app
    From the command line:
      >ng new your-app
      >cd your-app
    
2.  Install firebase, angularfire2 and ngx-bootstrap
    From a command line in the your-app folder
    >ngm install firebase angularfire2@next ngx-bootstrap@next --save

3.  Open project in IDE

4.  Add src/index.html
    —OR—
    Add bootstrap and font-awesome css via CDN to project from within Atom
    Bootstrap: http://getbootstrap.com/getting-started/
    Font-Awesome: https://www.bootstrapcdn.com/fontawesome/
                  -select HTML for copy
    Copy CDN links to src/app/index.html within <head></head>

5.  Update src/environments/environment.ts for your Firebase info

6.  Add src/app/app-routing.module.ts
    Add src/app/auth.service.ts
    Add src/app/auth-guard.service.ts
    Add src/app/app.component.html
    Add src/app/app.component.ts
    Add src/app/app.module.ts

7.  Add header, footer, home, login-required, not-found, and logged-in components from the attached files to your project utilizing the same paths

8. ng serve to test application
