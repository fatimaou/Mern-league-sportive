const User = require('../models/User');

module.exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body
      },
      {
        new: true
      }
    );
    // updatedUser is the document after update because of new: true
    res.status(200).json({
      message: 'User is updated successfully!',
      updatedUser
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error)
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id && req.user.isAdmin);
    res.status(200).json({
      message: 'User is deleted successfully!'
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getUser = async (req, res) => {
  const query = req.params.id || req.user.isAdmin
  console.log(query)
  try {
    const user = await User.findById(query);
    res.status(200).json(user);
    console.log(user)
  } catch (error) {
    res.status(500).json(error);
    console.log(error)
  }
};

module.exports.getUsers = async (req, res) => {
  const query = req.query.new || false || req.user.isAdmin;
  try {
    const users = query ?
      await User.find().sort({ _id: -1 }).limit(20) : // -1 => descending order & 1 => ascending order 
      await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getUsersStats = async (req, res) => {
  const date = new Date();
  const lastYearDate = new Date(date.setFullYear(date.getFullYear() - 1)); // setFullYear returns a new timestamp.
  try {
    // TODO Make sure I understand it
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYearDate } } },
      {
        $project: {
          month: { $month: "$createdAt" } // Add a new field (month) with the $month of $createdAt
        }
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        }
      }
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};