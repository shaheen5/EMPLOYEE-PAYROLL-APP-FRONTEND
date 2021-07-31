#!/bin/bash -x

cd /home/ubuntu/Employee_Payroll_App_FrontEnd
working_directory=$(pwd)
echo "Present working directory = $working_directory"
pm2 delete 0
npm i 
echo "Installing packages"
npm run build
echo "build success!"
pm2 --name Employee_Payroll_App_FrontEnd start npm -- start