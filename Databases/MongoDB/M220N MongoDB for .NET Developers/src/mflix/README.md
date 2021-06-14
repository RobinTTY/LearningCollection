All of the Mflix functionality -- frontend and backend -- is contained within the M220N solution. You can open the solution by double-clicking the M220N.sln file. The solution contains 3 projects:

- M220N contains both the frontend and backend code.
  - Frontend: All the UI functionality, which includes the built-in React application, is already implemented for you. It requires NodeJS, which you may need to install.
  - Backend: An ASP.NET project that provides the necessary backend to the application. It has been tested in Visual Studio Community 2019 on both Windows 10 and Mac OS (Catalina).
  - Most of the code that you will implement is in the Repositories folder of the M220N project.
- M220NTests contains all of the unit tests. The unit tests in this project test both the APIs and the database access methods directly.
- Migrator is a console app that you will complete in Chapter 4.