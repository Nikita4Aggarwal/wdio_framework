/*

Author : Nikita Aggarwal
Created On: 22 June'22
Project: WDIO Framework Assignment

*/

This contains:
1) Test Suites -> "e2etest" and "functionaltest"
2) e2etest suite contains -> 
             a) forgotPassword.test.js   -> This is end-to-end test for "forgot password" functionality
             b) homeE2E.test.js          -> This is end-to-end test for patient login, following consultation and finally logout
3) functionaltest suite contains ->
             a) login.test.js            -> This covers few tests to verify login to patient site
             b) medicalProfile.test.js   -> This covers tests to verify updating Medical profile

Run tests ->
npx wdio run wdio.conf.js --suite e2etest
npx wdio run wdio.conf.js --suite functionaltest

or run individual test using ->
npx wdio run wdio.conf.js --spec medicalProfile.test.js
npx wdio run wdio.conf.js --spec login.test.js 
npx wdio run wdio.conf.js --spec homeE2E.test.js
npx wdio run wdio.conf.js --spec forgotPassword.test.js


/*
Thanks!!
*/

