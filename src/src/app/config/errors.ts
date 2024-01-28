/** Base class for config errors. */
export class ConfigError extends Error {}

/** Raised when config parsing fails. */
export class ConfigParseError extends ConfigError {
  constructor() {
    super("Failed to parse config!");
  }
}
