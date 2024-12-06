# Cursor IDE Quick Reference
Run ARI:
   pnpm start --characters="characters/ari.character.json"

## Keyboard Shortcuts

### Project Shortcuts
- `Ctrl+Shift+E` - Start Eliza (installs dependencies and starts app)
- `Ctrl+Shift+U` - Open Ubuntu Terminal

### AI Commands
- `/fix` - Fix code issues
- `/doc` - Generate documentation
- `/test` - Generate tests
- `/explain` - Explain code
- `/refactor` - Refactor code
- `Ctrl+Shift+/` - Chat inline
- `Ctrl+Shift+A` - Generate tests

### Command Palette
1. Press `Ctrl+Shift+P`
2. Type "Tasks: Run Task"
3. Choose:
   - "Start Eliza" - Full startup
   - "Open Ubuntu" - WSL terminal

## WSL Integration
- Project Path: `/mnt/c/Users/Brady/eliza_ari/eliza`
- All build/start commands run in WSL
- Code editing done in Windows

## Common Tasks
1. Start Project:
   - Use `Ctrl+Shift+E` or
   - Command Palette → "Start Eliza"

2. Access Terminal:
   - Use `Ctrl+Shift+U` or
   - Command Palette → "Open Ubuntu"

3. Get AI Help:
   - Use `/` commands in editor
   - `Ctrl+Shift+/` for inline chat