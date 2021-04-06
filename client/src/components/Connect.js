import { Link } from "react-router-dom";
import { Icon, Input, Button, Checkbox } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { toggle_add } from "../REduxJS/ACTION/Edit";
const Connect = () => {
  const dispatch = useDispatch();
  const roleuser = useSelector((state) => state.roleReducer.role);
  return (
    <div>
      <div className="iconlogo">
        <Button icon="sign-in" />
      </div>
      <form>
        <h1 className="login">Login</h1>
        <div className="icon">
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="google plus" icon="google plus" />
        </div>
        <div className="champ">
          <Input iconPosition="left" placeholder="Email">
            <Icon name="envelope" />
            <input />
          </Input>
          <br></br>
          <Input iconPosition="left" placeholder="Mot de passe">
            <Icon name="lock" />
            <input />
          </Input>
          <br></br>
        </div>
        <div className="btnc">
          <Button className="btnc" color="facebook">
            <Icon name="redo alternate" /> Connexion
          </Button>
        </div>
        <Checkbox className="chek" label="Remenber me?" />
        <div className="c1">
          {roleuser === "doctor" ? (
            <Link to="/adddoctor">
              <a href="Don't have an account? Sign Up">
                "Don't have an account? Sign Up"
              </a>
            </Link>
          ) : (
            <Link to="/addpatient">
              <p>
                <a
                  href="Don't have an account? Sign Up"
                  onClick={() => dispatch(toggle_add())}
                >
                  "Don't have an account? Sign Up"
                </a>
              </p>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};
export default Connect;
