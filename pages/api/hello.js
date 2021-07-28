// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function hello(req, res) {
  res.json({message: req.query.message ?? 'Base message'})
}
