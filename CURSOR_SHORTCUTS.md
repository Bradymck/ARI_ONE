# Cursor IDE Shortcuts

## Opening WSL Terminal
- `Ctrl+Alt+E` - Open WSL in project directory
- `Ctrl+Alt+U` - Open WSL terminal

## Running Characters
Once in WSL terminal:
```bash
# Install dependencies (first time or after updates)
pnpm i

# Start with default Eliza character
pnpm start

# Start with ARI character
pnpm start --characters="characters/ari.character.json"
```

## Character Information
1. Default Character (when using just `pnpm start`):
   - Name: Eliza
   - Location: `packages/core/src/defaultCharacter.ts`
   - Traits: Casual, intelligent, no emojis, natural conversation

2. ARI Character:
   - Location: `characters/ari.character.json`
   - Start with: `pnpm start --characters="characters/ari.character.json"`

## AI Commands
- `/fix` - Fix code issues
- `/doc` - Generate documentation
- `/test` - Generate tests
- `/explain` - Explain code
- `/refactor` - Refactor code

## Alternative Method
1. Press `Ctrl+Shift+P`
2. Type "Tasks: Run Task"
3. Choose:
   - "Start Eliza" - Opens WSL in project directory
   - "Open Ubuntu" - Opens WSL terminal