import os, glob
root = r'C:\Users\Leadshield\Documents\GitHub\site'
# Use relative equivalent: we're running from sandbox so use unix path
root = '/sessions/lucid-relaxed-cray/mnt/site'

OLD_LEARN = '''                        <ul class="dropdown-menu">
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="guides.html">CRM Guides</a></li>
                            <li><a href="insurance-basics.html">Insurance Basics</a></li>
                            <li><a href="compliance-guide.html">Compliance Guide</a></li>
                            <li><a href="comparison.html">Comparison</a></li>
                            <li><a href="about.html">About Us</a></li>
                        </ul>'''

NEW_LEARN = '''                        <ul class="dropdown-menu">
                            <li><a href="speed-to-lead.html">Speed to Lead</a></li>
                            <li><a href="roi-calculator.html">ROI Calculator</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="guides.html">CRM Guides</a></li>
                            <li><a href="insurance-basics.html">Insurance Basics</a></li>
                            <li><a href="compliance-guide.html">Compliance Guide</a></li>
                            <li><a href="comparison.html">Comparison</a></li>
                            <li><a href="guarantee.html">Guarantee</a></li>
                            <li><a href="about.html">About Us</a></li>
                        </ul>'''

OLD_SERVICES = '''                        <ul class="dropdown-menu">
                            <li><a href="services.html">Overview</a></li>
                            <li><a href="crm.html">CRM</a></li>
                            <li><a href="automations.html">Automations</a></li>
                            <li><a href="templates.html">Templates</a></li>
                        </ul>'''

NEW_SERVICES = '''                        <ul class="dropdown-menu">
                            <li><a href="services.html">Overview</a></li>
                            <li><a href="crm.html">CRM</a></li>
                            <li><a href="automations.html">Automations</a></li>
                            <li><a href="ai-receptionist.html">AI Receptionist</a></li>
                            <li><a href="templates.html">Templates</a></li>
                        </ul>'''

changed = []
for path in sorted(glob.glob(os.path.join(root, '*.html'))):
    with open(path, 'rb') as f:
        raw = f.read()
    text = raw.decode('utf-8')
    orig = text
    text = text.replace(OLD_LEARN, NEW_LEARN)
    text = text.replace(OLD_SERVICES, NEW_SERVICES)
    if text != orig:
        # preserve LF line endings
        with open(path, 'wb') as f:
            f.write(text.encode('utf-8'))
        changed.append(os.path.basename(path))
print("CHANGED", len(changed))
for c in changed: print(c)
