$log = 'C:\Users\Leadshield\Documents\GitHub\site\_test2.log'
$git = 'C:\Program Files\Git\cmd\git.exe'
"start" | Out-File $log -Encoding ASCII
Start-Process -FilePath $git -ArgumentList '--version' -Wait -NoNewWindow -RedirectStandardOutput 'C:\Users\Leadshield\Documents\GitHub\site\_v.txt' -RedirectStandardError 'C:\Users\Leadshield\Documents\GitHub\site\_ve.txt'
$v = Get-Content 'C:\Users\Leadshield\Documents\GitHub\site\_v.txt' -Raw
"version=[$v]" | Out-File $log -Append -Encoding ASCII
"done" | Out-File $log -Append -Encoding ASCII
