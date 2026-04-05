Set-Location 'C:\Users\Leadshield\Documents\GitHub\site'
$log = 'C:\Users\Leadshield\Documents\GitHub\site\_git_batch1.log'
$git = 'C:\Program Files\Git\cmd\git.exe'
$tmpOut = 'C:\Users\Leadshield\Documents\GitHub\site\_o1.txt'
$tmpErr = 'C:\Users\Leadshield\Documents\GitHub\site\_e1.txt'

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

$files = @(
  'speed-to-lead.html','ai-receptionist.html','roi-calculator.html','guarantee.html',
  'sitemap.xml',
  'about.html','automations.html','comparison.html','compliance-guide.html','contact.html',
  'crm.html','faq.html','guide-automations.html','guide-calendar.html','guide-contacts.html',
  'guide-dashboard.html','guide-forms.html','guide-pipelines.html','guides.html',
  'index.html','insurance-basics.html','insurance-crm-california.html','insurance-crm-florida.html',
  'insurance-crm-michigan.html','insurance-crm-new-jersey.html','insurance-crm-new-york.html',
  'insurance-crm-pennsylvania.html','missed-call-textback.html','packages.html','process.html',
  'services.html','templates.html','website-templates-guide.html'
)
$addArgs = @('add') + $files
RunGit $addArgs 'add'
RunGit @('diff','--cached','--stat') 'staged'

$msgFile = 'C:\Users\Leadshield\Documents\GitHub\site\_msg1.txt'
$msg = @"
Add 4 conversion pages: speed to lead, AI receptionist, ROI calculator, guarantee

New pages:
- speed-to-lead.html: the 5 minute rule, conversion stats, sub 60 second automation stack, SMS timing waterfall
- ai-receptionist.html: 24/7 AI voice agent, qualification flow, live transfer, sample call script, honest limitations
- roi-calculator.html: interactive calculator with live inputs for leads, close rate, premium, commission, speed to lead lift, plan tier, payback period
- guarantee.html: 30 day satisfaction refund, month to month terms, cancellation policy, full data export on offboarding

Expanded SERVICES nav with AI Receptionist, LEARN nav with Speed to Lead, ROI Calculator, and Guarantee. Updated sitemap.xml.
"@
[IO.File]::WriteAllText($msgFile, $msg)

RunGit @('commit','-F',$msgFile) 'commit'
RunGit @('push','origin','main') 'push'
RunGit @('rev-parse','HEAD') 'rev'
RunGit @('log','--oneline','-3') 'head'
"DONE" | Out-File $log -Append -Encoding ASCII
