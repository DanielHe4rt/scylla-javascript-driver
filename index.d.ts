/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export const enum Compression {
  None = 0,
  Lz4 = 1,
  Snappy = 2
}
export interface ClusterConfig {
  nodes: Array<string>
  compression?: Compression
  defaultExecutionProfile?: ExecutionProfile
  keyspace?: string
  auth?: Auth
  ssl?: Ssl
}
export const enum Consistency {
  Any = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Quorum = 4,
  All = 5,
  LocalQuorum = 6,
  EachQuorum = 7,
  LocalOne = 10,
  Serial = 8,
  LocalSerial = 9
}
export interface ExecutionProfile {
  consistency?: Consistency
  requestTimeout?: number
}
export interface ConnectionOptions {
  keyspace?: string
  auth?: Auth
  ssl?: Ssl
}
export interface Auth {
  username: string
  password: string
}
export interface Ssl {
  caFilepath: string
  verifyMode?: VerifyMode
}
export const enum VerifyMode {
  None = 0,
  Peer = 1
}
export type ScyllaCluster = Cluster
export class Cluster {
  /**
   * Object config is in the format:
   * {
   *     nodes: Array<string>,
   * }
   */
  constructor(clusterConfig: ClusterConfig)
  /** Connect to the cluster */
  connect(keyspaceOrOptions?: string | ConnectionOptions | undefined | null, options?: ConnectionOptions | undefined | null): Promise<ScyllaSession>
}
export type ScyllaQuery = Query
export class Query {
  constructor(query: string)
}
export class ScyllaPreparedStatement {
  setConsistency(consistency: Consistency): void
}
export class Metrics {
  /** Returns counter for nonpaged queries */
  getQueriesNum(): bigint
  /** Returns counter for pages requested in paged queries */
  getQueriesIterNum(): bigint
  /** Returns counter for errors occurred in nonpaged queries */
  getErrorsNum(): bigint
  /** Returns counter for errors occurred in paged queries */
  getErrorsIterNum(): bigint
  /** Returns average latency in milliseconds */
  getLatencyAvgMs(): bigint
  /**
   * Returns latency from histogram for a given percentile
   *
   * # Arguments
   *
   * * `percentile` - float value (0.0 - 100.0), value will be clamped to this range
   */
  getLatencyPercentileMs(percentile: number): bigint
}
export class ScyllaSession {
  metrics(): Metrics
  execute(query: string | ScyllaPreparedStatement, parameters?: Array<number | string | Uuid> | undefined | null): Promise<any>
  query(scyllaQuery: Query, parameters?: Array<number | string | Uuid> | undefined | null): Promise<any>
  prepare(query: string): Promise<ScyllaPreparedStatement>
}
export class Uuid {
  /** Generates a random UUID v4. */
  static randomV4(): Uuid
  /** Parses a UUID from a string. It may fail if the string is not a valid UUID. */
  static fromString(str: string): Uuid
  /** Returns the string representation of the UUID. */
  toString(): string
}
