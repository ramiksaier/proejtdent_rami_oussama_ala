const passport = require("passport");
const Docteur = require("../Model/Docteur");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: process.env.SECRET_KEY,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const docteur = await Docteur.findOne({ _id: jwt_payload.id }).select(
        "-password"
      );
      docteur ? done(null, docteur) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);

module.exports = isAuthdoc = () =>
  passport.authenticate("jwt", { session: false });
