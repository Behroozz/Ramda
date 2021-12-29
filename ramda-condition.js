import R from 'ramda'

const video = {
  '720p': 'funny-video-hd.pm4',
  '480p': 'funny-video-480p.pm4',
  isHP: true
}

const getVideoFilePath = video =>  {
  const file = video.isHP ? video['720p']: video['480p']
  return `/api/videos/${file}`
}

console.log(getVideoFilePath(video))

const getVideoFilePathR = R.compose(
  R.concat('/api/videos/'),
  R.ifElse(
    R.propEq('isHD', true),
    R.prop('720p'),
    R.prop('480p')
  )
)

console.log(getVideoFilePathR(video))

const truncate = str => {
  let truncatedStr
  if(str.length > 10) {
    truncatedStr = str.substring(0, 10)
    truncatedStr = `${truncatedStr}...`
  } else {
    truncatedStr = str
  }
  return truncatedStr
}

console.log(truncate('12345'))
console.log(truncate('12345678910'))

const truncateR = R.when(
  str => str.length > 10,
  // R.compose(
  //   R.gt(20),
  //   R.prop('length')
  // ),
  R.compose(
    R.concat('...'),
    R.take(10)
  )
)

console.log(truncateR('12345'))
console.log(truncateR('12345678910'))
