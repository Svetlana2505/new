import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Title } from "../Title";
import { BoxRegister } from "../BoxRegister";
import { FormPosition } from "../FormPosition";
import { Button } from "../Button";
import { FormWrapper } from "./Form.styled";
import { addUsers } from "../../redux/registration/registration-operations";
import { InputFile } from "../InputFile/inputFile";
import { HandySvg } from "handy-svg";
import svg from "../../images/success-image.svg";
import { selectSuccess } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const Form = () => {
  const success = useSelector(selectSuccess);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addUsers({ ...data }));
    reset();
    // console.log(data);
  };

  return (
    <>
      {success ? (
        <Title name="sign" color={"rgba(0, 0, 0, 0.87)"} marginBottom={"50px"}>
          User successfully registered
        </Title>
      ) : (
        <Title name="sign" color={"rgba(0, 0, 0, 0.87)"} marginBottom={"50px"}>
          Working with POST reguest
        </Title>
      )}
      {success ? (
        <HandySvg src={svg} width="328px" height="290" />
      ) : (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <BoxRegister register={register} errors={errors} />
          <FormPosition register={register} />
          <InputFile register={register} />
          <Button
            type="submit"
            // disabled={isValid}
            background={"#B4B4B4"}
            color={"rgba(255, 255, 255, 0.87)"}
          >
            Sign up
          </Button>
        </FormWrapper>
      )}
    </>
  );
};
