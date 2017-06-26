# ng4-fb-af-bs-ngx-project

1.  Create new Angular4 app
    >ng new bootstrap-manip
    >cd to bootstrap-manip
    
2.  Install firebase, angularfire2 and ngx-bootstrap
    >ngm install firebase angularfire2@next ngx-bootstrap@next —save

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

7.  Add header, footer, home, login-required, not-found, and logged-in components

8. ng serve to test application
