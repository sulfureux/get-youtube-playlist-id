# Get Youtube Playlist Id

Get Youtube playlist ID from Youtube's URL

## Install

```
npm install get-youtube-playlist-id
```

## Usage

### parameters

| Field     |        | Description                                                     |
|-----------|--------|-----------------------------------------------------------------|
|`url`      |Required|Youtube's URL                                                    |


```js
const getYotubePlaylistId = require('get-youtube-playlist-id')

var url = 'https://www.youtube.com/watch?v=4cZuzD9LTRY&list=PLpjK416fmKwQeaR-02rel8JGZZp2T8VFO'
var id = getYotubePlaylistId(url)

if (id !== flase) {
  console.log(`Playlist ID: ${id}`)  
} else {
  console.log('Invalid youtube playlist URL')
}
```

## License

MIT