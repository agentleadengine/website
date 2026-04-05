import os, glob, re

root = os.path.dirname(os.path.abspath(__file__))
changed = []

# Pattern: multi-line services dropdown missing integrations.html
# Look for <li><a href="ai-receptionist.html">AI Receptionist</a></li> followed (with whitespace) by <li><a href="templates.html">Templates</a></li>
# without integrations in between
for fp in glob.glob(os.path.join(root, '*.html')):
    with open(fp, 'r', encoding='utf-8', newline='') as f:
        c = f.read()
    # Check if already has integrations link in services dropdown context
    if '<li><a href="integrations.html">Integrations</a></li>' in c:
        continue
    # multi-line version (indented)
    pat_ml = re.compile(
        r'(<li><a href="ai-receptionist\.html">AI Receptionist</a></li>)(\s*)(<li><a href="templates\.html">Templates</a></li>)'
    )
    new_c, n = pat_ml.subn(r'\1\2<li><a href="integrations.html">Integrations</a></li>\2\3', c)
    if n > 0:
        with open(fp, 'w', encoding='utf-8', newline='') as f:
            f.write(new_c)
        changed.append(os.path.basename(fp))

print("CHANGED", len(changed))
for x in changed: print(" ", x)
