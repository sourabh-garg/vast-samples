# VAST Samples

A comprehensive collection of VAST (Video Ad Serving Template) XML samples implementing various versions of the VAST specification. This library provides ready-to-use TypeScript/JavaScript templates for video advertising integration.

## Features

- Sample implementations for VAST versions:
  - VAST 2.0
  - VAST 3.0
  - VAST 4.0
  - VAST 4.1
  - VAST 4.2
- Multiple ad types supported:
  - Linear ads with tracking events
  - Companion ads
  - Non-linear ads
  - Video click tracking
- Includes ad verification scripts
- Comprehensive tracking implementations
- TypeScript support with type definitions

## Installation

```bash
npm install vast-samples
```

## Usage

### Basic Example

```typescript
import { InlineLinearTagXMLString } from 'vast-samples';

// Use the VAST XML string directly
console.log(InlineLinearTagXMLString);
```

### Available Templates

The library provides several VAST XML templates for different use cases:

#### Linear Ads
```typescript
import { InlineLinearTagXMLString } from 'vast-samples';
// Contains linear video ad with tracking events
```

#### Companion Ads
```typescript
import { InlineCompanionXMLString } from 'vast-samples';
// Contains companion banner ads alongside video
```

#### Non-Linear Ads
```typescript
import { InlineNonLinearXMLString } from 'vast-samples';
// Contains overlay and non-linear ad formats
```

#### Simple VAST
```typescript
import { InlineSimpleXMLString } from 'vast-samples';
// Basic VAST implementation with essential elements
```

#### Video Click Tracking
```typescript
import { InlineVideoClickTrackingXMLString } from 'vast-samples';
// Implementation with click tracking
```

## VAST Versions

Each VAST version is available in both inline and wrapper formats:

```typescript
// VAST 4.2
import { 
  InlineLinearTagXMLString,
  WrapperXMLString 
} from './sample-4.2-xml';

// VAST 4.1
import { 
  InlineLinearTagXMLString as VAST41Inline,
  WrapperXMLString as VAST41Wrapper 
} from './sample-4.1-xml';

// ... and so on for other versions
```

## Development

### Setup
```bash
# Install dependencies
npm install

# Run type checking
npm run typecheck

# Run linting
npm run lint

# Run tests
npm run test

# Build the project
npm run build
```

### Scripts

- `npm run typecheck`: Run TypeScript type checking
- `npm run lint`: Run ESLint
- `npm run format`: Format code using Prettier
- `npm run clean`: Clean build directory
- `npm run build`: Build the project
- `npm run test`: Run tests
- `npm run prepare`: Clean and build (runs automatically on npm install)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For issues and feature requests, please create an issue in the GitHub repository.
