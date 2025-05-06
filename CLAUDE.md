# Development Guidelines for Resume Project

## Build & Test Commands
- Build/Generate PDF: `pnpm build` or `make build`
- Run tests: `pnpm test`
- Run single test: `NODE_ENV="test" node --no-warnings --require "ts-node/register" --test utils/generatePdf.test.ts`
- Format code: No formatter configured, consider adding Prettier

## Code Style Guidelines
- **Imports**: Node.js native modules first, then project imports
- **Types**: Use TypeScript strict mode with explicit error typing (e.g., `error: any`)
- **Naming**: camelCase for variables/functions, PascalCase for classes
- **Error Handling**: Use try/catch blocks, log errors with logger, rethrow when needed
- **Logging**: Use Pino logger with named contexts (e.g., `getLogger("MAIN")`)
- **File Structure**: Utility functions in `/utils` directory
- **Async**: Use async/await pattern with proper error handling

## Project Specifics
- Node.js >= 20.5.0 required
- Package manager: pnpm 9.15.2+
- Test framework: Node.js built-in test module