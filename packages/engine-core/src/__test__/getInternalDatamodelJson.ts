import { getInternalDatamodelJson } from '../getInternalDatamodelJson'

const datamodel = `type Album {
  id: Int! @id @map(name: "AlbumId")
  Title: String!
  Artist: Artist! @map(name: "ArtistId")
  Tracks: [Track]
}

type Track {
  id: Int! @id @map(name: "TrackId")
  Name: String!
  Album: Album @map(name: "AlbumId")
  AlbumId: Int
  MediaType: MediaType! @map(name: "MediaTypeId")
  Genre: Genre @map(name: "GenreId")
  Composer: String
  Milliseconds: Int!
  UnitPrice: Float!
  Playlists: [Playlist] @relation(name: "PlaylistTrack")
}

type MediaType {
  id: Int! @id @map(name: "MediaTypeId")
  Name: String
}

type Genre {
  id: Int! @id @map(name: "GenreId")
  Name: String
  Tracks: [Track]
}

type Artist {
  id: Int! @id @map(name: "ArtistId")
  Name: String
  Albums: [Album]
}

type Customer {
  id: Int! @id @map(name: "CustomerId")
  FirstName: String!
  LastName: String!
  Company: String
  Address: String
  City: String
  State: String
  Country: String
  PostalCode: String
  Phone: String
  Fax: String
  Email: String!
  SupportRep: Employee @map(name: "SupportRepId")
}

type Employee {
  id: Int! @id @map(name: "EmployeeId")
  FirstName: String!
  LastName: String!
  Title: String
  ReportsTo: Employee
  BirthDate: DateTime
  HireDate: DateTime
  Address: String
  City: String
  State: String
  Country: String
  PostalCode: String
  Phone: String
  Fax: String
  Email: String
}

type Invoice {
  id: Int! @id @map(name: "InvoiceId")
  Customer: Customer! @map(name: "CustomerId")
  InvoiceDate: DateTime!
  BillingAddress: String
  BillingCity: String
  BillingState: String
  BillingCountry: String
  BillingPostalCode: String
  Total: Float!
  Lines: [InvoiceLine]
}

type InvoiceLine {
  id: Int! @id @map(name: "InvoiceLineId")
  Invoice: Invoice! @map(name: "InvoiceId")
  Track: Track! @map(name: "TrackId")
  UnitPrice: Float!
  Quantity: Int!
}

type Playlist {
  id: Int! @id @map(name: "PlaylistId")
  Name: String
  Tracks: [Track] @relation(name: "PlaylistTrack")
}

type PlaylistTrack @relationTable {
  PlaylistId: Playlist
  TrackId: Track
}
`

async function main() {
  const json = await getInternalDatamodelJson(datamodel)
  console.dir(json, { depth: null })
}

main().catch(console.error)
