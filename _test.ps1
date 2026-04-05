$log = 'C:\Users\Leadshield\Documents\GitHub\site\_test.log'
$git = 'C:\Program Files\Git\cmd\git.exe'
"start" | Out-File $log -Encoding ASCII
$v = & $git --version 2>&1
"version=$v" | Out-File $log -Append -Encoding ASCII
Set-Location 'C:\Users\Leadshield\Documents\GitHub\site'
$s = & $git status -s 2>&1 | Out-String
"status=[$s]" | Out-File $log -Append -Encoding ASCII
$l = & $git log --oneline -3 2>&1 | Out-String
"log=[$l]" | Out-File $log -Append -Encoding ASCII
$h = & $git rev-parse HEAD 2>&1 | Out-String
"head=[$h]" | Out-File $log -Append -Encoding ASCII
"done" | Out-File $log -Append -Encoding ASCII
