$log = 'C:\Users\Leadshield\Documents\GitHub\site\_verify.log'
$git = 'C:\Program Files\Git\cmd\git.exe'
$out = 'C:\Users\Leadshield\Documents\GitHub\site\_o.txt'
$err = 'C:\Users\Leadshield\Documents\GitHub\site\_e.txt'
Start-Process -FilePath $git -ArgumentList @('show','--stat','0acb873') -Wait -NoNewWindow -WorkingDirectory 'C:\Users\Leadshield\Documents\GitHub\site' -RedirectStandardOutput $out -RedirectStandardError $err
Get-Content $out -Raw | Out-File $log -Encoding ASCII
