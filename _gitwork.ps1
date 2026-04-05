Set-Location 'C:\Users\Leadshield\Documents\GitHub\site'
$log = 'C:\Users\Leadshield\Documents\GitHub\site\_gitwork3.log'
$git = 'C:\Program Files\Git\cmd\git.exe'
$tmpOut = 'C:\Users\Leadshield\Documents\GitHub\site\_out.txt'
$tmpErr = 'C:\Users\Leadshield\Documents\GitHub\site\_err.txt'

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

RunGit @('status','-s') 'status before'

$files = @(
  'compliance-guide.html','missed-call-textback.html','insurance-basics.html','comparison.html','website-templates-guide.html',
  'sitemap.xml',
  'about.html','automations.html','contact.html','crm.html','faq.html',
  'guide-automations.html','guide-calendar.html','guide-contacts.html','guide-dashboard.html','guide-forms.html','guide-pipelines.html','guides.html',
  'index.html','packages.html','process.html','services.html','templates.html',
  'insurance-crm-california.html','insurance-crm-florida.html','insurance-crm-michigan.html','insurance-crm-new-jersey.html','insurance-crm-new-york.html','insurance-crm-pennsylvania.html'
)

$addArgs = @('add') + $files
RunGit $addArgs 'add'

RunGit @('diff','--cached','--stat') 'staged'

$msgFile = 'C:\Users\Leadshield\Documents\GitHub\site\_msg.txt'
$msg = @"
Add 5 learn pages: compliance guide, missed call text-back, insurance basics, comparison, template guide

New pages built from internal agency docs:
- compliance-guide.html: TCPA and CAN-SPAM rules, consent templates, opt-out handling, setup checklist
- missed-call-textback.html: the problem, how the automation works, ROI math, SMS scripts, what ships with every tier
- insurance-basics.html: plain-English glossary, 5 lines of business, agent types, 8 CRM metrics to watch
- comparison.html: DIY vs. generic marketing agency vs. Agent Lead Engine with a full side-by-side table
- website-templates-guide.html: all 9 templates compared, 4-question selection quiz, customization scope, ownership terms

Expanded the LEARN dropdown nav on existing pages to link the new content and updated sitemap.xml.
"@
[IO.File]::WriteAllText($msgFile, $msg)

RunGit @('commit','-F',$msgFile) 'commit'
RunGit @('push','origin','main') 'push'
RunGit @('log','--oneline','-3') 'head'
RunGit @('rev-parse','HEAD') 'rev'

"DONE" | Out-File $log -Append -Encoding ASCII
