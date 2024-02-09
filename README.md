# Poc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# NOTES


## Creating and building structure of webApp and implement routing

1. Initially created new angular app using cli with command
`ng new poc`

2. After that added bootstrap in style of angular.json
`node_modules/bootstrap/dist/css/bootstrap.min.css`

3. After that created several components including login, home, header, movie, etc using command
`ng g c component_name`

4. After that open app.rounting.module.ts to configure things.
Inside routes array add the routes
`{path:'login', component:LoginComponent}` It means when the path is login then open the LoginComponet
`{path:'', redirectTo:'login', pathMatch:'full'},` It means when there is no path, then redirect to login path and fully match the path.
`{path:'**', component:LoginComponent}` It means show login component as well when none of the above path matches. Remember it should be the last route always.

7. Now we have informed angular what to do when meets its routes, but we haven't defined where to resolve the routes. Othervise it will not change the html.
In order to do that, go to app.component.html and add router outler
`<router-outlet></router-outlet>`

## Designing HTML page and writing css for login page

8. Now start writing html and css for login page

9. Now we haven't set the database yet, we can hardcode it and get the password using databinding concept.
`[(ngModel)]="username"`
Now in  order to use ngModel
firstly import `FormsModule` in the app.module.ts

10. Now use event binding to add click event in form button and call function login
`(click)="login()"`

Now when validation is passed then we need to route user to homepage
11. But we can make use of service to group all the authentication related functions and keep it in a single place.
So, create folder named services in src>app
Now using cli, write command to create auth service
`ng g s services/auth` means create auth service in the folder named service.

12. In the auth.service.ts create a function login which accepts both username and password.
After making that, in login component invoke the function auth service. For that firstly inject the AuthService in constructor of login component and then use it in the component.
Also inject router in costructor of login componet to use it and after that use syntax
`if(res===200){
    this.router.navigate(['home'])
}`

## Designing Header Componet, bcz it will be common in both home and movie page

- Before that add `<app-header></app-header>` in both home and movie page, because it will be used at both the places.
13. After writing html codes, add click event in logo and logout to redirect after clicking
ex- `(click)="goToHome()"`

14. After adding click event, write funtion for those events in ts file of header.
for doing that we need navigate method, for that we need to again Router in constructor.

15. Also for implementing logout we need to inject auth service in constructor and call logout. Also create that logout function in auth service.
`We sometimes call the logout api of that system to invalidate that token or sometimes we clear the locally stored authentication information like token, etc. and then route back user to the login page.`
But here as we have already mocked up the authentication process, we can simply route to login page.

## Building HomePage Design

16. Now after creating homepage and designing skeleton, since we don't have data. We can mockup data using json in assets folder. Create data folder inside assets folder and move json there.

17. Now to fetch those data from json file, in ts file of home, create `getTrendingMovies()` function and call the function in ngOnInit hook. Inside that function use http client to get the json, for that we need to inject `HttpClient` on homepage in constructor also import the same from `@angular/common/http` and import `HttpClientModule` in app.module.ts.

18. Now `trendingMovies` that have been obtained through http, bind this with the html. Do this using for loop in movie div, after that inside the cover div use img tag and use property binding to bind the source and replace the name and rating with actual name and rating.

19. For displaying rating in better way we need to install ng bootstrap liabrary
`npm i @ng-bootstrap/ng-bootstrap`
After that we need to import the module in app.module.ts
However we're skipping this step, since it's more related to styling

20. Now we need to add routing to movie page so create `goToMovie()`
Now in order to route to particular path , in app-routing module write like this
`path:'movie/:type/:id'`
Now if we click at any banner, it will take at the routed address.

## Building Movie page Design
No Notes


## Pipes in Angular
Sometimes we need to format the data to specific format before displaying it to the end users. That's done using pipes. Example suppose date is coming from backend like 16032023, we have to dsiplay it like 16-March-2023. So it can be done using pipes in angular.
Angular provides several built in pipes, also we can create custom pipes as well based on requirement.


## Standalone components
so far we used to create components using `ng g c component_name`, it created components and also it gets declared inside app.module automatically. Means without declaration of module we were not able to use that component.
But now standalone component eliminates that problem. CLI cmd to generate standalone component is
`ng g c component_name --standalone`
So, this will also work like old component. 

