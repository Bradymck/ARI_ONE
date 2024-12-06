# Personal Setup Notes for Eliza

## Complete Setup Guide

### 1. Initial WSL Setup
1. Install WSL 2 from PowerShell (Admin):

```powershell
wsl --install
```
2. Fix WSL DNS issues:
   - Edit `/etc/wsl.conf`:

```conf
[boot]
systemd=true

[network]
generateResolvConf = true
```
   - Restart WSL: `wsl --shutdown`

### 2. Repository Setup
1. Clone the repository in Windows:

```bash
git clone https://github.com/ai16z/eliza.git
```
2. Configure git remotes:

```bash
git remote rename origin upstream
git remote add origin https://github.com/Bradymck/ARI_ONE.git
```

### 3. Cursor IDE Setup
1. Create `.vscode/tasks.json`:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Start Eliza",
            "type": "shell",
            "command": "wsl -d Ubuntu -c 'cd /mnt/c/Users/Brady/eliza_ari/eliza && pnpm i && pnpm start'",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        },
        {
            "label": "Open Ubuntu",
            "type": "shell",
            "command": "wsl -d Ubuntu",
            "group": "test"
        }
    ]
}
```

2. Create `.vscode/keybindings.json`:

```json
[
    {
        "key": "ctrl+shift+e",
        "command": "workbench.action.tasks.runTask",
        "args": "Start Eliza"
    },
    {
        "key": "ctrl+shift+u",
        "command": "workbench.action.tasks.runTask",
        "args": "Open Ubuntu"
    }
]
```

### 4. WSL Development Environment
1. Update package list:

```bash
sudo apt update && sudo apt upgrade -y
```

2. Install Node.js and npm:

```bash
curl -fsSL https://deb.nodesource.com/setup_23.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Install pnpm:

```bash
sudo npm install -g pnpm
```

4. Navigate to project:

```bash
cd /mnt/c/Users/Brady/eliza_ari/eliza
```

5. Install dependencies:

```bash
pnpm install
```

## Environment Setup
- Windows with WSL Ubuntu
- Using Cursor IDE
- Repository: https://github.com/Bradymck/ARI_ONE.git

## Quick Start Commands

### Keyboard Shortcuts (Cursor IDE)
- `Ctrl+Shift+E` - Start Eliza
- `Ctrl+Shift+U` - Open Ubuntu Terminal

### Command Palette
1. Press `Ctrl+Shift+P`
2. Type "Tasks: Run Task"
3. Select either:
   - "Start Eliza" - Installs dependencies and starts the application
   - "Open Ubuntu" - Opens WSL Ubuntu terminal

## Task Configurations
Tasks are configured in `.vscode/tasks.json`:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Start Eliza",
            "type": "shell",
            "command": "wsl -d Ubuntu -c 'cd /mnt/c/Users/Brady/eliza_ari/eliza && pnpm i && pnpm start'",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        },
        {
            "label": "Open Ubuntu",
            "type": "shell",
            "command": "wsl -d Ubuntu",
            "group": "test"
        }
    ]
}
```

## Repository Management
- Original Repository (upstream): https://github.com/ai16z/eliza.git
- Your Fork (origin): https://github.com/Bradymck/ARI_ONE.git

### Git Remote Setup

```bash
# Check remotes
git remote -v

# Expected output:
# upstream    https://github.com/ai16z/eliza.git (fetch)
# upstream    https://github.com/ai16z/eliza.git (push)
# origin      https://github.com/Bradymck/ARI_ONE.git (fetch)
# origin      https://github.com/Bradymck/ARI_ONE.git (push)
```

## Development Workflow
1. Code editing: Done in Windows using Cursor IDE
2. Git operations: Performed in Windows
3. Running application: Executed in WSL Ubuntu
4. Dependencies: Managed through WSL Ubuntu using pnpm

## Troubleshooting
If WSL DNS issues occur:
1. Edit `/etc/wsl.conf`:

```conf
[boot]
systemd=true

[network]
generateResolvConf = true
```
2. Restart WSL from PowerShell (Admin):

```powershell
wsl --shutdown
```