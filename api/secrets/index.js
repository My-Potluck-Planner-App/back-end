module.exports = {
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
  JWT_SECRET:
    process.env.JWT_SECRET ||
    "If you're happy and you know it then your face will really show it",
};
