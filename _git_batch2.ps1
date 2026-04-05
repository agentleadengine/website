Set-Location 'C:\Users\Leadshield\Documents\GitHub\site'
$log = 'C:\Users\Leadshield\Documents\GitHub\site\_git_batch2.log'
$git = 'C:\Program Files\Git\cmd\git.exe'
$tmpOut = 'C:\Users\Leadshield\Documents\GitHub\site\_o2.txt'
$tmpErr = 'C:\Users\Leadshield\Documents\GitHub\site\_e2.txt'

function RunGit($argList, $label) {
  Start-Process -FilePath $git -ArgumentList $argList -Wait -NoNewWindow -WorkingDirectory 'C:\Users\Leadshield\Documents\GitHub\site' -RedirectStandardOutput $tmpOut -RedirectStandardError $tmpErr
  "--- $label ---" | Out-File $log -Append -Encoding ASCII
  $o = Get-Content $tmpOut -Raw -ErrorAction SilentlyContinue
  $e = Get-Content $tmpErr -Raw -ErrorAction SilentlyContinue
  if ($o) { "STDOUT: $o" | Out-File $log -Append -Encoding ASCII }
  if ($e) { "STDERR: $e" | Out-File $log -Append -Encoding ASCII }
}

Remove-Item 'C:\Users\Leadshield\Documents\GitHub\site\.git\index.lock' -Force -ErrorAction SilentlyContinue
"start" | Out-File $log -Encoding ASCII

RunGit @('add','-A') 'add'
RunGit @('diff','--cached','--stat') 'staged'

$msgFile = 'C:\Users\Leadshield\Documents\GitHub\site\_msg2.txt'
$msg = @"
Add batch 2: 10DLC SMS, integrations, week by week, case studies

New pages:
- 10dlc-sms-registration.html: A2P 10DLC brand and campaign registration, carrier enforcement timeline, opt in language templates, carrier fees
- integrations.html: native integrations (Gmail, Outlook, calendars, Facebook, Stripe, QB, Zapier), AMS compatibility table (EZLynx, HawkSoft, Applied Epic, AMS360, NowCerts), carrier rater tools, honest gaps
- how-it-works-week-by-week.html: Day 0 kickoff through Day 60 performance review, onboarding checklist, HowTo schema
- case-studies.html: three anonymized agency case studies with before/after numbers, patterns table

Added Integrations link to SERVICES nav dropdown across all pages. Updated sitemap with 4 new URLs.
"@
[IO.File]::WriteAllText($msgFile, $msg)

RunGit @('commit','-F',$msgFile) 'commit'
RunGit @('push','origin','main') 'push'
RunGit @('rev-parse','HEAD') 'rev'
RunGit @('log','--oneline','-3') 'head'
"DONE" | Out-File $log -Append -Encoding ASCII
