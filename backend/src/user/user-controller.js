class UserController {
  createUser = (req, res) => {
    req.body['phone'] = req.body['phone'].replace(/[^+0-9]/g, '');
    console.log(req.body);

    res.json('Hi');
  }

  authUser = (req, res) => {

  }
}

module.exports = new UserController();