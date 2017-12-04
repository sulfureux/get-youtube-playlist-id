const getYoutubePlaylistId = require('./index')

let url = ''

url = 'https://www.youtube.com/watch?v=4cZuzD9LTRY&list=PLpjK416fmKwQeaR-02rel8JGZZp2T8VFO'
console.log(getYoutubePlaylistId(url))

url = 'https://www.youtube.com/playlist?list=PLpjK416fmKwQeaR-02rel8JGZZp2T8VFO'
console.log(getYoutubePlaylistId(url))