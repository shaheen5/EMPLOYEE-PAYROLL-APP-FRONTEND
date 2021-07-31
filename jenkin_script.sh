#!/bin/bash -x

cd /home/ubuntu/Employee_Payroll_App_FrontEnd
working_directory=$(pwd)
echo "Present working directory = $working_directory"
npm i 
echo "Installing packages"
npm run build
echo "build success!"
npx kill-port 3000
npm start