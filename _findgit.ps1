$log = 'C:\Users\Leadshield\Documents\GitHub\site\_findgit.log'
$paths = @(
  'C:\Program Files\Git\bin\git.exe',
  'C:\Program Files\Git\cmd\git.exe',
  'C:\Program Files (x86)\Git\bin\git.exe',
  'C:\Program Files (x86)\Git\cmd\git.exe',
  "$env:LOCALAPPDATA\Programs\Git\bin\git.exe",
  "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe",
  'C:\Git\bin\git.exe',
  'C:\Git\cmd\git.exe'
)
"" | Out-File $log -Encoding ASCII
foreach ($p in $paths) {
  "$p = $(Test-Path $p)" | Out-File $log -Append -Encoding ASCII
}
"PATH=$env:PATH" | Out-File $log -Append -Encoding ASCII
