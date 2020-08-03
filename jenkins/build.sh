#!/bin/bash
# Start
echo "# Executing build.sh..."
work_directory="/home/admin/github/vladimir-theme"
echo "# - Work directory is: $work_directory"
# Build
echo "# - Start building..."
if docker run --rm -v $work_directory:/usr/src/app -w /usr/src/app node:latest sh -c "npm install && npm run build"; then
  echo "# - - Building succeeded!"
  exit_code=0
else
  echo "# - - Building failed!"
  exit_code=1
fi
# Post build check
echo "# - Files in \"$work_directory/dist\" are:"
ls  $work_directory/dist
# Exit
echo "# Exit build.sh"
exit $exit_code
