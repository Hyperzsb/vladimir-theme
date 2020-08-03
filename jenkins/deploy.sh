#!/bin/bash
# Start
echo "# Executing deploy.sh..."
# Before deploy check
echo "# - Before deploy checking..."
work_directory="/home/admin/github/vladimir-theme"
deploy_directory="/var/www/vladimir-theme"
echo "# - Work directory is: $work_directory"
echo "# - Deploy directory is: $deploy_directory"
if [ -d $deploy_directory ] ; then
  echo "# - - Deploy directory \"$deploy_directory\" already exists"
else
  echo "# - - Deploy directory \"$deploy_directory\" not exists, creating it..."
  mkdir $deploy_directory
fi
echo "# - Check completed"
# Deploy
echo "# - Start deploying..."
if cp -R $work_directory/dist/* $deploy_directory ; then
  echo "# - - Deploy succeeded!"
  exit_code=0
else
  echo "# - - Deploy failed!"
  exit_code=1
fi
# Exit
echo "# Exit deploy.sh"
exit $exit_code
