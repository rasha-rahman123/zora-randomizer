// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const got = require('got');
const FileType = require('file-type');

export default async (req, res) => {
    const stream = got.stream(req.query.url);
    res.json(await FileType.fromStream(stream))
  }
  