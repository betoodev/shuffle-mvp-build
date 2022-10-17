import path from 'path'
import { promises as fs } from 'fs'

export default async function handler(req, res) {
  // shuffle folder
  const dirRelativeToPublicFolder = 's'
  // html folders on shuffle folder
  const dirRelativeToPagesOnShuffleExportedFolder = 'public'

  const dir = path.resolve('./public', dirRelativeToPublicFolder)

  // get a list of folders inside dirRelativeToPublicFolder
  const exportedFolders = await fs.readdir(dir)

  // create an array of each folder and the list of html files inside it
  const exportArray = []
  const exportedFoldersHtml = await Promise.all(
    exportedFolders.map(async (name) => {
      if (name.indexOf('.') > -1) return

      const pagesPath = path.join(
        '/',
        name,
        dirRelativeToPagesOnShuffleExportedFolder
      )
      const baseURL = dirRelativeToPublicFolder + pagesPath + '/'
      const pageList = await fs.readdir(dir + pagesPath)
      const pages = pageList.filter((page) => path.extname(page) === '.html')

      exportArray.push({ name, baseURL, pages })
    })
  )

  //Return the content of the data dir in JSON
  /* Example:
[
    {
        "name": "shuffle-mvp-build",
        "pageListFiltered": [
            "about.html",
            "index.html"
        ]
    },
    {
        "name": "shuffle-mvp-build-2",
        "pageListFiltered": [
            "about.html",
            "index.html"
        ]
    },
    {
        "name": "shuffle-mvp-build-3",
        "pageListFiltered": [
            "about.html",
            "index.html"
        ]
    }
]
  */
  res.status(200).json(exportArray)
}
