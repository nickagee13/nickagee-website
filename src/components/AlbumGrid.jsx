import React, { useState, useEffect } from 'react'
import { albumImages } from '../utils/albumImages'

const AlbumGrid = () => {
  const [currentSet, setCurrentSet] = useState(0)
  const [hoveredAlbum, setHoveredAlbum] = useState(null)

  // Real album data from Nick's discography
  const albumSets = [
    [
      { id: 1, image: 'album-art/1-Portugal. The Man - Woodstock 2017-Assistant Engineer.jpg', artist: 'Portugal. The Man', album: 'Woodstock', year: '2017', credit: 'Assistant Engineer' },
      { id: 2, image: 'album-art/2-Red Hot Chili Peppers - The Getaway 2016-Assistant Engineer.jpg', artist: 'Red Hot Chili Peppers', album: 'The Getaway', year: '2016', credit: 'Assistant Engineer' },
      { id: 3, image: 'album-art/3. Cody Simpson - B-Sides 2019 Assistant Engineer.jpg', artist: 'Cody Simpson', album: 'B-Sides', year: '2019', credit: 'Assistant Engineer' },
      { id: 4, image: 'album-art/4. DAISY - Smoke About It 2016 Engineer:Mix Engineer.jpg', artist: 'DAISY', album: 'Smoke About It', year: '2016', credit: 'Engineer/Mix Engineer' },
      { id: 5, image: 'album-art/5. dae zhen - Fontana 2018 Co-Producer, Engineer, Guitar, Mix Engineer.jpg', artist: 'dae zhen', album: 'Fontana', year: '2018', credit: 'Co-Producer, Engineer, Guitar, Mix Engineer' },
      { id: 6, image: 'album-art/6. Motörhead - Bad Magic 2015 Assistant Engineer.jpg', artist: 'Motörhead', album: 'Bad Magic', year: '2015', credit: 'Assistant Engineer' },
      { id: 7, image: 'album-art/7. Forza Motorsport 7 2019 Assistant Engineer.jpg', artist: 'Various Artists', album: 'Forza Motorsport 7', year: '2019', credit: 'Assistant Engineer' },
      { id: 8, image: 'album-art/8. Falling In Reverse - Coming Home 2017 Assistant Engineer.jpg', artist: 'Falling In Reverse', album: 'Coming Home', year: '2017', credit: 'Assistant Engineer' },
      { id: 9, image: 'album-art/9. Blues Traveler - Blow Up The Moon 2015 Assistant Engineer.jpg', artist: 'Blues Traveler', album: 'Blow Up The Moon', year: '2015', credit: 'Assistant Engineer' },
      { id: 10, image: 'album-art/10. Virgins At Heart - Greek God Of Economics 2021 Mix Engineer.jpg', artist: 'Virgins At Heart', album: 'Greek God Of Economics', year: '2021', credit: 'Mix Engineer' },
      { id: 11, image: 'album-art/11. Plain White T\'s - Land Of The Living 2017 Engineer.jpg', artist: 'Plain White T\'s', album: 'Land Of The Living', year: '2017', credit: 'Engineer' },
      { id: 12, image: 'album-art/12. Weird Al - Beat On The Brat 2018 Engineer.jpg', artist: 'Weird Al', album: 'Beat On The Brat', year: '2018', credit: 'Engineer' },
      { id: 13, image: 'album-art/13. inotherwords - FUP 2022 Mix Engineer:Mastering Engineer.jpeg', artist: 'inotherwords', album: 'FUP', year: '2022', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 14, image: 'album-art/14. soki yue - wanted you to bleed 2024 Mix Engineer:Mastering Engineer.jpeg', artist: 'soki yue', album: 'wanted you to bleed', year: '2024', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 15, image: 'album-art/15. Donn Wilkerson - Contemplation 2020 Mix Engineer.jpg', artist: 'Donn Wilkerson', album: 'Contemplation', year: '2020', credit: 'Mix Engineer' },
      { id: 16, image: 'album-art/16. James The Mark - Moving As Motions 2023 Mix Engineer:Mastering Engineer.jpg', artist: 'James The Mark', album: 'Moving As Motions', year: '2023', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 17, image: 'album-art/17. soki yue - oakwood tree 2024 Mix Engineer:Mastering Engineer.jpeg', artist: 'soki yue', album: 'oakwood tree', year: '2024', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 18, image: 'album-art/18. Dodo Museum - Baby 2023 Mix Engineer:Mastering Engineer.jpg', artist: 'Dodo Museum', album: 'Baby', year: '2023', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 19, image: 'album-art/19. Hot Chocolate Party - Revue III 2017 Co-Producer, Engineer, Mix Engineer, Mastering Engineer.jpg', artist: 'Hot Chocolate Party', album: 'Revue III', year: '2017', credit: 'Co-Producer, Engineer, Mix Engineer, Mastering Engineer' },
      { id: 20, image: 'album-art/20. Ben Camden - Night Lights 2021 Mix Engineer.jpg', artist: 'Ben Camden', album: 'Night Lights', year: '2021', credit: 'Mix Engineer' }
    ],
    [
      { id: 21, image: 'album-art/21. BB Bean - Tragedy Of The Heart 2023 Mix Engineer.jpeg', artist: 'BB Bean', album: 'Tragedy Of The Heart', year: '2023', credit: 'Mix Engineer' },
      { id: 22, image: 'album-art/22. SEB - Off Air 2019 Mix Engineer:Mastering Engineer.jpg', artist: 'SEB', album: 'Off Air', year: '2019', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 23, image: 'album-art/23. Silverlake Psychics - Bloom + True Romance 2017 Mix Engineer.jpg', artist: 'Silverlake Psychics', album: 'Bloom + True Romance', year: '2017', credit: 'Mix Engineer' },
      { id: 24, image: 'album-art/24. Offbeat Drama - Darker 2024 Mix Engineer.jpg', artist: 'Offbeat Drama', album: 'Darker', year: '2024', credit: 'Mix Engineer' },
      { id: 25, image: 'album-art/25. DANE - Lovesick 2020 Mix Engineer:Mastering Engineer.jpeg', artist: 'DANE', album: 'Lovesick', year: '2020', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 26, image: 'album-art/26. flux.wav - Parallel Shadows 2023 Producer, Guitar, Engineer, Mix Engineer, Mastering Engineer.jpg', artist: 'flux.wav', album: 'Parallel Shadows', year: '2023', credit: 'Producer, Guitar, Engineer, Mix Engineer, Mastering Engineer' },
      { id: 27, image: 'album-art/27. DANE - Sunrise 2021 Mix Engineer:Mastering Engineer.jpg', artist: 'DANE', album: 'Sunrise', year: '2021', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 28, image: 'album-art/28. flux.wav - little sur 2022 Producer, Guitar, Engineer, Mix Engineer, Mastering Engineer.jpg', artist: 'flux.wav', album: 'little sur', year: '2022', credit: 'Producer, Guitar, Engineer, Mix Engineer, Mastering Engineer' },
      { id: 29, image: 'album-art/29. Donn Wilkerson - Quiet Action 2023 Mix Engineer.jpeg', artist: 'Donn Wilkerson', album: 'Quiet Action', year: '2023', credit: 'Mix Engineer' },
      { id: 30, image: 'album-art/30. flux.wav - Darkroom 2023 Producer, Guitar, Engineer, Mix Engineer, Mastering Engineer.jpg', artist: 'flux.wav', album: 'Darkroom', year: '2023', credit: 'Producer, Guitar, Engineer, Mix Engineer, Mastering Engineer' },
      { id: 31, image: 'album-art/31. Donn Wilkerson - Offbeat Drama - Lighter 2024 Mix Engineer.jpg', artist: 'Donn Wilkerson', album: 'Lighter', year: '2024', credit: 'Mix Engineer' },
      { id: 32, image: 'album-art/32. Cohle Griz - Last Dance 2020 Mix Engineer:Mastering Engineer.jpeg', artist: 'Cohle Griz', album: 'Last Dance', year: '2020', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 33, image: 'album-art/33. soki yue - White Rabbit 2025 Mix Engineer:Mastering Engineer.jpg', artist: 'soki yue', album: 'White Rabbit', year: '2025', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 34, image: 'album-art/34. Jordon Hudson - Genesis 2021 Mix Engineer:Mastering Engineer.jpeg', artist: 'Jordon Hudson', album: 'Genesis', year: '2021', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 35, image: 'album-art/35. Donn Wilkerson - The Lost Year 2021 Mix Engineer.jpeg', artist: 'Donn Wilkerson', album: 'The Lost Year', year: '2021', credit: 'Mix Engineer' },
      { id: 36, image: 'album-art/36. Laela Giovanna - Let You Go 2021 Mix Engineer:Mastering Engineer.jpg', artist: 'Laela Giovanna', album: 'Let You Go', year: '2021', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 37, image: 'album-art/37. Silverlake Psychics - Flowers For Lovers 2017 Mix Engineer.jpeg', artist: 'Silverlake Psychics', album: 'Flowers For Lovers', year: '2017', credit: 'Mix Engineer' },
      { id: 38, image: 'album-art/38. DANE - Getting Through It 2020 Mix Engineer:Mastering Engineer.jpeg', artist: 'DANE', album: 'Getting Through It', year: '2020', credit: 'Mix Engineer/Mastering Engineer' },
      { id: 39, image: 'album-art/39. Rob Staley - Rob Staley 2015 Engineer, Mix Engineer, Mastering Engineer.jpg', artist: 'Rob Staley', album: 'Rob Staley', year: '2015', credit: 'Engineer, Mix Engineer, Mastering Engineer' },
      { id: 40, image: 'album-art/40. Hot Chocolate Party - The Revue II 2014 Co-Producer, Guitar, Engineer, Mix Engineer, Mastering Engineer.jpg', artist: 'Hot Chocolate Party', album: 'The Revue II', year: '2014', credit: 'Co-Producer, Guitar, Engineer, Mix Engineer, Mastering Engineer' }
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
                src={albumImages[album.id] || `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YwZjBmMCIvPg0KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSI+QWxidW0gQXJ0PC90ZXh0Pg0KPC9zdmc+`}
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
              <h3 style={{ fontFamily: 'Suez One, serif' }}>{hoveredAlbum.artist}</h3>
              <p style={{ fontFamily: 'Suez One, serif' }}>{hoveredAlbum.album} ({hoveredAlbum.year})</p>
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