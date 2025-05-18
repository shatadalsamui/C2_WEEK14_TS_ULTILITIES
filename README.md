# TypeScript Utilities & Validation Demo

## Project Overview

Practical examples of TypeScript utility types (`Pick`, `Exclude`, `Record`, `Readonly`) and Zod schema validation with Express.js integration

## Project Description

This TypeScript learning project demonstrates:

### Core Features
- **TypeScript Utility Types**:
  - Practical examples of `Pick`, `Exclude`, `Record`, and `Readonly`
  - Type manipulation and narrowing techniques
  - Map and interface implementations

- **Schema Validation**:
  - Zod library for runtime validation
  - Type inference from schemas
  - Email validation and custom error messages

- **Express.js Integration**:
  - Type-safe request handling
  - Basic API endpoint setup

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- TypeScript (installed globally or as dev dependency)

### Installation
1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Compile TypeScript:
```bash
npm run build
```

### Development
To run in development mode with automatic recompilation:
```bash
npm run dev
```

## Project Structure
- `src/` - Main source files
  - `index.ts` - Entry point
  - `sample.ts` - Example module
- `dist/` - Compiled JavaScript output
- `tsconfig.json` - TypeScript configuration

## Configuration
Key configuration options (from tsconfig.json):
- Target: ES2016
- Module: CommonJS
- Strict type checking enabled
- Source files in `./src`
- Output files in `./dist`

## Scripts
Check `package.json` for available npm scripts