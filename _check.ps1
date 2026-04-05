$log = 'C:\Users\Leadshield\Documents\GitHub\site\_check2.log'
"PWD=$((Get-Location).Path)" | Out-File $log -Encoding ASCII
"GIT=$((Get-Command git -ErrorAction SilentlyContinue).Source)" | Out-File $log -Append -Encoding ASCII
"EXISTS=$(Test-Path 'C:\Users\Leadshield\Documents\GitHub\site\.git')" | Out-File $log -Append -Encoding ASCII
Set-Location 'C:\Users\Leadshield\Documents\GitHub\site'
"CD=$((Get-Location).Path)" | Out-File $log -Append -Encoding ASCII
"--- git log ---" | Out-File $log -Append -Encoding ASCII
& git log --oneline -5 2>&1 | Out-File $log -Append -Encoding ASCII
"--- git status ---" | Out-File $log -Append -Encoding ASCII
& git status 2>&1 | Out-File $log -Append -Encoding ASCII
"--- HEAD ---" | Out-File $log -Append -Encoding ASCII
& git rev-parse HEAD 2>&1 | Out-File $log -Append -Encoding ASCII
"--- remote ---" | Out-File $log -Append -Encoding ASCII
& git remote -v 2>&1 | Out-File $log -Append -Encoding ASCII
"DONE" | Out-File $log -Append -Encoding ASCII
