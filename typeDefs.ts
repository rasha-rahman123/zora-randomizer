export const typeDefs = `
directive @entity on OBJECT

directive @derivedFrom(field: String) on FIELD_DEFINITION

directive @subgraphId(id: String) on OBJECT

type Ask {
  """<tokenId>-<ownerAddress>"""
  id: ID!

  """The Media associated with the Ask"""
  media: Media!

  """The Currency of the Ask"""
  currency: Currency!

  """The amount of Currency of the Ask"""
  amount: BigInt!

  """The owner of the Ask"""
  owner: User!

  """The timestamp of the block the Ask was created in"""
  createdAtTimestamp: BigInt!

  """The number of the block the Ask created in"""
  createdAtBlockNumber: BigInt!
}

input Ask_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  media: String
  media_not: String
  media_gt: String
  media_lt: String
  media_gte: String
  media_lte: String
  media_in: [String!]
  media_not_in: [String!]
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  currency: String
  currency_not: String
  currency_gt: String
  currency_lt: String
  currency_gte: String
  currency_lte: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  owner: String
  owner_not: String
  owner_gt: String
  owner_lt: String
  owner_gte: String
  owner_lte: String
  owner_in: [String!]
  owner_not_in: [String!]
  owner_contains: String
  owner_not_contains: String
  owner_starts_with: String
  owner_not_starts_with: String
  owner_ends_with: String
  owner_not_ends_with: String
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  createdAtBlockNumber: BigInt
  createdAtBlockNumber_not: BigInt
  createdAtBlockNumber_gt: BigInt
  createdAtBlockNumber_lt: BigInt
  createdAtBlockNumber_gte: BigInt
  createdAtBlockNumber_lte: BigInt
  createdAtBlockNumber_in: [BigInt!]
  createdAtBlockNumber_not_in: [BigInt!]
}

enum Ask_orderBy {
  id
  media
  currency
  amount
  owner
  createdAtTimestamp
  createdAtBlockNumber
}

type Bid {
  """<token-id>-<bidderAddress>"""
  id: ID!

  """The Media associated with the Bid"""
  media: Media!

  """The Currency of the Bid"""
  currency: Currency!

  """The amount of Currency of the Bid"""
  amount: BigInt!

  """The sellOnShare of the Bid"""
  sellOnShare: BigInt!

  """The bidder of the Bid"""
  bidder: User!

  """The recipient of Media if the Bid is accepted"""
  recipient: User!

  """The timestamp of the block the Bid was created in"""
  createdAtTimestamp: BigInt!

  """The number of the block the Bid was created in"""
  createdAtBlockNumber: BigInt!
}

input Bid_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  media: String
  media_not: String
  media_gt: String
  media_lt: String
  media_gte: String
  media_lte: String
  media_in: [String!]
  media_not_in: [String!]
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  currency: String
  currency_not: String
  currency_gt: String
  currency_lt: String
  currency_gte: String
  currency_lte: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  sellOnShare: BigInt
  sellOnShare_not: BigInt
  sellOnShare_gt: BigInt
  sellOnShare_lt: BigInt
  sellOnShare_gte: BigInt
  sellOnShare_lte: BigInt
  sellOnShare_in: [BigInt!]
  sellOnShare_not_in: [BigInt!]
  bidder: String
  bidder_not: String
  bidder_gt: String
  bidder_lt: String
  bidder_gte: String
  bidder_lte: String
  bidder_in: [String!]
  bidder_not_in: [String!]
  bidder_contains: String
  bidder_not_contains: String
  bidder_starts_with: String
  bidder_not_starts_with: String
  bidder_ends_with: String
  bidder_not_ends_with: String
  recipient: String
  recipient_not: String
  recipient_gt: String
  recipient_lt: String
  recipient_gte: String
  recipient_lte: String
  recipient_in: [String!]
  recipient_not_in: [String!]
  recipient_contains: String
  recipient_not_contains: String
  recipient_starts_with: String
  recipient_not_starts_with: String
  recipient_ends_with: String
  recipient_not_ends_with: String
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  createdAtBlockNumber: BigInt
  createdAtBlockNumber_not: BigInt
  createdAtBlockNumber_gt: BigInt
  createdAtBlockNumber_lt: BigInt
  createdAtBlockNumber_gte: BigInt
  createdAtBlockNumber_lte: BigInt
  createdAtBlockNumber_in: [BigInt!]
  createdAtBlockNumber_not_in: [BigInt!]
}

enum Bid_orderBy {
  id
  media
  currency
  amount
  sellOnShare
  bidder
  recipient
  createdAtTimestamp
  createdAtBlockNumber
}

scalar BigDecimal

scalar BigInt

input Block_height {
  hash: Bytes
  number: Int
}

scalar Bytes

type Currency {
  """The address of the Currency"""
  id: ID!

  """The name of the Currency"""
  name: String!

  """The symbol of the Currency"""
  symbol: String!

  """The decimals of the Currency"""
  decimals: Int

  """Total Bid Liquidity of the Currency on all Zora Media"""
  liquidity: BigInt!

  """The active Bids denominated in the Currency"""
  activeBids(skip: Int = 0, first: Int = 100, orderBy: Bid_orderBy, orderDirection: OrderDirection, where: Bid_filter): [Bid!]

  """The active Asks denominated in the Currency"""
  activeAsks(skip: Int = 0, first: Int = 100, orderBy: Ask_orderBy, orderDirection: OrderDirection, where: Ask_filter): [Ask!]

  """The InactiveBids denominated in the Currency"""
  inactiveBids(skip: Int = 0, first: Int = 100, orderBy: InactiveBid_orderBy, orderDirection: OrderDirection, where: InactiveBid_filter): [InactiveBid!]

  """The InactiveAsks denominated in the Currency"""
  inactiveAsks(skip: Int = 0, first: Int = 100, orderBy: InactiveAsk_orderBy, orderDirection: OrderDirection, where: InactiveAsk_filter): [InactiveAsk!]
}

input Currency_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  name: String
  name_not: String
  name_gt: String
  name_lt: String
  name_gte: String
  name_lte: String
  name_in: [String!]
  name_not_in: [String!]
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  symbol: String
  symbol_not: String
  symbol_gt: String
  symbol_lt: String
  symbol_gte: String
  symbol_lte: String
  symbol_in: [String!]
  symbol_not_in: [String!]
  symbol_contains: String
  symbol_not_contains: String
  symbol_starts_with: String
  symbol_not_starts_with: String
  symbol_ends_with: String
  symbol_not_ends_with: String
  decimals: Int
  decimals_not: Int
  decimals_gt: Int
  decimals_lt: Int
  decimals_gte: Int
  decimals_lte: Int
  decimals_in: [Int!]
  decimals_not_in: [Int!]
  liquidity: BigInt
  liquidity_not: BigInt
  liquidity_gt: BigInt
  liquidity_lt: BigInt
  liquidity_gte: BigInt
  liquidity_lte: BigInt
  liquidity_in: [BigInt!]
  liquidity_not_in: [BigInt!]
}

enum Currency_orderBy {
  id
  name
  symbol
  decimals
  liquidity
  activeBids
  activeAsks
  inactiveBids
  inactiveAsks
}

type InactiveAsk {
  """<tokenId>-<transactionHash>-<logIndex>"""
  id: ID!

  """The Media associated with the InactiveAsk"""
  media: Media!

  """The why this Ask is Inactive"""
  type: MarketEventType!

  """The Currency of the InactiveAsk"""
  currency: Currency!

  """The amount of Currency of the InactiveAsk"""
  amount: BigInt!

  """The owner of the InactiveAsk"""
  owner: User!

  """The timestamp of the block the original Ask was created in"""
  createdAtTimestamp: BigInt!

  """The number of the block the original Ask was created in"""
  createdAtBlockNumber: BigInt!

  """The timestamp of the block the original Ask was inactivated in"""
  inactivatedAtTimestamp: BigInt!

  """The number of the block the original Ask was inactivated in"""
  inactivatedAtBlockNumber: BigInt!
}

input InactiveAsk_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  media: String
  media_not: String
  media_gt: String
  media_lt: String
  media_gte: String
  media_lte: String
  media_in: [String!]
  media_not_in: [String!]
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  type: MarketEventType
  type_not: MarketEventType
  currency: String
  currency_not: String
  currency_gt: String
  currency_lt: String
  currency_gte: String
  currency_lte: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  owner: String
  owner_not: String
  owner_gt: String
  owner_lt: String
  owner_gte: String
  owner_lte: String
  owner_in: [String!]
  owner_not_in: [String!]
  owner_contains: String
  owner_not_contains: String
  owner_starts_with: String
  owner_not_starts_with: String
  owner_ends_with: String
  owner_not_ends_with: String
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  createdAtBlockNumber: BigInt
  createdAtBlockNumber_not: BigInt
  createdAtBlockNumber_gt: BigInt
  createdAtBlockNumber_lt: BigInt
  createdAtBlockNumber_gte: BigInt
  createdAtBlockNumber_lte: BigInt
  createdAtBlockNumber_in: [BigInt!]
  createdAtBlockNumber_not_in: [BigInt!]
  inactivatedAtTimestamp: BigInt
  inactivatedAtTimestamp_not: BigInt
  inactivatedAtTimestamp_gt: BigInt
  inactivatedAtTimestamp_lt: BigInt
  inactivatedAtTimestamp_gte: BigInt
  inactivatedAtTimestamp_lte: BigInt
  inactivatedAtTimestamp_in: [BigInt!]
  inactivatedAtTimestamp_not_in: [BigInt!]
  inactivatedAtBlockNumber: BigInt
  inactivatedAtBlockNumber_not: BigInt
  inactivatedAtBlockNumber_gt: BigInt
  inactivatedAtBlockNumber_lt: BigInt
  inactivatedAtBlockNumber_gte: BigInt
  inactivatedAtBlockNumber_lte: BigInt
  inactivatedAtBlockNumber_in: [BigInt!]
  inactivatedAtBlockNumber_not_in: [BigInt!]
}

enum InactiveAsk_orderBy {
  id
  media
  type
  currency
  amount
  owner
  createdAtTimestamp
  createdAtBlockNumber
  inactivatedAtTimestamp
  inactivatedAtBlockNumber
}

type InactiveBid {
  """<tokenId>-<transactionHash>-<logIndex>"""
  id: ID!

  """The Media associated with the InactiveBid"""
  media: Media!

  """The reason why this Bid is Inactive"""
  type: MarketEventType!

  """The Currency of the InactiveBid"""
  currency: Currency!

  """The amount of Currency of the InactiveBid"""
  amount: BigInt!

  """The sellOnShare of the InactiveBid"""
  sellOnShare: BigInt!

  """The bidder of the InactiveBid"""
  bidder: User!

  """The recipient of the InactiveBid"""
  recipient: User!

  """The timestamp of the block the original Bid was created in"""
  createdAtTimestamp: BigInt!

  """The number of the block the original Bid was created in"""
  createdAtBlockNumber: BigInt!

  """The timestamp of the block the original Bid was inactivated in"""
  inactivatedAtTimestamp: BigInt!

  """The number of the block the original Bid was inactivated in"""
  inactivatedAtBlockNumber: BigInt!
}

input InactiveBid_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  media: String
  media_not: String
  media_gt: String
  media_lt: String
  media_gte: String
  media_lte: String
  media_in: [String!]
  media_not_in: [String!]
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  type: MarketEventType
  type_not: MarketEventType
  currency: String
  currency_not: String
  currency_gt: String
  currency_lt: String
  currency_gte: String
  currency_lte: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  amount: BigInt
  amount_not: BigInt
  amount_gt: BigInt
  amount_lt: BigInt
  amount_gte: BigInt
  amount_lte: BigInt
  amount_in: [BigInt!]
  amount_not_in: [BigInt!]
  sellOnShare: BigInt
  sellOnShare_not: BigInt
  sellOnShare_gt: BigInt
  sellOnShare_lt: BigInt
  sellOnShare_gte: BigInt
  sellOnShare_lte: BigInt
  sellOnShare_in: [BigInt!]
  sellOnShare_not_in: [BigInt!]
  bidder: String
  bidder_not: String
  bidder_gt: String
  bidder_lt: String
  bidder_gte: String
  bidder_lte: String
  bidder_in: [String!]
  bidder_not_in: [String!]
  bidder_contains: String
  bidder_not_contains: String
  bidder_starts_with: String
  bidder_not_starts_with: String
  bidder_ends_with: String
  bidder_not_ends_with: String
  recipient: String
  recipient_not: String
  recipient_gt: String
  recipient_lt: String
  recipient_gte: String
  recipient_lte: String
  recipient_in: [String!]
  recipient_not_in: [String!]
  recipient_contains: String
  recipient_not_contains: String
  recipient_starts_with: String
  recipient_not_starts_with: String
  recipient_ends_with: String
  recipient_not_ends_with: String
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  createdAtBlockNumber: BigInt
  createdAtBlockNumber_not: BigInt
  createdAtBlockNumber_gt: BigInt
  createdAtBlockNumber_lt: BigInt
  createdAtBlockNumber_gte: BigInt
  createdAtBlockNumber_lte: BigInt
  createdAtBlockNumber_in: [BigInt!]
  createdAtBlockNumber_not_in: [BigInt!]
  inactivatedAtTimestamp: BigInt
  inactivatedAtTimestamp_not: BigInt
  inactivatedAtTimestamp_gt: BigInt
  inactivatedAtTimestamp_lt: BigInt
  inactivatedAtTimestamp_gte: BigInt
  inactivatedAtTimestamp_lte: BigInt
  inactivatedAtTimestamp_in: [BigInt!]
  inactivatedAtTimestamp_not_in: [BigInt!]
  inactivatedAtBlockNumber: BigInt
  inactivatedAtBlockNumber_not: BigInt
  inactivatedAtBlockNumber_gt: BigInt
  inactivatedAtBlockNumber_lt: BigInt
  inactivatedAtBlockNumber_gte: BigInt
  inactivatedAtBlockNumber_lte: BigInt
  inactivatedAtBlockNumber_in: [BigInt!]
  inactivatedAtBlockNumber_not_in: [BigInt!]
}

enum InactiveBid_orderBy {
  id
  media
  type
  currency
  amount
  sellOnShare
  bidder
  recipient
  createdAtTimestamp
  createdAtBlockNumber
  inactivatedAtTimestamp
  inactivatedAtBlockNumber
}

"""The Types for MarketEvents (Asks, Bids)"""
enum MarketEventType {
  Finalized
  Removed
}

type Media {
  """The tokenId on the Zora Media Contract"""
  id: ID!

  """The current owner of the Media"""
  owner: User!

  """The creator of the Media"""
  creator: User!

  """The previous owner of the Zora Media's Market"""
  prevOwner: User!

  """The approved user of the Media"""
  approved: User

  """The sha256 hash of the media's content"""
  contentHash: Bytes!

  """The sha256 hash of the media's metadata"""
  metadataHash: Bytes!

  """The uri of the content"""
  contentURI: String!

  """The uri of the metadata"""
  metadataURI: String!

  """The bid share for the current owner of the Media"""
  ownerBidShare: BigInt!

  """The bid share for the creator of the Media"""
  creatorBidShare: BigInt!

  """The bid share for the previous owner of the Media's market"""
  prevOwnerBidShare: BigInt!

  """The timestamp of the block the Media was minted in"""
  createdAtTimestamp: BigInt!

  """The number of the block the Media was minted in"""
  createdAtBlockNumber: BigInt!

  """The timestamp of the block the Media was burned in"""
  burnedAtTimeStamp: BigInt

  """The number of the block the Media was burned in"""
  burnedAtBlockNumber: BigInt

  """The current Ask of the Media"""
  currentAsk: Ask

  """The current Bids on the Media"""
  currentBids(skip: Int = 0, first: Int = 100, orderBy: Bid_orderBy, orderDirection: OrderDirection, where: Bid_filter): [Bid!]

  """The InactiveAsks of the Media"""
  inactiveAsks(skip: Int = 0, first: Int = 100, orderBy: InactiveAsk_orderBy, orderDirection: OrderDirection, where: InactiveAsk_filter): [InactiveAsk!]

  """The InactiveBids of the Media"""
  inactiveBids(skip: Int = 0, first: Int = 100, orderBy: InactiveBid_orderBy, orderDirection: OrderDirection, where: InactiveBid_filter): [InactiveBid!]
}

input Media_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  owner: String
  owner_not: String
  owner_gt: String
  owner_lt: String
  owner_gte: String
  owner_lte: String
  owner_in: [String!]
  owner_not_in: [String!]
  owner_contains: String
  owner_not_contains: String
  owner_starts_with: String
  owner_not_starts_with: String
  owner_ends_with: String
  owner_not_ends_with: String
  creator: String
  creator_not: String
  creator_gt: String
  creator_lt: String
  creator_gte: String
  creator_lte: String
  creator_in: [String!]
  creator_not_in: [String!]
  creator_contains: String
  creator_not_contains: String
  creator_starts_with: String
  creator_not_starts_with: String
  creator_ends_with: String
  creator_not_ends_with: String
  prevOwner: String
  prevOwner_not: String
  prevOwner_gt: String
  prevOwner_lt: String
  prevOwner_gte: String
  prevOwner_lte: String
  prevOwner_in: [String!]
  prevOwner_not_in: [String!]
  prevOwner_contains: String
  prevOwner_not_contains: String
  prevOwner_starts_with: String
  prevOwner_not_starts_with: String
  prevOwner_ends_with: String
  prevOwner_not_ends_with: String
  approved: String
  approved_not: String
  approved_gt: String
  approved_lt: String
  approved_gte: String
  approved_lte: String
  approved_in: [String!]
  approved_not_in: [String!]
  approved_contains: String
  approved_not_contains: String
  approved_starts_with: String
  approved_not_starts_with: String
  approved_ends_with: String
  approved_not_ends_with: String
  contentHash: Bytes
  contentHash_not: Bytes
  contentHash_in: [Bytes!]
  contentHash_not_in: [Bytes!]
  contentHash_contains: Bytes
  contentHash_not_contains: Bytes
  metadataHash: Bytes
  metadataHash_not: Bytes
  metadataHash_in: [Bytes!]
  metadataHash_not_in: [Bytes!]
  metadataHash_contains: Bytes
  metadataHash_not_contains: Bytes
  contentURI: String
  contentURI_not: String
  contentURI_gt: String
  contentURI_lt: String
  contentURI_gte: String
  contentURI_lte: String
  contentURI_in: [String!]
  contentURI_not_in: [String!]
  contentURI_contains: String
  contentURI_not_contains: String
  contentURI_starts_with: String
  contentURI_not_starts_with: String
  contentURI_ends_with: String
  contentURI_not_ends_with: String
  metadataURI: String
  metadataURI_not: String
  metadataURI_gt: String
  metadataURI_lt: String
  metadataURI_gte: String
  metadataURI_lte: String
  metadataURI_in: [String!]
  metadataURI_not_in: [String!]
  metadataURI_contains: String
  metadataURI_not_contains: String
  metadataURI_starts_with: String
  metadataURI_not_starts_with: String
  metadataURI_ends_with: String
  metadataURI_not_ends_with: String
  ownerBidShare: BigInt
  ownerBidShare_not: BigInt
  ownerBidShare_gt: BigInt
  ownerBidShare_lt: BigInt
  ownerBidShare_gte: BigInt
  ownerBidShare_lte: BigInt
  ownerBidShare_in: [BigInt!]
  ownerBidShare_not_in: [BigInt!]
  creatorBidShare: BigInt
  creatorBidShare_not: BigInt
  creatorBidShare_gt: BigInt
  creatorBidShare_lt: BigInt
  creatorBidShare_gte: BigInt
  creatorBidShare_lte: BigInt
  creatorBidShare_in: [BigInt!]
  creatorBidShare_not_in: [BigInt!]
  prevOwnerBidShare: BigInt
  prevOwnerBidShare_not: BigInt
  prevOwnerBidShare_gt: BigInt
  prevOwnerBidShare_lt: BigInt
  prevOwnerBidShare_gte: BigInt
  prevOwnerBidShare_lte: BigInt
  prevOwnerBidShare_in: [BigInt!]
  prevOwnerBidShare_not_in: [BigInt!]
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  createdAtBlockNumber: BigInt
  createdAtBlockNumber_not: BigInt
  createdAtBlockNumber_gt: BigInt
  createdAtBlockNumber_lt: BigInt
  createdAtBlockNumber_gte: BigInt
  createdAtBlockNumber_lte: BigInt
  createdAtBlockNumber_in: [BigInt!]
  createdAtBlockNumber_not_in: [BigInt!]
  burnedAtTimeStamp: BigInt
  burnedAtTimeStamp_not: BigInt
  burnedAtTimeStamp_gt: BigInt
  burnedAtTimeStamp_lt: BigInt
  burnedAtTimeStamp_gte: BigInt
  burnedAtTimeStamp_lte: BigInt
  burnedAtTimeStamp_in: [BigInt!]
  burnedAtTimeStamp_not_in: [BigInt!]
  burnedAtBlockNumber: BigInt
  burnedAtBlockNumber_not: BigInt
  burnedAtBlockNumber_gt: BigInt
  burnedAtBlockNumber_lt: BigInt
  burnedAtBlockNumber_gte: BigInt
  burnedAtBlockNumber_lte: BigInt
  burnedAtBlockNumber_in: [BigInt!]
  burnedAtBlockNumber_not_in: [BigInt!]
}

enum Media_orderBy {
  id
  owner
  creator
  prevOwner
  approved
  contentHash
  metadataHash
  contentURI
  metadataURI
  ownerBidShare
  creatorBidShare
  prevOwnerBidShare
  createdAtTimestamp
  createdAtBlockNumber
  burnedAtTimeStamp
  burnedAtBlockNumber
  currentAsk
  currentBids
  inactiveAsks
  inactiveBids
}

enum OrderDirection {
  asc
  desc
}

type Query {
  media(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Media
  medias(
    skip: Int = 0
    first: Int = 100
    orderBy: Media_orderBy
    orderDirection: OrderDirection
    where: Media_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Media!]!
  user(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): User
  users(
    skip: Int = 0
    first: Int = 100
    orderBy: User_orderBy
    orderDirection: OrderDirection
    where: User_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [User!]!
  ask(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Ask
  asks(
    skip: Int = 0
    first: Int = 100
    orderBy: Ask_orderBy
    orderDirection: OrderDirection
    where: Ask_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Ask!]!
  bid(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Bid
  bids(
    skip: Int = 0
    first: Int = 100
    orderBy: Bid_orderBy
    orderDirection: OrderDirection
    where: Bid_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Bid!]!
  inactiveBid(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): InactiveBid
  inactiveBids(
    skip: Int = 0
    first: Int = 100
    orderBy: InactiveBid_orderBy
    orderDirection: OrderDirection
    where: InactiveBid_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [InactiveBid!]!
  inactiveAsk(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): InactiveAsk
  inactiveAsks(
    skip: Int = 0
    first: Int = 100
    orderBy: InactiveAsk_orderBy
    orderDirection: OrderDirection
    where: InactiveAsk_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [InactiveAsk!]!
  currency(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Currency
  currencies(
    skip: Int = 0
    first: Int = 100
    orderBy: Currency_orderBy
    orderDirection: OrderDirection
    where: Currency_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Currency!]!
  transfer(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Transfer
  transfers(
    skip: Int = 0
    first: Int = 100
    orderBy: Transfer_orderBy
    orderDirection: OrderDirection
    where: Transfer_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Transfer!]!
  uriupdate(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): URIUpdate
  uriupdates(
    skip: Int = 0
    first: Int = 100
    orderBy: URIUpdate_orderBy
    orderDirection: OrderDirection
    where: URIUpdate_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [URIUpdate!]!

  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Subscription {
  media(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Media
  medias(
    skip: Int = 0
    first: Int = 100
    orderBy: Media_orderBy
    orderDirection: OrderDirection
    where: Media_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Media!]!
  user(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): User
  users(
    skip: Int = 0
    first: Int = 100
    orderBy: User_orderBy
    orderDirection: OrderDirection
    where: User_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [User!]!
  ask(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Ask
  asks(
    skip: Int = 0
    first: Int = 100
    orderBy: Ask_orderBy
    orderDirection: OrderDirection
    where: Ask_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Ask!]!
  bid(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Bid
  bids(
    skip: Int = 0
    first: Int = 100
    orderBy: Bid_orderBy
    orderDirection: OrderDirection
    where: Bid_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Bid!]!
  inactiveBid(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): InactiveBid
  inactiveBids(
    skip: Int = 0
    first: Int = 100
    orderBy: InactiveBid_orderBy
    orderDirection: OrderDirection
    where: InactiveBid_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [InactiveBid!]!
  inactiveAsk(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): InactiveAsk
  inactiveAsks(
    skip: Int = 0
    first: Int = 100
    orderBy: InactiveAsk_orderBy
    orderDirection: OrderDirection
    where: InactiveAsk_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [InactiveAsk!]!
  currency(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Currency
  currencies(
    skip: Int = 0
    first: Int = 100
    orderBy: Currency_orderBy
    orderDirection: OrderDirection
    where: Currency_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Currency!]!
  transfer(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): Transfer
  transfers(
    skip: Int = 0
    first: Int = 100
    orderBy: Transfer_orderBy
    orderDirection: OrderDirection
    where: Transfer_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [Transfer!]!
  uriupdate(
    id: ID!

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): URIUpdate
  uriupdates(
    skip: Int = 0
    first: Int = 100
    orderBy: URIUpdate_orderBy
    orderDirection: OrderDirection
    where: URIUpdate_filter

    """
    The block at which the query should be executed. Can either be an \`{ number: Int }\` containing the block number or a \`{ hash: Bytes }\` value containing a block hash. Defaults to the latest block when omitted.
    """
    block: Block_height
  ): [URIUpdate!]!

  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_
}

type Transfer {
  """<tokenId>-<transactionHash>-<logIndex>"""
  id: ID!

  """The Media associated with the Transfer"""
  media: Media!

  """The User transferring the Media"""
  from: User!

  """The User receiving the Media"""
  to: User!

  """The timestamp of the block the Transfer was created in"""
  createdAtTimestamp: BigInt!

  """The number of the block the Transfer was created in"""
  createdAtBlockNumber: BigInt!
}

input Transfer_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  media: String
  media_not: String
  media_gt: String
  media_lt: String
  media_gte: String
  media_lte: String
  media_in: [String!]
  media_not_in: [String!]
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  from: String
  from_not: String
  from_gt: String
  from_lt: String
  from_gte: String
  from_lte: String
  from_in: [String!]
  from_not_in: [String!]
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  to: String
  to_not: String
  to_gt: String
  to_lt: String
  to_gte: String
  to_lte: String
  to_in: [String!]
  to_not_in: [String!]
  to_contains: String
  to_not_contains: String
  to_starts_with: String
  to_not_starts_with: String
  to_ends_with: String
  to_not_ends_with: String
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  createdAtBlockNumber: BigInt
  createdAtBlockNumber_not: BigInt
  createdAtBlockNumber_gt: BigInt
  createdAtBlockNumber_lt: BigInt
  createdAtBlockNumber_gte: BigInt
  createdAtBlockNumber_lte: BigInt
  createdAtBlockNumber_in: [BigInt!]
  createdAtBlockNumber_not_in: [BigInt!]
}

enum Transfer_orderBy {
  id
  media
  from
  to
  createdAtTimestamp
  createdAtBlockNumber
}

type URIUpdate {
  """<tokenId>-<transactionHash>-<logIndex>"""
  id: ID!

  """The Type of URIUpdate"""
  type: URIUpdateType!

  """The previous uri"""
  from: String!

  """The new uri"""
  to: String!

  """The Media associated with the URIUpdate"""
  media: Media!

  """The owner of the Media"""
  owner: User!

  """The updater of the Media's URI"""
  updater: User!

  """The timestamp of the block the URIUpdate was created in"""
  createdAtTimestamp: BigInt!

  """The number of the block the URIUpdate was created in"""
  createdAtBlockNumber: BigInt!
}

"""The Types of URI Updates"""
enum URIUpdateType {
  Content
  Metadata
}

input URIUpdate_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  type: URIUpdateType
  type_not: URIUpdateType
  from: String
  from_not: String
  from_gt: String
  from_lt: String
  from_gte: String
  from_lte: String
  from_in: [String!]
  from_not_in: [String!]
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  to: String
  to_not: String
  to_gt: String
  to_lt: String
  to_gte: String
  to_lte: String
  to_in: [String!]
  to_not_in: [String!]
  to_contains: String
  to_not_contains: String
  to_starts_with: String
  to_not_starts_with: String
  to_ends_with: String
  to_not_ends_with: String
  media: String
  media_not: String
  media_gt: String
  media_lt: String
  media_gte: String
  media_lte: String
  media_in: [String!]
  media_not_in: [String!]
  media_contains: String
  media_not_contains: String
  media_starts_with: String
  media_not_starts_with: String
  media_ends_with: String
  media_not_ends_with: String
  owner: String
  owner_not: String
  owner_gt: String
  owner_lt: String
  owner_gte: String
  owner_lte: String
  owner_in: [String!]
  owner_not_in: [String!]
  owner_contains: String
  owner_not_contains: String
  owner_starts_with: String
  owner_not_starts_with: String
  owner_ends_with: String
  owner_not_ends_with: String
  updater: String
  updater_not: String
  updater_gt: String
  updater_lt: String
  updater_gte: String
  updater_lte: String
  updater_in: [String!]
  updater_not_in: [String!]
  updater_contains: String
  updater_not_contains: String
  updater_starts_with: String
  updater_not_starts_with: String
  updater_ends_with: String
  updater_not_ends_with: String
  createdAtTimestamp: BigInt
  createdAtTimestamp_not: BigInt
  createdAtTimestamp_gt: BigInt
  createdAtTimestamp_lt: BigInt
  createdAtTimestamp_gte: BigInt
  createdAtTimestamp_lte: BigInt
  createdAtTimestamp_in: [BigInt!]
  createdAtTimestamp_not_in: [BigInt!]
  createdAtBlockNumber: BigInt
  createdAtBlockNumber_not: BigInt
  createdAtBlockNumber_gt: BigInt
  createdAtBlockNumber_lt: BigInt
  createdAtBlockNumber_gte: BigInt
  createdAtBlockNumber_lte: BigInt
  createdAtBlockNumber_in: [BigInt!]
  createdAtBlockNumber_not_in: [BigInt!]
}

enum URIUpdate_orderBy {
  id
  type
  from
  to
  media
  owner
  updater
  createdAtTimestamp
  createdAtBlockNumber
}

type User {
  """Ethereum Address"""
  id: ID!

  """
  Users that have been granted \`ApprovalForAll\` Media of the User's Collection
  """
  authorizedUsers(skip: Int = 0, first: Int = 100, orderBy: User_orderBy, orderDirection: OrderDirection, where: User_filter): [User!]

  """The Media the User owns"""
  collection(skip: Int = 0, first: Int = 100, orderBy: Media_orderBy, orderDirection: OrderDirection, where: Media_filter): [Media!]!

  """The Media the User created"""
  creations(skip: Int = 0, first: Int = 100, orderBy: Media_orderBy, orderDirection: OrderDirection, where: Media_filter): [Media!]!

  """The active Bids made by the User"""
  currentBids(skip: Int = 0, first: Int = 100, orderBy: Bid_orderBy, orderDirection: OrderDirection, where: Bid_filter): [Bid!]
}

input User_filter {
  id: ID
  id_not: ID
  id_gt: ID
  id_lt: ID
  id_gte: ID
  id_lte: ID
  id_in: [ID!]
  id_not_in: [ID!]
  authorizedUsers: [String!]
  authorizedUsers_not: [String!]
  authorizedUsers_contains: [String!]
  authorizedUsers_not_contains: [String!]
}

enum User_orderBy {
  id
  authorizedUsers
  collection
  creations
  currentBids
}

type _Block_ {
  """The hash of the block"""
  hash: Bytes

  """The block number"""
  number: Int!
}

"""The type for the top-level _meta field"""
type _Meta_ {
  """
  Information about a specific subgraph block. The hash of the block
  will be null if the _meta field has a block constraint that asks for
  a block number. It will be filled if the _meta field has no block constraint
  and therefore asks for the latest  block
  
  """
  block: _Block_!

  """The deployment ID"""
  deployment: String!

  """If \`true\`, the subgraph encountered indexing errors at some past block"""
  hasIndexingErrors: Boolean!
}

enum _SubgraphErrorPolicy_ {
  """Data will be returned even if the subgraph has indexing errors"""
  allow

  """
  If the subgraph has indexing errors, data will be omitted. The default.
  """
  deny
}
`