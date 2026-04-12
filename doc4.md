AGENT LEAD ENGINE

Snapshot Deployment Guide

CONFIDENTIAL

TABLE OF CONTENTS

1\. OVERVIEW

2\. PRE-DEPLOYMENT CHECKLIST

3\. STEP-BY-STEP DEPLOYMENT

4\. POST-DEPLOYMENT VERIFICATION

5\. CLIENT CUSTOMIZATION

6\. MULTI-LINE CLIENTS

7\. TROUBLESHOOTING

8\. SNAPSHOT VERSIONING

SECTION 1: OVERVIEW

What is a Snapshot?

A snapshot is a pre-built template containing all CRM components for a
line of business. It includes everything needed to start serving clients
immediately upon deployment.

When We Deploy

We deploy a snapshot every time a new client signs up to the Agent Lead
Engine platform. The deployment process is automated through the CRM
and typically completes within minutes.

What\'s Inside Each Snapshot

Each snapshot contains the following pre-configured components:

- Pipeline with industry-specific stages

- Tags for lead categorization and workflow triggers

- Workflows for automated lead nurturing and follow-up

- Funnels with landing pages and lead capture forms

- Dashboards with key performance metrics

- Calendars for appointment scheduling and team availability

- Custom fields for tracking industry-specific data

- Intake forms for comprehensive lead qualification

Current Snapshots Available

The following snapshots are ready for deployment:

- ALE - Personal Lines v1.0 - April 2026 (73 assets)

- ALE - Commercial Lines v1.0 - April 2026 (75 assets)

- ALE - Life Insurance v1.0 - April 2026 (77 assets)

- ALE - Medicare & ACA v1.0 - April 2026 (73 assets)

- ALE - Final Expense v1.0 - April 2026 (72 assets)

SECTION 2: PRE-DEPLOYMENT CHECKLIST

Before creating the sub-account, ensure the following items are
completed:

Confirm client\'s selected tier and line of business

Have all client information ready (name, email, phone, address,
timezone)

Confirm payment has been collected

Identify which snapshot to deploy

If multi-line client: you will need one sub-account per line of business

SECTION 3: STEP-BY-STEP DEPLOYMENT

Follow these detailed steps to deploy a snapshot to a new client:

Navigate to the Agency dashboard (not a sub-account)

Go to Sub-Accounts in the sidebar

Click \'Create Sub-Account\' or \'Add Sub-Account\'

Fill in client information:

Business Name: \[Client Agency Name\]

Email: \[client email\]

Phone: \[client phone\]

Address: \[client address\]

Country: Type \'United States\' in the search box inside the dropdown
(this is important, the dropdown is very long)

Timezone: Select the client\'s timezone

When prompted for a snapshot/template, select the appropriate one:

Personal Lines: \'ALE - Personal Lines v1.0 - April 2026\'

Commercial Lines: \'ALE - Commercial Lines v1.0 - April 2026\'

Life Insurance: \'ALE - Life Insurance v1.0 - April 2026\'

Medicare & ACA: \'ALE - Medicare & ACA v1.0 - April 2026\'

Final Expense: \'ALE - Final Expense v1.0 - April 2026\'

Click Create. Wait for the sub-account to finish building.

CRITICAL: Assign the team member at the AGENCY level

Go to Agency Dashboard \> Settings \> Team

Find the team member (Samuel Ochoa)

Assign them to the new sub-account

This is REQUIRED for calendars to work

SECTION 4: POST-DEPLOYMENT VERIFICATION

After deployment, switch to the new sub-account and verify each
component:

Pipeline Check

- Go to Settings \> Opportunities & Pipelines

- Verify the correct pipeline exists with all stages

- Personal Lines: 7 stages, Commercial: 8, Life: 8, Medicare: 7, Final
  Expense: 9

Tag Check

- Go to Settings \> Tags

- Verify all tags loaded (Personal: 17, Commercial: 14, Life: 14,
  Medicare: 14, Final Expense: 13)

Workflow Check

- Go to Automation \> Workflows

- Verify all workflows are present AND published (look for green
  Published toggle)

- If any are in Draft, toggle them to Published and save

Dashboard Check

- Go to Dashboards

- Verify dashboard loaded with widgets

- Verify dashboard is NOT private (three-dot menu \> Manage permissions
  \> Private Dashboard toggle OFF)

Funnel Check

- Go to Sites \> Funnels

- Verify funnel exists with landing page and thank you page

- Click Edit to verify form fields are present

Calendar Check

- Go to Settings \> Calendar Settings

- Verify calendar exists (will show as Inactive until team member is
  assigned)

- After team member assignment, verify it becomes Active

Custom Fields Check

- Go to Settings \> Custom Fields

- Verify all module-specific custom fields loaded

Intake Form Check

- Go to Sites \> Forms

- Verify the intake form exists with all fields

SECTION 5: CLIENT CUSTOMIZATION

After verification, customize the sub-account for the specific client:

Update the location details (phone, email, address) in Settings \>
Business Profile

Update calendar availability to match client\'s business hours

Update the funnel landing page with client-specific branding if needed

Test the full lead flow: submit a test form, verify tag is applied,
verify opportunity is created, verify auto-reply fires

Send a test calendar booking to verify it works

Delete the test contact after verification

SECTION 6: MULTI-LINE CLIENTS

For clients who sell multiple lines of insurance:

- Create one sub-account per line of business

- Each sub-account gets its own snapshot

- The client will have separate login access for each

- Example: an agency selling personal and commercial insurance gets two
  sub-accounts: \[Agency Name\] - Personal Lines and \[Agency Name\] -
  Commercial Lines

SECTION 7: TROUBLESHOOTING

Common issues and fixes:

Calendar shows Inactive

Team member not assigned at agency level. Fix: Agency \> Settings \>
Team \> assign.

Workflows in Draft mode

Toggle to Published and save. Check window width is 1280px+.

Dashboard is Private

Three-dot menu \> Manage permissions \> turn OFF Private Dashboard
toggle.

Country dropdown won\'t work

Type \'United States\' in the search field inside the dropdown.

Missing custom fields

Check Settings \> Custom Fields \> Folders tab. Fields may be inside a
folder.

Funnel forms not submitting

Verify the Form Submission workflow trigger matches the form name.

SECTION 8: SNAPSHOT VERSIONING

Current Version

v1.0 (created March 29, 2026)

When to Create a New Version

Create a new version after major CRM changes such as new workflows, new
fields, or updated automations.

How to Create a New Version

- Agency \> Account Snapshots \> Create Snapshot

- Name with version number

- Select sub-account

- Check all assets

- Click Create

Naming Convention

Use the format: ALE - \[Module\] v\[X.X\] - \[Month Year\]

Always test new snapshots in a test sub-account before deploying to
clients.

Delete test sub-accounts after verification (Sam must do this manually).
