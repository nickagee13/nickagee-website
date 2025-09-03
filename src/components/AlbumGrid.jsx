import React, { useState, useEffect } from 'react'

const AlbumGrid = () => {
  const [currentSet, setCurrentSet] = useState(0)
  const [hoveredAlbum, setHoveredAlbum] = useState(null)

  // Sample album data - you'll replace this with your actual data
  const albumSets = [
    [
      { id: 1, image: 'album1.jpg', artist: 'Artist Name', album: 'Album Title', year: '2024', credit: 'Mix Engineer' },
      { id: 2, image: 'album2.jpg', artist: 'Artist Name', album: 'Album Title', year: '2024', credit: 'Producer' },
      { id: 3, image: 'album3.jpg', artist: 'Artist Name', album: 'Album Title', year: '2023', credit: 'Mix Engineer' },
      { id: 4, image: 'album4.jpg', artist: 'Artist Name', album: 'Album Title', year: '2023', credit: 'Recording Engineer' },
      { id: 5, image: 'album5.jpg', artist: 'Artist Name', album: 'Album Title', year: '2023', credit: 'Mix Engineer' },
      { id: 6, image: 'album6.jpg', artist: 'Artist Name', album: 'Album Title', year: '2022', credit: 'Producer' },
      { id: 7, image: 'album7.jpg', artist: 'Artist Name', album: 'Album Title', year: '2022', credit: 'Mix Engineer' },
      { id: 8, image: 'album8.jpg', artist: 'Artist Name', album: 'Album Title', year: '2022', credit: 'Recording Engineer' },
      { id: 9, image: 'album9.jpg', artist: 'Artist Name', album: 'Album Title', year: '2021', credit: 'Mix Engineer' },
      { id: 10, image: 'album10.jpg', artist: 'Artist Name', album: 'Album Title', year: '2021', credit: 'Producer' },
      { id: 11, image: 'album11.jpg', artist: 'Artist Name', album: 'Album Title', year: '2021', credit: 'Mix Engineer' },
      { id: 12, image: 'album12.jpg', artist: 'Artist Name', album: 'Album Title', year: '2020', credit: 'Recording Engineer' },
      { id: 13, image: 'album13.jpg', artist: 'Artist Name', album: 'Album Title', year: '2020', credit: 'Mix Engineer' },
      { id: 14, image: 'album14.jpg', artist: 'Artist Name', album: 'Album Title', year: '2020', credit: 'Producer' },
      { id: 15, image: 'album15.jpg', artist: 'Artist Name', album: 'Album Title', year: '2019', credit: 'Mix Engineer' },
      { id: 16, image: 'album16.jpg', artist: 'Artist Name', album: 'Album Title', year: '2019', credit: 'Recording Engineer' },
      { id: 17, image: 'album17.jpg', artist: 'Artist Name', album: 'Album Title', year: '2019', credit: 'Mix Engineer' },
      { id: 18, image: 'album18.jpg', artist: 'Artist Name', album: 'Album Title', year: '2018', credit: 'Producer' },
      { id: 19, image: 'album19.jpg', artist: 'Artist Name', album: 'Album Title', year: '2018', credit: 'Mix Engineer' },
      { id: 20, image: 'album20.jpg', artist: 'Artist Name', album: 'Album Title', year: '2018', credit: 'Recording Engineer' }
    ],
    // Second set of albums - you can add more sets here
    [
      { id: 21, image: 'album21.jpg', artist: 'Another Artist', album: 'Another Album', year: '2024', credit: 'Mix Engineer' },
      { id: 22, image: 'album22.jpg', artist: 'Another Artist', album: 'Another Album', year: '2023', credit: 'Producer' },
      // ... more albums for the second set
    ]
  ]

  // Auto-rotate albums every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % albumSets.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [albumSets.length])

  const currentAlbums = albumSets[currentSet] || []

  return (
    <section className="album-grid-section">
      <div className="container">
        <div className="album-grid">
          {currentAlbums.map((album) => (
            <div
              key={album.id}
              className="album-item"
              onMouseEnter={() => setHoveredAlbum(album)}
              onMouseLeave={() => setHoveredAlbum(null)}
            >
              <img
                src={`/src/assets/${album.image}`}
                alt={`${album.artist} - ${album.album}`}
                onError={(e) => {
                  // Placeholder for missing images
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YwZjBmMCIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSI+QWxidW0gQXJ0PC90ZXh0Pg0KPC9zdmc+'
                }}
              />
            </div>
          ))}
        </div>
        
        <div className="album-info">
          {hoveredAlbum ? (
            <div className="album-details">
              <h3>{hoveredAlbum.artist}</h3>
              <p>{hoveredAlbum.album} ({hoveredAlbum.year})</p>
              <span className="credit">{hoveredAlbum.credit}</span>
            </div>
          ) : (
            <div className="album-placeholder">
              <p>Hover over an album to see details</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AlbumGrid