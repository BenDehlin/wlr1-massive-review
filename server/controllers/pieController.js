module.exports = {
  getPies: (req, res) => {
    const db = req.app.get('db')
    db.pies.get_pies()
    .then((pies) => {
      res.status(200).send(pies)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
  },
  addPie: (req, res) => {
    const db = req.app.get('db')
    const {flavor, description, crust, is_delicious} = req.body
    db.pies.add_pie(flavor, description, crust, is_delicious)
    .then((pies) => {
      res.status(200).send(pies)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
  },
  deletePie: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.pies.delete_pie(id)
    .then((pies) => {
      res.status(200).send(pies)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
  },
  editPie: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {flavor, description, crust, is_delicious} = req.body
    db.pies.edit_pie(id, flavor, description, crust, is_delicious)
    .then((pies) => {
      res.status(200).send(pies)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
  }
}